import{l as e,f as t,G as o}from"./framework.dc3bd9a4.js";const n='{"title":"useQuery","description":"","frontmatter":{"id":"useQuery","title":"useQuery"},"relativePath":"reference/useQuery.md","lastUpdated":1610594008261}',l={},i=o('<div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">,</span>\n  error<span class="token punctuation">,</span>\n  failureCount<span class="token punctuation">,</span>\n  isError<span class="token punctuation">,</span>\n  isFetchedAfterMount<span class="token punctuation">,</span>\n  isFetching<span class="token punctuation">,</span>\n  isIdle<span class="token punctuation">,</span>\n  isLoading<span class="token punctuation">,</span>\n  isPlaceholderData<span class="token punctuation">,</span>\n  isPreviousData<span class="token punctuation">,</span>\n  isStale<span class="token punctuation">,</span>\n  isSuccess<span class="token punctuation">,</span>\n  refetch<span class="token punctuation">,</span>\n  remove<span class="token punctuation">,</span>\n  status<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>queryKey<span class="token punctuation">,</span> queryFn<span class="token operator">?</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  cacheTime<span class="token punctuation">,</span>\n  enabled<span class="token punctuation">,</span>\n  initialData<span class="token punctuation">,</span>\n  isDataEqual<span class="token punctuation">,</span>\n  keepPreviousData<span class="token punctuation">,</span>\n  notifyOnChangeProps<span class="token punctuation">,</span>\n  notifyOnChangePropsExclusions<span class="token punctuation">,</span>\n  onError<span class="token punctuation">,</span>\n  onSettled<span class="token punctuation">,</span>\n  onSuccess<span class="token punctuation">,</span>\n  queryKeyHashFn<span class="token punctuation">,</span>\n  refetchInterval<span class="token punctuation">,</span>\n  refetchIntervalInBackground<span class="token punctuation">,</span>\n  refetchOnMount<span class="token punctuation">,</span>\n  refetchOnReconnect<span class="token punctuation">,</span>\n  refetchOnWindowFocus<span class="token punctuation">,</span>\n  retry<span class="token punctuation">,</span>\n  retryDelay<span class="token punctuation">,</span>\n  select\n  staleTime<span class="token punctuation">,</span>\n  structuralSharing<span class="token punctuation">,</span>\n  suspense<span class="token punctuation">,</span>\n  useErrorBoundary<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// or using the object syntax</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  queryKey<span class="token punctuation">,</span>\n  queryFn<span class="token punctuation">,</span>\n  enabled<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>Options</strong></p><ul><li><code>queryKey: string | unknown[]</code><ul><li><strong>Required</strong></li><li>The query key to use for this query.</li><li>The query key will be hashed into a stable hash. See <a href="./guides/query-keys.html">Query Keys</a> for more information.</li><li>The query will automatically update when this key changes (as long as <code>enabled</code> is not set to <code>false</code>).</li></ul></li><li><code>queryFn: (context: QueryFunctionContext) =&gt; Promise&lt;TData&gt;</code><ul><li><strong>Required, but only if no default query function has been defined</strong></li><li>The function that the query will use to request data.</li><li>Receives a <code>QueryFunctionContext</code> object with the following variables: <ul><li><code>queryKey: QueryKey</code></li></ul></li><li>Must return a promise that will either resolves data or throws an error.</li></ul></li><li><code>enabled: boolean</code><ul><li>Set this to <code>false</code> to disable this query from automatically running.</li><li>Can be used for <a href="./guides/queries.html#dependent-queries">Dependent Queries</a>.</li></ul></li><li><code>retry: boolean | number | (failureCount: number, error: TError) =&gt; boolean</code><ul><li>If <code>false</code>, failed queries will not retry by default.</li><li>If <code>true</code>, failed queries will retry infinitely.</li><li>If set to an <code>number</code>, e.g. <code>3</code>, failed queries will retry until the failed query count meets that number.</li></ul></li><li><code>retryDelay: (retryAttempt: number) =&gt; number</code><ul><li>This function receives a <code>retryAttempt</code> integer and returns the delay to apply before the next attempt in milliseconds.</li><li>A function like <code>attempt =&gt; Math.min(attempt &gt; 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)</code> applies exponential backoff.</li><li>A function like <code>attempt =&gt; attempt * 1000</code> applies linear backoff.</li></ul></li><li><code>staleTime: number | Infinity</code><ul><li>The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.</li><li>If set to <code>Infinity</code>, the data will never be considered stale</li></ul></li><li><code>cacheTime: number | Infinity</code><ul><li>The time in milliseconds that unused/inactive cache data remains in memory. When a query&#39;s cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different cache times are specified, the longest one will be used.</li><li>If set to <code>Infinity</code>, will disable garbage collection</li></ul></li><li><code>refetchInterval: false | number</code><ul><li>Optional</li><li>If set to a number, all queries will continuously refetch at this frequency in milliseconds</li></ul></li><li><code>refetchIntervalInBackground: boolean</code><ul><li>Optional</li><li>If set to <code>true</code>, queries that are set to continuously refetch with a <code>refetchInterval</code> will continue to refetch while their tab/window is in the background</li></ul></li><li><code>refetchOnMount: boolean | &quot;always&quot;</code><ul><li>Optional</li><li>Defaults to <code>true</code></li><li>If set to <code>true</code>, the query will refetch on mount if the data is stale.</li><li>If set to <code>false</code>, the query will not refetch on mount.</li><li>If set to <code>&quot;always&quot;</code>, the query will always refetch on mount.</li></ul></li><li><code>refetchOnWindowFocus: boolean | &quot;always&quot;</code><ul><li>Optional</li><li>Defaults to <code>true</code></li><li>If set to <code>true</code>, the query will refetch on window focus if the data is stale.</li><li>If set to <code>false</code>, the query will not refetch on window focus.</li><li>If set to <code>&quot;always&quot;</code>, the query will always refetch on window focus.</li></ul></li><li><code>refetchOnReconnect: boolean | &quot;always&quot;</code><ul><li>Optional</li><li>Defaults to <code>true</code></li><li>If set to <code>true</code>, the query will refetch on reconnect if the data is stale.</li><li>If set to <code>false</code>, the query will not refetch on reconnect.</li><li>If set to <code>&quot;always&quot;</code>, the query will always refetch on reconnect.</li></ul></li><li><code>notifyOnChangeProps: string[]</code><ul><li>Optional</li><li>If set, the component will only re-render if any of the listed properties change.</li><li>If set to <code>[&#39;data&#39;, &#39;error&#39;]</code> for example, the component will only re-render when the <code>data</code> or <code>error</code> properties change.</li></ul></li><li><code>notifyOnChangePropsExclusions: string[]</code><ul><li>Optional</li><li>If set, the component will not re-render if any of the listed properties change.</li><li>If set to <code>[&#39;isStale&#39;]</code> for example, the component will not re-render when the <code>isStale</code> property changes.</li></ul></li><li><code>onSuccess: (data: TData) =&gt; void</code><ul><li>Optional</li><li>This function will fire any time the query successfully fetches new data.</li></ul></li><li><code>onError: (error: TError) =&gt; void</code><ul><li>Optional</li><li>This function will fire if the query encounters an error and will be passed the error.</li></ul></li><li><code>onSettled: (data?: TData, error?: TError) =&gt; void</code><ul><li>Optional</li><li>This function will fire any time the query is either successfully fetched or errors and be passed either the data or error</li></ul></li><li><code>select: (data: TData) =&gt; unknown</code><ul><li>Optional</li><li>This option can be used to transform or select a part of the data returned by the query function.</li></ul></li><li><code>suspense: boolean</code><ul><li>Optional</li><li>Set this to <code>true</code> to enable suspense mode.</li><li>When <code>true</code>, <code>useQuery</code> will suspend when <code>status === &#39;loading&#39;</code></li><li>When <code>true</code>, <code>useQuery</code> will throw runtime errors when <code>status === &#39;error&#39;</code></li></ul></li><li><code>initialData: TData | () =&gt; TData</code><ul><li>Optional</li><li>If set, this value will be used as the initial data for the query cache (as long as the query hasn&#39;t been created or cached yet)</li><li>If set to a function, the function will be called <strong>once</strong> during the shared/root query initialization, and be expected to synchronously return the initialData</li><li>Initial data is considered stale by default unless a <code>staleTime</code> has been set.</li><li><code>initialData</code> <strong>is persisted</strong> to the cache</li></ul></li><li><code>placeholderData: TData | () =&gt; TData</code><ul><li>Optional</li><li>If set, this value will be used as the placeholder data for this particular query observer while the query is still in the <code>loading</code> data and no initialData has been provided.</li><li><code>placeholderData</code> is <strong>not persisted</strong> to the cache</li></ul></li><li><code>keepPreviousData: boolean</code><ul><li>Optional</li><li>Defaults to <code>false</code></li><li>If set, any previous <code>data</code> will be kept when fetching new data because the query key changed.</li></ul></li><li><code>structuralSharing: boolean</code><ul><li>Optional</li><li>Defaults to <code>true</code></li><li>If set to <code>false</code>, structural sharing between query results will be disabled.</li></ul></li></ul><p><strong>Returns</strong></p><ul><li><code>status: String</code><ul><li>Will be: <ul><li><code>idle</code> if the query is idle. This only happens if a query is initialized with <code>enabled: false</code> and no initial data is available.</li><li><code>loading</code> if the query is in a &quot;hard&quot; loading state. This means there is no cached data and the query is currently fetching, eg <code>isFetching === true</code></li><li><code>error</code> if the query attempt resulted in an error. The corresponding <code>error</code> property has the error received from the attempted fetch</li><li><code>success</code> if the query has received a response with no errors and is ready to display its data. The corresponding <code>data</code> property on the query is the data received from the successful fetch or if the query&#39;s <code>enabled</code> property is set to <code>false</code> and has not been fetched yet <code>data</code> is the first <code>initialData</code> supplied to the query on initialization.</li></ul></li></ul></li><li><code>isIdle: boolean</code><ul><li>A derived boolean from the <code>status</code> variable above, provided for convenience.</li></ul></li><li><code>isLoading: boolean</code><ul><li>A derived boolean from the <code>status</code> variable above, provided for convenience.</li></ul></li><li><code>isSuccess: boolean</code><ul><li>A derived boolean from the <code>status</code> variable above, provided for convenience.</li></ul></li><li><code>isError: boolean</code><ul><li>A derived boolean from the <code>status</code> variable above, provided for convenience.</li></ul></li><li><code>isLoadingError: boolean</code><ul><li>Will be <code>true</code> if the query failed while fetching for the first time.</li></ul></li><li><code>isRefetchError: boolean</code><ul><li>Will be <code>true</code> if the query failed while refetching.</li></ul></li><li><code>data: TData</code><ul><li>Defaults to <code>undefined</code>.</li><li>The last successfully resolved data for the query.</li></ul></li><li><code>error: null | TError</code><ul><li>Defaults to <code>null</code></li><li>The error object for the query, if an error was thrown.</li></ul></li><li><code>isStale: boolean</code><ul><li>Will be <code>true</code> if the data in the cache is invalidated or if the data is older than the given <code>staleTime</code>.</li></ul></li><li><code>isPlaceholderData: boolean</code><ul><li>Will be <code>true</code> if the data shown is the placeholder data.</li></ul></li><li><code>isPreviousData: boolean</code><ul><li>Will be <code>true</code> when <code>keepPreviousData</code> is set and data from the previous query is returned.</li></ul></li><li><code>isFetchedAfterMount: boolean</code><ul><li>Will be <code>true</code> if the query has been fetched after the component mounted.</li><li>This property can be used to not show any previously cached data.</li></ul></li><li><code>isFetching: boolean</code><ul><li>Defaults to <code>true</code> so long as <code>enabled</code> is set to <code>false</code></li><li>Will be <code>true</code> if the query is currently fetching, including background fetching.</li></ul></li><li><code>failureCount: number</code><ul><li>The failure count for the query.</li><li>Incremented every time the query fails.</li><li>Reset to <code>0</code> when the query succeeds.</li></ul></li><li><code>refetch: (options: { throwOnError: boolean }) =&gt; Promise&lt;UseQueryResult&gt;</code><ul><li>A function to manually refetch the query.</li><li>If the query errors, the error will only be logged. If you want an error to be thrown, pass the <code>throwOnError: true</code> option</li></ul></li><li><code>remove: () =&gt; void</code><ul><li>A function to remove the query from the cache.</li></ul></li></ul>',5);l.render=function(o,n,l,a,s,c){return e(),t("div",null,[i])};export default l;export{n as __pageData};