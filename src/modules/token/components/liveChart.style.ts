import {
	css,
} from '@emotion/css'
import {
	orbitronRegular,
} from '../../../shared/styles'

export const LiveChartWrapper = css`
scroll-margin-top: 100px;
	margin: 145px 0 160px;
  text-align: center;
`
export const container = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`
export const title = css`
	margin-bottom: 24px;

	
		h2{
		font-weight: 600;
		font-size: 40px;
		
	}
`

export const description = css`
 padding: 24px 0 70px;
  max-width: 630px;
  margin: 0 auto;
  p{
  	${orbitronRegular(24,)}
  }
`
export const view = css`
	display: flex;
	justify-content: center;
`