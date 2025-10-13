import {
	css,
} from '@emotion/css'

export const body = css`
	height: 100%;
	overflow-y: auto;
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