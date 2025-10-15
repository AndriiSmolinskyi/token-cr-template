import React from 'react'
import {
	LinkButton,
} from '../../../shared/components/link-button/link-button.component'
import * as styles from './footer.style'

export const Footer: React.FC = () => {
	return (
		<div>
			<div className={styles.footerContainer}>
				<div>
					<span className={styles.footerTitle}>PUMP-POLA</span>
					<p className={styles.footerText}>Just like Coca-Cola in 1886, PUMPPOLA in 2025. We’re entering a market of monopolists becoming the winners. Join us, win with us.</p>
				</div>
				<div className={styles.footerSocial}>
					<h3 className={styles.footerSubTitle}>Links</h3>
					<LinkButton text={'Home'} href='#home'/>
					<LinkButton text={'Live'} href='#live'/>
					<LinkButton text={'Discovery'}href='#discovery'/>
					<LinkButton text={'Partners'}href='#partners' />
				</div>
				<div className={styles.footerSocial}>
					<h3 className={styles.footerSubTitle}>Socials</h3>
					<LinkButton text={'X'} />
					<LinkButton text={'Telegram'} />
				</div>
			</div>
			<div className={styles.footerBottom}>
				<div className={styles.footerBottomBlock}>
					<span className={styles.rights}>© 2025 PUMPPOLA. All rights reserved.</span>

				</div>
			</div>
		</div>
	)
}