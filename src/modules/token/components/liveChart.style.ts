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
	margin-bottom: 34px;

	
		h2{
		transition: all 0.6s ease; 
		font-weight: 600;
		font-size: 40px;
		&:hover{
		color:var(--white);
		text-shadow: 15px 0px 3px rgba(255, 255, 255, 0.5);
	}
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
	align-items: center;
	position: relative;
	height: 146px;
   max-width: 1200px;
   border: 1px solid #111;
	
	&::before {
	z-index: -1;
		content: "";
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, rgba(0,255,100,0.25) 70%, transparent 100%);
		opacity: 0;
		transition: opacity 0.5s ease;
	}
	
	&:hover::before {
		opacity: 0.4;
	}
`