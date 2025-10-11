import {
	css,
} from '@emotion/css'
import {
	orbitronMax, orbitronRegular,
} from '../../../shared/styles'

export const container = css`
	width: 100%;
	height: 66px;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid var(--dark-gray);
`

export const header = css`
	max-width: 1200px;
	  width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;;
	align-items: center;
`

export const title = css`
	${orbitronMax(32,)}
	color: var(--green);
`

export const linkBlock = css`
	display: flex;
	gap: 40px;

`

export const links = css`
	${orbitronRegular(16,)}
	color: var(--white);
	cursor: pointer;

	&:hover{
		color: var(--green);
		svg{
			path{
				fill: var(--green);
			}
		}
	}
`

export const iconBlock = css`
	display: flex;
	align-items: center;
  	gap: 24px;
`