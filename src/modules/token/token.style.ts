import {
	css,
} from '@emotion/css'

export const app = css`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`

export const body = css`
	
	overflow-x: hidden;
	scroll-behavior: smooth;
  position: relative;  
  flex: 1 1 auto;
  overflow-y: hidden;
  	/* &::-webkit-scrollbar {
		width: 7px;
		height: 7px;
	}

  	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
    background-color: var(--gray);

	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
		margin-top: 38px;
	}
  
   &::-webkit-scrollbar-corner {
		background-color: transparent;
	} */
`

export const particles = css`
  position: absolute;    
  inset: 0;
  pointer-events: none;
  z-index: 0;

  canvas {
    display: block;    
    width: 100%;
    height: 100%;
  }
`

export const content = css`
  position: relative;
  z-index: 1;           
`
