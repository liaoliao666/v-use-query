import{l as n,f as a,G as t}from"./framework.dc3bd9a4.js";const s='{"title":"hydration/Hydrate","description":"","frontmatter":{"id":"hydration/HydrateComp","title":"hydration/Hydrate"},"relativePath":"reference/hydration/HydrateComp.md","lastUpdated":1611542531420}',e={},o=t('<p><code>hydration/Hydrate</code> adds a previously dehydrated state into the <code>queryClient</code> that would returned by running <code>useQueryCache</code>. If the client already contains data, the new queries will be intelligently merged based on update timestamp.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Hydrate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vu-query/hydration&#39;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">defineComponet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Hydrate state<span class="token operator">=</span><span class="token punctuation">{</span>dehydratedState<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>Hydrate<span class="token operator">&gt;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>state: DehydratedState</code><ul><li>The state to hydrate</li></ul></li><li><code>options: HydrateOptions</code><ul><li>Optional</li><li><code>defaultOptions: QueryOptions</code><ul><li>The default query options to use for the hydrated queries.</li></ul></li></ul></li></ul>',4);e.render=function(t,s,e,p,r,l){return n(),a("div",null,[o])};export default e;export{s as __pageData};