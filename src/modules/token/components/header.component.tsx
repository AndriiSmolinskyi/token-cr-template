import React from 'react'
import {
	Telegram,
	Twitter,
	PumpFun,
} from '../../../assets/icons'
import {
	Button, ButtonType, Color, Size,
} from '../../../shared/components'
import * as styles from './header.style'

export const Header: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div>
					<p className={styles.title}>COIN NAME</p>
				</div>
				<div className={styles.linkBlock}>
					<a className={styles.links} href='#home'>Home</a>
					<a className={styles.links} href='#discovery'>Discovery</a>
					<a className={styles.links} href='#live'>Live</a>
					<a className={styles.links} href='#partners'>Partners</a>
				</div>
				<div className={styles.iconBlock}>
					<a className={styles.links}><Telegram width={20} height={20}/></a>
					<a className={styles.links}><Twitter width={20} height={20}/></a>
					<a className={styles.links}><PumpFun width={20} height={20} /></a>
					<Button<ButtonType.TEXT>
						additionalProps={{
							btnType:  ButtonType.TEXT,
							text:     'Buy',
							size:     Size.SMALL,
							color:   Color.MAIN_COLOR,
						}}
					/>
				</div>
			</div>
		</div>
	)
}