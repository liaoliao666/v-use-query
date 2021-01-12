import{l as n,f as s,G as a}from"./framework.dc3bd9a4.js";const e='{"title":"Dependent Queries","description":"","frontmatter":{"id":"dependent-queries","title":"Dependent Queries"},"relativePath":"guides/dependent-queries.md","lastUpdated":1610419945157}',t={},p=a('<p>Dependent (or serial) queries depend on previous ones to finish before they can execute. To achive this, it&#39;s as easy as using the <code>enabled</code> option to tell a query when it is ready to run:</p><div class="language-js"><pre><code><span class="token comment">// Get the user</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> email<span class="token punctuation">]</span><span class="token punctuation">,</span> getUserByEmail<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> userId <span class="token operator">=</span> user<span class="token operator">?.</span>id\n\n<span class="token comment">// Then get the user&#39;s projects</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> isIdle<span class="token punctuation">,</span> data<span class="token operator">:</span> projects <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>\n  <span class="token punctuation">[</span><span class="token string">&#39;projects&#39;</span><span class="token punctuation">,</span> userId<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  getProjectsByUser<span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// The query will not execute until the userId exists</span>\n    enabled<span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>userId<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n\n<span class="token comment">// isIdle will be `true` until `enabled` is true and the query begins to fetch.</span>\n<span class="token comment">// It will then go to the `isLoading` stage and hopefully the `isSuccess` stage :)</span>\n</code></pre></div>',2);t.render=function(a,e,t,o,c,u){return n(),s("div",null,[p])};export default t;export{e as __pageData};
