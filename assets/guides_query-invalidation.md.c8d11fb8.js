import{l as n,f as s,G as a}from"./framework.dc3bd9a4.js";const t='{"title":"Query Invalidation","description":"","frontmatter":{"id":"query-invalidation","title":"Query Invalidation"},"headers":[{"level":2,"title":"Query Matching with invalidateQueries","slug":"query-matching-with-invalidatequeries"}],"relativePath":"guides/query-invalidation.md","lastUpdated":1611637296772}',e={},o=a('<p>Waiting for queries to become stale before they are fetched again doesn&#39;t always work, especially when you know for a fact that a query&#39;s data is out of date because of something the user has done. For that purpose, the <code>QueryClient</code> has an <code>invalidateQueries</code> method that lets you intelligently mark queries as stale and potentially refetch them too!</p><div class="language-js"><pre><code><span class="token comment">// Invalidate every query in the cache</span>\nqueryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// Invalidate every query with a key that starts with `todos`</span>\nqueryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><blockquote><p>Note: Where other libraries that use normalized caches would attempt to update local queries with the new data either imperatively or via schema inference, Vu Query gives you the tools to avoid the manual labor that comes with maintaining normalized caches and instead prescribes <strong>targeted invalidation, background-refetching and ultimately atomic updates</strong>.</p></blockquote><p>When a query is invalidated with <code>invalidateQueries</code>, two things happen:</p><ul><li>It is marked as stale. This stale state overrides any <code>staleTime</code> configurations being used in <code>useQuery</code> or related hooks</li><li>If the query is currently being rendered via <code>useQuery</code> or related hooks), it will also be refetched in the background</li></ul><h2 id="query-matching-with-invalidatequeries"><a class="header-anchor" href="#query-matching-with-invalidatequeries" aria-hidden="true">#</a> Query Matching with <code>invalidateQueries</code></h2><p>When using APIs like <code>invalidateQueries</code> and <code>removeQueries</code> (and others that support partial query matching), you can match multiple queries by their prefix, or get really specific and match an exact query. For informationo on the types of filters, you can use, please see <a href="./../guides/query-filters.html">Query Filters</a>.</p><p>In this example, we can use the <code>todos</code> prefix to invalidate any queries that start with <code>todos</code> in their query key:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> useQueryClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vu-query&#39;</span>\n\n<span class="token comment">// Get QueryClient from the context</span>\n<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\nqueryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Both queries below will be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> page<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n</code></pre></div><p>You can even invalidate queries with specific variables by passing a more specific query key to the <code>invalidateQueries</code> method:</p><div class="language-js"><pre><code>queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;done&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token comment">// The query below will be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;done&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n\n<span class="token comment">// However, the following query below will NOT be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n</code></pre></div><p>The <code>invalidateQueries</code> API is very flexible, so even if you want to <strong>only</strong> invalidate <code>todos</code> queries that don&#39;t have any more variables or subkeys, you can pass an <code>exact: true</code> option to the <code>invalidateQueries</code> method:</p><div class="language-js"><pre><code>queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> exact<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// The query below will be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n\n<span class="token comment">// However, the following query below will NOT be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;done&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n</code></pre></div><p>If you find yourself wanting <strong>even more</strong> granularity, you can pass a predicate function to the <code>invalidateQueries</code> method. This function will receive each <code>Query</code> instance from the query cache and allow you to return <code>true</code> or <code>false</code> for whether you want to invalidate that query:</p><div class="language-js"><pre><code>queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">predicate</span><span class="token operator">:</span> <span class="token parameter">query</span> <span class="token operator">=&gt;</span>\n    query<span class="token punctuation">.</span>queryKey<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;todos&#39;</span> <span class="token operator">&amp;&amp;</span> query<span class="token punctuation">.</span>queryKey<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">?.</span>version <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// The query below will be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> version<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n\n<span class="token comment">// The query below will be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> version<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n\n<span class="token comment">// However, the following query below will NOT be invalidated</span>\n<span class="token keyword">const</span> todoListQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> version<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> fetchTodoList<span class="token punctuation">)</span>\n</code></pre></div>',15);e.render=function(a,t,e,p,c,i){return n(),s("div",null,[o])};export default e;export{t as __pageData};
