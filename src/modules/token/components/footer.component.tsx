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
					<span className={styles.footerTitle}>COIN NAME</span>
					<p className={styles.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
				<span className={styles.rights}>© 2025 coinname. All rights reserved.</span>
			</div>
		</div>
	)
}