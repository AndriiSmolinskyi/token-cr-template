import {
	css,
} from '@emotion/css'
import {
	orbitronSemibold,orbitronRegular,
} from '../../../shared/styles'

export const trustedByWrapper = css`
scroll-margin-top: 100px;
 margin-bottom: 200px;
	margin-top: 100px;
`

export const container = css`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`
export const title = css`
	margin-bottom: 17px;
`
export const titleText = css`
	color:var(--white);
	${orbitronSemibold(40,)}
	margin-bottom: 10px;
	transition: all 0.6s ease; 

	 &:hover{
    color:var(--white);
  	 text-shadow: 15px 0px 3px rgba(255, 255, 255, 0.5);
  }
`

export const text = css`
  padding-top: 24px;
  padding-bottom: 50px;
  max-width: 630px;
  margin: 0 auto;

  p{
   ${orbitronRegular(24,)}
  }
`

export const trustedByImg = css`
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
`

export const Message = css`
	cursor: pointer;
	border-radius: 10px;
  transition: all 1s ease;
	&:hover{
	
	border: 1px solid var(--green);
	}

`