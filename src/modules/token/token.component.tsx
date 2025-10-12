import React from 'react'
import {
	Header,
} from './components/header.component'

import {
	Main,
} from './components/main.component'

import {
	Discover,
} from './components/discoer.component'
import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Main />
			<Discover />
			<div className={styles.body}>

			MaindDiscover</div>
		</div>
	)
}

export default App