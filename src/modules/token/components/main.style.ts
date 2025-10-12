import {
	css,
} from '@emotion/css'
import {
	orbitronMax, orbitronSemibold,
} from '../../../shared/styles'

export const main = css`
	min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`
export const container = css`
  margin: 0 auto;
  max-width: 750px;
  padding: 0 20px;
  text-align: center;
`
export const mainTitle = css`
 position: relative;
  text-align: center;
`
export const title = css`
	${orbitronMax(48,)}
	color: var(--green);
`
export const info = css`
	color: var(--white);
	${orbitronSemibold(35,)}
  display: block;
  margin-bottom: 10px;
`

export const description = css`
 max-width: 600px;
	font-size: 24px;
  margin-bottom: 20px;
  line-height: 1.4;
`

export const buy = css`
	margin-top: 15px;
	display: flex;
	justify-content: center;
`
