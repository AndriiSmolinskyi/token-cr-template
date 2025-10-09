import React from 'react'
import {
	Coin,
} from '../../assets/icons'
import * as styles from './token.style'

export const App: React.FC = () => {
	return (
		<div className={styles.body}>
			<Coin width={124} height={44}/>
			<div>
				hello
			</div>
		</div>
	)
}

export default App