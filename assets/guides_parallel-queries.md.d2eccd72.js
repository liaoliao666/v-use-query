import{l as s,f as n,G as a}from"./framework.dc3bd9a4.js";const e='{"title":"Parallel Queries","description":"","frontmatter":{"id":"parallel-queries","title":"Parallel Queries"},"headers":[{"level":2,"title":"Manual Parallel Queries","slug":"manual-parallel-queries"},{"level":2,"title":"Dynamic Parallel Queries with useQueries","slug":"dynamic-parallel-queries-with-usequeries"}],"relativePath":"guides/parallel-queries.md","lastUpdated":1611542531420}',t={},o=a('<p>&quot;Parallel&quot; queries are queries that are executed in parallel, or at the same time so as to maximize fetching concurrency.</p><h2 id="manual-parallel-queries"><a class="header-anchor" href="#manual-parallel-queries" aria-hidden="true">#</a> Manual Parallel Queries</h2><p>When the number of parallel queries does not change, there is <strong>no extra effort</strong> to use parallel queries. Just use any number of Vu Query&#39;s <code>useQuery</code> and <code>useInfiniteQuery</code> hooks side-by-side!</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// The following queries will execute in parallel</span>\n  <span class="token keyword">const</span> usersQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> fetchUsers<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> teamsQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;teams&#39;</span><span class="token punctuation">,</span> fetchTeams<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> projectsQuery <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;projects&#39;</span><span class="token punctuation">,</span> fetchProjects<span class="token punctuation">)</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre></div><blockquote><p>When using Vu Query in suspense mode, this pattern of parallelism does not work, since the first query would throw a promise internally and would suspend the component before the other queries run. To get around this, you&#39;ll either need to use the <code>useQueries</code> hook (which is suggested) or orchestrate your own parallelism with separate components for each <code>useQuery</code> instance (which is lame).</p></blockquote><h2 id="dynamic-parallel-queries-with-usequeries"><a class="header-anchor" href="#dynamic-parallel-queries-with-usequeries" aria-hidden="true">#</a> Dynamic Parallel Queries with <code>useQueries</code></h2><p>If the number of queries you need to execute is changing from render to render, you cannot use manual querying since that would violate the rules of hooks. Instead, Vu Query provides a <code>useQueries</code> hook, which you can use to dynamically execute as many queries in parallel as you&#39;d like.</p><p><code>useQueries</code> accepts an function that can be return an <strong>array of query options objects</strong> then the <code>useQueries</code> will returns an <strong>array of query results</strong>:</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> users <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> userQueries <span class="token operator">=</span> <span class="token function">useQueries</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        queryKey<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">queryFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetchUserById</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',9);t.render=function(a,e,t,p,u,c){return s(),n("div",null,[o])};export default t;export{e as __pageData};