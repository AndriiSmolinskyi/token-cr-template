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
					<h1 className={styles.title}>COIN NAME</h1>
				</div>
				<div>
					<span className={styles.info}>COIN NAME</span>
				</div>
				<div>
					<p className={styles.description}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className={styles.buy}>
					<Button<ButtonType.TEXT>
						additionalProps={{
							btnType:  ButtonType.TEXT,
							text:     'Buy COIN',
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

