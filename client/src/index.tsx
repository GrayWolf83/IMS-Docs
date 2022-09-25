import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { App } from './app/app'
import * as serviceWorker from './serviceWorker'
import store from './app/store'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ColorModeScript />
			<App />
		</BrowserRouter>
	</Provider>,
)

serviceWorker.unregister()
