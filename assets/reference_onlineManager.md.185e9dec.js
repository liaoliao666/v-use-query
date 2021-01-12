import{l as n,f as e,G as a}from"./framework.dc3bd9a4.js";const s='{"title":"OnlineManager","description":"","frontmatter":{"id":"OnlineManager","title":"OnlineManager"},"headers":[{"level":2,"title":"onlineManager.setEventListener","slug":"onlinemanager-seteventlistener"},{"level":2,"title":"onlineManager.setOnline","slug":"onlinemanager-setonline"},{"level":2,"title":"onlineManager.isOnline","slug":"onlinemanager-isonline"}],"relativePath":"reference/onlineManager.md","lastUpdated":1610424254064}',t={},o=a('<p>The <code>OnlineManager</code> manages the online state within Vue Query.</p><p>It can be used to change the default event listeners or to manually change the online state.</p><p>Its available methods are:</p><ul><li><a href="#onlinemanagerseteventlistener"><code>setEventListener</code></a></li><li><a href="#onlinemanagersetonline"><code>setOnline</code></a></li><li><a href="#onlinemanagerisonline"><code>isOnline</code></a></li></ul><h2 id="onlinemanager-seteventlistener"><a class="header-anchor" href="#onlinemanager-seteventlistener" aria-hidden="true">#</a> <code>onlineManager.setEventListener</code></h2><p><code>setEventListener</code> can be used to set a custom event listener:</p><div class="language-js"><pre><code><span class="token keyword">import</span> NetInfo <span class="token keyword">from</span> <span class="token string">&#39;@vue-native-community/netinfo&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> onlineManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;usequery&#39;</span>\n\nonlineManager<span class="token punctuation">.</span><span class="token function">setEventListener</span><span class="token punctuation">(</span><span class="token parameter">setOnline</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> NetInfo<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setOnline</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>isConnected<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="onlinemanager-setonline"><a class="header-anchor" href="#onlinemanager-setonline" aria-hidden="true">#</a> <code>onlineManager.setOnline</code></h2><p><code>setOnline</code> can be used to manually set the online state. Set <code>undefined</code> to fallback to the default online check.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onlineManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;usequery&#39;</span>\n\n<span class="token comment">// Set to online</span>\nonlineManager<span class="token punctuation">.</span><span class="token function">setOnline</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Set to offline</span>\nonlineManager<span class="token punctuation">.</span><span class="token function">setOnline</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Fallback to the default online check</span>\nonlineManager<span class="token punctuation">.</span><span class="token function">setOnline</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>online: boolean | undefined</code></li></ul><h2 id="onlinemanager-isonline"><a class="header-anchor" href="#onlinemanager-isonline" aria-hidden="true">#</a> <code>onlineManager.isOnline</code></h2><p><code>isOnline</code> can be used to get the current online state.</p><div class="language-js"><pre><code><span class="token keyword">const</span> isOnline <span class="token operator">=</span> onlineManager<span class="token punctuation">.</span><span class="token function">isOnline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div>',15);t.render=function(a,s,t,l,p,i){return n(),e("div",null,[o])};export default t;export{s as __pageData};