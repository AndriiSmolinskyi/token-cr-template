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
import Particles from './components/ParticleAnimation/particles-component'
import {
	Footer,
} from './components/footer.component'
import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Header />
			<Particles/>
			<div className={styles.body}>
				<Main />
				<Discover />
				<LiveChart />
				<Footer/>
			</div>
		</div>
	)
}

export default App