import React from 'react'
import {
	Line,
} from './line.component'
import {
	Button, ButtonType, Color, Size,
} from '../../../shared/components'

import * as styles from './liveChart.style'
export const LiveChart:React.FC = () => {
	return (
		<div className={styles.LiveChartWrapper}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>LIVE CHART</h2>
				</div>
				<Line/>
				<div className={styles.description}>
					<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className={styles.view}>
					<Button <ButtonType.TEXT>
						additionalProps={{
							btnType:  ButtonType.TEXT,
							text:     'View on Pumpfun',
							size:     Size.LARGE,
							color:   Color.MAIN_COLOR,
						}}
					/>
				</div>
			</div>

		</div>
	)
}

