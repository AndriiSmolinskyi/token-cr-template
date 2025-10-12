import React from 'react'
import {
	Header,
} from './components/header.component'

import {
	Main,
} from './components/main.component'
import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Main/>
			<div className={styles.body}>

			Main</div>
		</div>
	)
}

export default App