import {
	css,keyframes,
} from '@emotion/css'
import {
	orbitronRegular, orbitronSemibold,orbitronMax,orbitronMedium,
} from '../../../shared/styles'
export const pulse = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 0.5; }
  100% { opacity: 0.7; }
`
export const discoverWrapper = css`
	margin-top: 55px;
  position: relative;
  min-height: 300px;
  padding: 0 20px;
  text-align: center;
`

export const main = css`
  max-width: 1200px;
  margin: 0 auto;
`
export const tittle = css`
	
  position: relative;
  text-align: center;
  margin-bottom: 16px;
  color: var(--green);

  span{
  
   color: var(--green);
  	${orbitronSemibold(40,)}
	text-transform: uppercase;

  }
	h2{
		 text-transform: uppercase;
		${orbitronSemibold(40,)}
	}
	  &::before {
    content: "";
    position: absolute;
    inset: -100px;
    background: radial-gradient(circle, rgba(0, 255, 100, 0.25) 0%, transparent 70%);
    filter: blur(60px);
    opacity: 0.3;
    animation: ${pulse} 2s linear infinite;
    border-radius: 50%;
  }

`
export const tittleSpan = css`
	${orbitronSemibold(40,)}
  color: var(--white);
  text-transform: uppercase;
`

export const text = css`
  margin-top: 24px;
  max-width: 630px;
  margin: 0 auto;
  p{
  	${orbitronRegular(24,)}
 	padding: 24px 0 70px;
  }

`

export const inputWrapper = css`
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #111;
  max-width: 1004px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(0,255,100,0.25) 0%, transparent 110%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover:before {
    opacity: 1;
  }

`

export const label = css`
	${orbitronMax(20,)}
	color: var(--white);
  display: block;
  font-weight: 700;
  font-size: 20px;	
  margin-bottom: 12px;
`
export const wr = css`
  gap: 20px;
  display: flex;
`
export const form = css`
  display: flex;
  align-items: center;
  background-color: #111;
  border-radius: 10px;
  overflow: hidden;
`

export const input = css`
	${orbitronRegular(16,)}
	
 	text-align: center;
	border: none;
	outline: none;
	padding: 0 16px;
	height: 64px;
	width: 857px;
	color: var(--white);
	background: #111;
  
`

export const copy = css`
	${orbitronMedium(26,)}
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 183px;
  height: 64px;
  padding: 0 24px;
  border: 1px solid var(--baseBlack);
  background: transparent;
  color: var(--white);
  cursor: pointer;
  transition: 0.3s;
`
