import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()

const engine = new Styletron()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <BaseProvider theme={LightTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BaseProvider>
  </StyletronProvider>
)
