import {
	css,
} from '@emotion/css'

const font = css`
	font-family: Orbitron, Arial, Helvetica, sans-serif;
 `

export const OrbitronBold = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 700;
	`
}

export const OrbitronSemibold = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 600;
	`
}

export const OrbitronMidBold = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 560;
	`
}

export const OrbitronMedium = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 500;
	`
}

export const OrbitronMediumReg = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 460;
	`
}

export const OrbitronRegular = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 400;
	`
}

export const OrbitronLight = (fontSize: number, lineHeight?: number,): string => {
	return css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${lineHeight ?? fontSize * 1.4}px;
		font-weight: 300;
	`
}