import{l as s,f as n,G as a}from"./framework.dc3bd9a4.js";const e='{"title":"QueriesObserver","description":"","frontmatter":{"id":"QueriesObserver","title":"QueriesObserver"},"headers":[{"level":2,"title":"QueriesObserver","slug":"queriesobserver"}],"relativePath":"reference/QueriesObserver.md","lastUpdated":1610419945157}',t={},p=a('<h2 id="queriesobserver"><a class="header-anchor" href="#queriesobserver" aria-hidden="true">#</a> <code>QueriesObserver</code></h2><p>The <code>QueriesObserver</code> can be used to observe multiple queries.</p><div class="language-js"><pre><code><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueriesObserver</span><span class="token punctuation">(</span>queryClient<span class="token punctuation">,</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> queryKey<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queryFn<span class="token operator">:</span> fetchPost <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> queryKey<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> queryFn<span class="token operator">:</span> fetchPost <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> observer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>\n  <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><p>The options for the <code>QueriesObserver</code> are exactly the same as those of <a href="#usequeries"><code>useQueries</code></a>.</p>',5);t.render=function(a,e,t,o,c,r){return s(),n("div",null,[p])};export default t;export{e as __pageData};
