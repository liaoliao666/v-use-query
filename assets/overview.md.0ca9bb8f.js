import{l as n,f as a,G as s}from"./framework.dc3bd9a4.js";const t='{"title":"Overview","description":"","frontmatter":{"id":"overview","title":"Overview"},"headers":[{"level":2,"title":"Motivation","slug":"motivation"},{"level":2,"title":"Enough talk, show me some code already!","slug":"enough-talk-show-me-some-code-already"}],"relativePath":"overview.md","lastUpdated":1610419945157}',e={},o=s('<p>Vue Query is often described as the missing data-fetching library for Vue, but in more technical terms, it makes <strong>fetching, caching, synchronizing and updating server state</strong> in your Vue applications a breeze.</p><h2 id="motivation"><a class="header-anchor" href="#motivation" aria-hidden="true">#</a> Motivation</h2><p>Out of the box, Vue applications <strong>do not</strong> come with an opinionated way of fetching or updating data from your components so developers end up building their own ways of fetching data. This usually means cobbling together component-based state and effect using Vue hooks, or using more general purpose state management libraries to store and provide asynchronous data throughout their apps.</p><p>While most traditional state management libraries are great for working with client state, they are <strong>not so great at working with async or server state</strong>. This is because <strong>server state is totally different</strong>. For starters, server state:</p><ul><li>Is persisted remotely in a location you do not control or own</li><li>Requires asynchronous APIs for fetching and updating</li><li>Implies shared ownership and can be changed by other people without your knowledge</li><li>Can potentially become &quot;out of date&quot; in your applications if you&#39;re not careful</li></ul><p>Once you grasp the nature of server state in your application, <strong>even more challenges will arise</strong> as you go, for example:</p><ul><li>Caching... (possibly the hardest thing to do in programming)</li><li>Deduping multiple requests for the same data into a single request</li><li>Updating out of date data in the background</li><li>Knowing when data is &quot;out of date&quot;</li><li>Reflecting updates to data as quickly as possible</li><li>Performance optimizations like pagination and lazy loading data</li><li>Managing memory and garbage collection of server state</li><li>Memoizing query results with structural sharing</li></ul><p>If you&#39;re not overwhelmed by that list, then that must mean that you&#39;ve probably solved all of your server state problems already and deserve an award. However, if you are like a vast majority of people, you either have yet to tackle all or most of these challenges and we&#39;re only scratching the surface!</p><p>Vue Query is hands down one of the <em>best</em> libraries for managing server state. It works amazingly well <strong>out-of-the-box, with zero-config, and can be customized</strong> to your liking as your application grows.</p><p>Vue Query allows you to defeat and overcome the tricky challenges and hurdles of <em>server state</em> and control your app data before it starts to control you.</p><p>On a more technical note, Vue Query will likely:</p><ul><li>Help you remove <strong>many</strong> lines of complicated and misunderstood code from your application and replace with just a handful of lines of Vue Query logic.</li><li>Make your application more maintainable and easier to build new features without worrying about wiring up new server state data sources</li><li>Have a direct impact on your end-users by making your application feel faster and more responsive than ever before.</li><li>Potentially help you save on bandwidth and increase memory performance</li></ul><h2 id="enough-talk-show-me-some-code-already"><a class="header-anchor" href="#enough-talk-show-me-some-code-already" aria-hidden="true">#</a> Enough talk, show me some code already!</h2><p>In the example below, you can see Vue Query in its most basic and simple form being used to fetch the GitHub stats for the Vue Query GitHub project itself:</p><p><a href="https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/simple" target="_blank" rel="noopener noreferrer">Open in CodeSandbox</a></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider<span class="token punctuation">,</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-query&#39;</span>\n\n<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>Example <span class="token operator">/</span><span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">&#39;repoData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.github.com/repos/tannerlinsley/react-query&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span>\n      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;Loading...&#39;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;An error has occurred: &#39;</span> <span class="token operator">+</span> result<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span>👀 <span class="token punctuation">{</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>subscribers_count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39; &#39;</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span>✨ <span class="token punctuation">{</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>stargazers_count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39; &#39;</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span>🍴 <span class="token punctuation">{</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>forks_count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',16);e.render=function(s,t,e,p,r,l){return n(),a("div",null,[o])};export default e;export{t as __pageData};
