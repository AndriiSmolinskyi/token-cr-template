import React from 'react'
import {
	Button, ButtonType, Color, Size,
} from '../../../shared/components'
import {
	Arrow,
} from '../../../assets/icons'
import * as styles from './main.style'

export const Main:React.FC = () => {
	return (
		<div className={styles.main} id='home'>
			<div className={styles.container}>
				<div className={styles.mainTitle}>
					<h1 className={styles.title}>$PUMPPOLA</h1>
				</div>
				<div>
					<span className={styles.info}>Just drink it, buy it, pump it</span>
				</div>
				<div>
					<p className={styles.description}>
			Just like Coca-Cola in 1886, PUMPPOLA in 2025. We’re entering a market of monopolists becoming the winners.
					Join us, win with us.
					</p>
				</div>
				<div className={styles.buy}>
					<Button<ButtonType.TEXT>
						additionalProps={{
							btnType:  ButtonType.TEXT,
							text:     'Buy $PUMPPOLA',
							size:     Size.MEDIUM,
							color:   Color.MAIN_COLOR,
						}}
					/>
				</div>
			</div>
			<div className={styles.arrow}>
				<Arrow/>
			</div>
		</div>
	)
}

