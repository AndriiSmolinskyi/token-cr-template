import {
	css,
} from '@emotion/css'

export const app = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const body = css`
  flex: 1 1 auto;
  overflow-y: auto;
  	&::-webkit-scrollbar {
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
	}
`

export const canvasWrapper = css`
 position: absolute;
  inset: 0;
  pointer-events: none;

`
export const canvas = css`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 300vh;
`