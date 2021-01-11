"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.noop = noop;
exports.functionalUpdate = functionalUpdate;
exports.isValidTimeout = isValidTimeout;
exports.ensureArray = ensureArray;
exports.difference = difference;
exports.timeUntilStale = timeUntilStale;
exports.parseQueryArgs = parseQueryArgs;
exports.parseMutationArgs = parseMutationArgs;
exports.parseFilterArgs = parseFilterArgs;
exports.matchQuery = matchQuery;
exports.getQueryKeyHashFn = getQueryKeyHashFn;
exports.hashQueryKey = hashQueryKey;
exports.stableValueHash = stableValueHash;
exports.partialMatchKey = partialMatchKey;
exports.partialDeepEqual = partialDeepEqual;
exports.replaceEqualDeep = replaceEqualDeep;
exports.replaceShallowEqualDeep = replaceShallowEqualDeep;
exports.isPlainObject = isPlainObject;
exports.isQueryKey = isQueryKey;
exports.isError = isError;
exports.sleep = sleep;
exports.getStatusProps = getStatusProps;
exports.scheduleMicrotask = scheduleMicrotask;
exports.unwrapRefs = unwrapRefs;
exports.isServer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

// UTILS
var isServer = typeof window === 'undefined';
exports.isServer = isServer;

function noop() {
  return undefined;
}

function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}

function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}

function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}

function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}

function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return (0, _extends2["default"])({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return unwrapRefs((0, _extends2["default"])({}, arg2, {
    queryKey: arg1
  }));
}

function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return unwrapRefs((0, _extends2["default"])({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      }));
    }

    return unwrapRefs((0, _extends2["default"])({}, arg2, {
      mutationKey: arg1
    }));
  }

  if (typeof arg1 === 'function') {
    return unwrapRefs((0, _extends2["default"])({}, arg2, {
      mutationFn: arg1
    }));
  }

  return unwrapRefs((0, _extends2["default"])({}, arg1));
}

function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [(0, _extends2["default"])({}, arg2, {
    queryKey: unwrapRefs(arg1)
  }), arg3] : [arg1 || {}, arg2];
}

function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      var hashFn = getQueryKeyHashFn(query.options);

      if (query.queryHash !== hashFn(queryKey)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var isActive;

  if (inactive === false || active && !inactive) {
    isActive = true;
  } else if (active === false || inactive && !active) {
    isActive = false;
  }

  if (typeof isActive === 'boolean' && query.isActive() !== isActive) {
    return false;
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}

function getQueryKeyHashFn(options) {
  return (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
}
/**
 * Default query keys hash function.
 */


function hashQueryKey(queryKey) {
  return stableValueHash(queryKey);
}
/**
 * Hashes the value into a stable hash.
 */


function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */


function partialMatchKey(a, b) {
  return partialDeepEqual(ensureArray(a), ensureArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */


function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */


function replaceEqualDeep(a, b) {
  if (a === b) return a;
  var array = Array.isArray(a) && Array.isArray(b);
  var isSameObject = array || isPlainObject(a) && isPlainObject(b);

  if (isSameObject) {
    if (array) {
      var bSize = b.length; // omit array keys

      if (a.length > bSize) {
        a.splice(bSize);
      } // pick array keys


      for (var i = 0; i < bSize; i++) {
        a[i] = replaceEqualDeep(a[i], b[i]);
      }
    } else {
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      var hash = new Set(bKeys);

      for (var _i = 0, len = aKeys.length; _i < len; _i++) {
        var key = aKeys[_i];

        if (!hash.has(key)) {
          // omit object keys
          delete a[key];
        }
      }

      for (var _i2 = 0, _len = bKeys.length; _i2 < _len; _i2++) {
        var _key = bKeys[_i2]; // pick object keys

        a[_key] = replaceEqualDeep(a[_key], b[_key]);
      }
    }
  }

  return isSameObject ? a : b;
}
/**
 * it will replace any equal shallow children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */


function replaceShallowEqualDeep(a, b) {
  if (a === b) return a;
  var array = Array.isArray(a) && Array.isArray(b);
  var isSameObject = array || isPlainObject(a) && isPlainObject(b);

  if (isSameObject) {
    if (array) {
      var bSize = b.length; // omit array keys

      if (a.length > bSize) {
        a.splice(bSize);
      } // pick array keys


      for (var i = 0; i < bSize; i++) {
        a[i] = b[i];
      }
    } else {
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      var hash = new Set(bKeys);

      for (var _i3 = 0, len = aKeys.length; _i3 < len; _i3++) {
        var key = aKeys[_i3];

        if (!hash.has(key)) {
          // omit object keys
          delete a[key];
        }
      }

      for (var _i4 = 0, _len2 = bKeys.length; _i4 < _len2; _i4++) {
        var _key2 = bKeys[_i4]; // pick object keys

        a[_key2] = b[_key2];
      }
    }
  }

  return isSameObject ? a : b;
} // Copied from: https://github.com/jonschlinkert/is-plain-object


function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}

function isError(value) {
  return value instanceof Error;
}

function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

function getStatusProps(status) {
  return {
    status: status,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    isIdle: status === 'idle'
  };
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */


function scheduleMicrotask(callback) {
  Promise.resolve().then(callback)["catch"](function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}
/**
 * it will deeply unwrap the value of ref from ref
 */


function unwrapRefs(refs) {
  if ((0, _vue.isRef)(refs)) {
    return refs.value;
  }

  if (typeof refs === 'function') return refs;
  var array = Array.isArray(refs);

  if (array || isPlainObject(refs)) {
    var items = array ? refs : Object.keys(refs);
    var size = items.length;
    var copy = array ? [] : {};

    for (var i = 0; i < size; i++) {
      var key = array ? i : items[i];
      copy[key] = (0, _vue.isRef)(refs[key]) ? refs[key].value : unwrapRefs(refs[key]);
    }

    return copy;
  }

  return refs;
}