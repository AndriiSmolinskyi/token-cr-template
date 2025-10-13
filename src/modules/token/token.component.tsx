import React from 'react'
import {
	Header,
} from './components/header.component'
import {
	LiveChart,
} from './components/liveChart.component'

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
			<LiveChart/>
			<div className={styles.body}>

			MaindDiscoverLiveChart</div>
		</div>
	)
}

export default App