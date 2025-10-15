import React from 'react'
import * as styles from './trustedBy.style'
import {
	Line,
} from './line.component'
import {
	Tramp,Rn,
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
						Real experiences from the $PUMPPOLA community.
					</p>
				</div>
				<div className={styles.trustedByImg}>
					<img src={Tramp} alt='Tramp' className={styles.img} />
					<img src={Rn} width={404}
						height={600} alt='Rn' className={styles.img} />
					<img src={Tramp} alt='Tramp' className={styles.img} />
					<img src={Tramp} alt='Tramp' className={styles.img} />
					<img src={Tramp} alt='Tramp' className={styles.img} />
					<img src={Tramp} alt='Tramp' className={styles.img} />

				</div>
			</div>

		</div>
	)
}
