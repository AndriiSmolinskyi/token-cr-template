import React from 'react'
import * as styles from './trustedBy.style'
import {
	Line,
} from './line.component'

import {
	Message,
} from '../../../assets/icons'

export const TrustedBy:React.FC = () => {
	return (
		<div id='partners' className={styles.trustedByWrapper}>
			<div className={styles.container}>
				<div className={styles.title}>
					<span className={styles.titleText}>TRUSTED BY</span>
				</div>
				<Line/>
				<div className={styles.text}>
					<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.{' '}
					</p>
				</div>
				<div className={styles.trustedByImg}>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
					<Message className={styles.Message}/>
				</div>
			</div>

		</div>
	)
}
