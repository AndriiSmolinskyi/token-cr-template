import {
	css,
} from '@emotion/css'
import {
	orbitronMax, orbitronRegular, orbitronBold,
} from '../../../shared/styles'

export const footerContainer = css` 
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
`

export const footerTitle = css` 
	${orbitronMax(40,)}
 	margin-bottom: 24px;
	color: var(--green);
`

export const footerText = css`
	${orbitronRegular(15,)}
	max-width: 325px;
`

export const footerSubTitle = css`
	${orbitronBold(16,)}
`

export const footerSocial = css`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const rights = css`
	${orbitronRegular(13,)}
	color: var(--gray);
`

export const footerBottom = css`
	max-width: 1000px;
	height: 66px;
  	margin: 0 auto;
	display: flex;
	align-items: center;
  	padding: 0 20px;
	border-top: 2px solid var(--dark-gray);
`