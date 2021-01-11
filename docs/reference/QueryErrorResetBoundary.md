---
id: QueryErrorResetBoundary
title: QueryErrorResetBoundary
---

When using **suspense** or **useErrorBoundaries** in your queries, you need a way to let queries know that you want to try again when re-rendering after some error occured. With the `QueryErrorResetBoundary` component you can reset any query errors within the boundaries of the component.

```js
import { QueryErrorResetBoundary } from 'vue-query'
import { ErrorBoundary } from 'vue-error-boundary'

const App: Vue.FC = () => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        <Page />
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)
```