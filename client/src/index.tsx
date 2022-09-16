import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import * as serviceWorker from './serviceWorker'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<BrowserRouter>
		<ColorModeScript />
		<App />
	</BrowserRouter>,
)

serviceWorker.unregister()
