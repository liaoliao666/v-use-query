import{l as n,f as s,G as a}from"./framework.dc3bd9a4.js";const t='{"title":"Background Fetching Indicators","description":"","frontmatter":{"id":"background-fetching-indicators","title":"Background Fetching Indicators"},"relativePath":"guides/background-fetching-indicators.md","lastUpdated":1610419945157}',o={},p=a('<p>A query&#39;s <code>status === &#39;loading&#39;</code> state is sufficient enough to show the initial hard-loading state for a query, but sometimes you may want to display an additional indicator that a query is refetching in the background. To do this, queries also supply you with an <code>isFetching</code> boolean that you can use to show that it&#39;s in a fetching state, regardless of the state of the <code>status</code> variable:</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> status<span class="token punctuation">,</span> data<span class="token operator">:</span> todos<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isFetching <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>\n    <span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span>\n    fetchTodos\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> status <span class="token operator">===</span> <span class="token string">&#39;loading&#39;</span> <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span> <span class="token operator">:</span> status <span class="token operator">===</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Error<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>\n      <span class="token punctuation">{</span>isFetching <span class="token operator">?</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Refreshing<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n\n      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Todo todo<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="displaying-global-background-fetching-loading-state"><a class="header-anchor" href="#displaying-global-background-fetching-loading-state" aria-hidden="true">#</a> Displaying Global Background Fetching Loading State</h1><p>In addition to individual query loading states, if you would like to show a global loading indicator when <strong>any</strong> queries are fetching (including in the background), you can use the <code>useIsFetching</code> hook:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useIsFetching <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-query&#39;</span>\n\n<span class="token keyword">function</span> <span class="token function">GlobalLoadingIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> isFetching <span class="token operator">=</span> <span class="token function">useIsFetching</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> isFetching <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Queries are fetching <span class="token keyword">in</span> the background<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5);o.render=function(a,t,o,e,c,r){return n(),s("div",null,[p])};export default o;export{t as __pageData};
