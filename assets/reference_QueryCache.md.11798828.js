import{l as e,f as a,G as n}from"./framework.dc3bd9a4.js";const s='{"title":"QueryCache","description":"","frontmatter":{"id":"QueryCache","title":"QueryCache"},"headers":[{"level":2,"title":"queryCache.find","slug":"querycache-find"},{"level":2,"title":"queryCache.findAll","slug":"querycache-findall"},{"level":2,"title":"queryCache.subscribe","slug":"querycache-subscribe"},{"level":2,"title":"queryCache.clear","slug":"querycache-clear"}],"relativePath":"reference/QueryCache.md","lastUpdated":1610419945157}',t={},c=n('<p>The <code>QueryCache</code> is the storage mechanism for Vue Query. It stores all of the data, meta information and state of queries it contains.</p><p><strong>Normally, you will not interact with the QueryCache directly and instead use the <code>QueryClient</code> for a specific cache.</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> QueryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-query&#39;</span>\n\n<span class="token keyword">const</span> queryCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> query <span class="token operator">=</span> queryCache<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;posts&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>Its available methods are:</p><ul><li><a href="#querycachefind"><code>find</code></a></li><li><a href="#querycachefindall"><code>findAll</code></a></li><li><a href="#querycachesubscribe"><code>subscribe</code></a></li><li><a href="#querycacheclear"><code>clear</code></a></li></ul><h2 id="querycache-find"><a class="header-anchor" href="#querycache-find" aria-hidden="true">#</a> <code>queryCache.find</code></h2><p><code>find</code> is a slightly more advanced synchronous method that can be used to get an existing query instance from the cache. This instance not only contains <strong>all</strong> the state for the query, but all of the instances, and underlying guts of the query as well. If the query does not exist, <code>undefined</code> will be returned.</p><blockquote><p>Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios (eg. Looking at the query.state.dataUpdatedAt timestamp to decide whether a query is fresh enough to be used as an initial value)</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> query <span class="token operator">=</span> queryCache<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>queryKey<span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>queryKey?: QueryKey</code>: <a href="./../guides/query-keys.html">Query Keys</a></li><li><code>filters?: QueryFilters</code>: <a href="./../guides/query-filters.html">Query Filters</a></li></ul><p><strong>Returns</strong></p><ul><li><code>Query</code><ul><li>The query instance from the cache</li></ul></li></ul><h2 id="querycache-findall"><a class="header-anchor" href="#querycache-findall" aria-hidden="true">#</a> <code>queryCache.findAll</code></h2><p><code>findAll</code> is even more advanced synchronous method that can be used to get existing query instances from the cache that partially match query key. If queries do not exist, empty array will be returned.</p><blockquote><p>Note: This is not typically needed for most applications, but can come in handy when needing more information about a query in rare scenarios</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> queries <span class="token operator">=</span> queryCache<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>queryKey<span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>queryKey?: QueryKey</code>: <a href="./../guides/query-keys.html">Query Keys</a></li><li><code>filters?: QueryFilters</code>: <a href="./../guides/query-filters.html">Query Filters</a></li></ul><p><strong>Returns</strong></p><ul><li><code>Query[]</code><ul><li>Query instances from the cache</li></ul></li></ul><h2 id="querycache-subscribe"><a class="header-anchor" href="#querycache-subscribe" aria-hidden="true">#</a> <code>queryCache.subscribe</code></h2><p>The <code>subscribe</code> method can be used to subscribe to the query cache as a whole and be informed of safe/known updates to the cache like query states changing or queries being updated, added or removed</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token parameter">query</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> queryCache<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>callback: (query?: Query) =&gt; void</code><ul><li>This function will be called with the query cache any time it is updated via its tracked update mechanisms (eg, <code>query.setState</code>, <code>queryClient.removeQueries</code>, etc). Out of scope mutations to the cache are not encouraged and will not fire subscription callbacks</li><li>Additionally, for updates to the cache triggered by a specific query, the <code>query</code> will be passed as first argument to the callback</li></ul></li></ul><p><strong>Returns</strong></p><ul><li><code>unsubscribe: Function =&gt; void</code><ul><li>This function will unsubscribe the callback from the query cache.</li></ul></li></ul><h2 id="querycache-clear"><a class="header-anchor" href="#querycache-clear" aria-hidden="true">#</a> <code>queryCache.clear</code></h2><p>The <code>clear</code> method can be used to clear the cache entirely and start fresh.</p><div class="language-js"><pre><code>queryCache<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div>',31);t.render=function(n,s,t,o,r,i){return e(),a("div",null,[c])};export default t;export{s as __pageData};
