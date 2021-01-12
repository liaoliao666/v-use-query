import{l as n,f as s,G as a}from"./framework.dc3bd9a4.js";const e='{"title":"QueryClientProvider","description":"","frontmatter":{"id":"QueryClientProvider","title":"QueryClientProvider"},"relativePath":"reference/QueryClientProvider.md","lastUpdated":1610472514943}',t={},o=a('<p>Use the <code>QueryClientProvider</code> component to connect and provide a <code>QueryClient</code> to your application:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;v-use-query&#39;</span>\n\n<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">&gt;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',2);t.render=function(a,e,t,p,r,c){return n(),s("div",null,[o])};export default t;export{e as __pageData};