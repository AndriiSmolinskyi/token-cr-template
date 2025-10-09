import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from './modules/error-boundary/error-boundary'
import Router from './router/router'

ReactDOM.createRoot(document.getElementById('root',)!,).render(
	<ErrorBoundary>
		<Router/>
	</ErrorBoundary>,
)
