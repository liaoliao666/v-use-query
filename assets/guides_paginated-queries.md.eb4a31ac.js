import{l as n,f as a,G as s}from"./framework.dc3bd9a4.js";const t='{"title":"Paginated / Lagged Queries","description":"","frontmatter":{"id":"paginated-queries","title":"Paginated / Lagged Queries"},"headers":[{"level":2,"title":"Better Paginated Queries with keepPreviousData","slug":"better-paginated-queries-with-keeppreviousdata"},{"level":2,"title":"Lagging Infinite Query results with keepPreviousData","slug":"lagging-infinite-query-results-with-keeppreviousdata"}],"relativePath":"guides/paginated-queries.md","lastUpdated":1611814546589}',p={},e=s('<p>Rendering paginated data is a very common UI pattern and in Vu Query, it &quot;just works&quot; by including the page information in the query key:</p><div class="language-js"><pre><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;projects&#39;</span><span class="token punctuation">,</span> page<span class="token punctuation">]</span><span class="token punctuation">,</span> fetchProjects<span class="token punctuation">)</span>\n</code></pre></div><p>However, if you run this simple example, you might notice something strange:</p><p><strong>The UI jumps in and out of the <code>success</code> and <code>loading</code> states because each new page is treated like a brand new query.</strong></p><p>This experience is not optimal and unfortunately is how many tools today insist on working. But not Vu Query! As you may have guessed, Vu Query comes with an awesome featured called <code>keepPreviousData</code> that allows us to get around this.</p><h2 id="better-paginated-queries-with-keeppreviousdata"><a class="header-anchor" href="#better-paginated-queries-with-keeppreviousdata" aria-hidden="true">#</a> Better Paginated Queries with <code>keepPreviousData</code></h2><p>Consider the following example where we would ideally want to increment a pageIndex (or cursor) for a query. If we were to use <code>useQuery</code>, <strong>it would still technically work fine</strong>, but the UI would jump in and out of the <code>success</code> and <code>loading</code> states as different queries are created and destroyed for each page or cursor. By setting <code>keepPreviousData</code> to <code>true</code> we get a few new things:</p><ul><li><strong>The data from the last successful fetch available while new data is being requested, even though the query key has changed</strong>.</li><li>When the new data arrives, the previous <code>data</code> is seamlessly swapped to show the new data.</li><li><code>isPreviousData</code> is made available to know what data the query is currently providing you</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">fetchProjects</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">page <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api/projects?page=&#39;</span> <span class="token operator">+</span> page<span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;projects&#39;</span><span class="token punctuation">,</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> page <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetchProjects</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> keepPreviousData<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span>query<span class="token punctuation">.</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span> <span class="token operator">:</span> query<span class="token punctuation">.</span>sError <span class="token operator">?</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Error<span class="token operator">:</span> <span class="token punctuation">{</span>query<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n            <span class="token punctuation">{</span>query<span class="token punctuation">.</span>data<span class="token punctuation">.</span>projects<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">project</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n              <span class="token operator">&lt;</span>p key<span class="token operator">=</span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Current Page<span class="token operator">:</span> <span class="token punctuation">{</span>page<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>\n        <span class="token operator">&lt;</span>button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          disabled<span class="token operator">=</span><span class="token punctuation">{</span>page<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">}</span>\n        <span class="token operator">&gt;</span>\n          Previous Page\n        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39; &#39;</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>query<span class="token punctuation">.</span>isPreviousData <span class="token operator">&amp;&amp;</span> query<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hasMore<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              page<span class="token punctuation">.</span>value <span class="token operator">=</span> page<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token comment">// Disable the Next Page button until we know a next page is available</span>\n          disabled<span class="token operator">=</span><span class="token punctuation">{</span>query<span class="token punctuation">.</span>isPreviousData <span class="token operator">||</span> <span class="token operator">!</span>query<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hasMore<span class="token punctuation">}</span>\n        <span class="token operator">&gt;</span>\n          Next Page\n        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n        <span class="token punctuation">{</span>query<span class="token punctuation">.</span>isFetching <span class="token operator">?</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span> Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">&#39; &#39;</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="lagging-infinite-query-results-with-keeppreviousdata"><a class="header-anchor" href="#lagging-infinite-query-results-with-keeppreviousdata" aria-hidden="true">#</a> Lagging Infinite Query results with <code>keepPreviousData</code></h2><p>While not as common, the <code>keepPreviousData</code> option also works flawlessly with the <code>useInfiniteQuery</code> hook, so you can seamlessly allow your users to continue to see cached data while infinite query keys change over time.</p>',11);p.render=function(s,t,p,o,c,u){return n(),a("div",null,[e])};export default p;export{t as __pageData};