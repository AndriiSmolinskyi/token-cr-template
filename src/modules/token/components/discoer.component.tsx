/* eslint-disable no-console */
import React from 'react'
import {
	useState,
} from 'react'
import * as styles from './discoer.style'
import {
	Line,
} from './line.component'

import {
	Copy,
} from '../../../assets/icons'
export const Discover: React.FC = () => {
	const [token,] = useState('DtR4D9FtVoTX2569gaL837ZgrB6wNjj6tkmnX9Rdk9B2',)
	const handleCopy = ():void => {
		navigator.clipboard.writeText(token,)
			.catch((err,) => {
				console.error(err,)
			},)
	}

	return (
		<div className={styles.discoverWrapper} id='discovery'>
			<div className={styles.main}>
				<div className={styles.tittle}>
					<h2>
						Discover <span>COIN NAME</span>
					</h2>
				</div>
				<Line/>
				<div className={styles.text}>
					<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className={styles.inputWrapper}>
					<label className={styles.label} htmlFor='fname'>Token Address</label>
					<div className={styles.wr}>
						<div className={styles.form}>
							<input
								className={styles.input}
								type='text'
								id='fname'
								name='fname'
								value={token}
								readOnly
							/>
						</div>
						<button onClick={handleCopy} className={styles.copy}>
							<Copy width={36} height={36}/>
							<span>Copy</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
