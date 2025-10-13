import React from 'react'
import {
	linkStyle,
} from './link.style'

type Props = {
  href?: string
	text: string
  id?: string
}

export const LinkButton: React.FC<Props> = ({
	href, text,
},) => {
	return (
		<a
			href={href}
			className={linkStyle}
		>
			{text}
		</a>
	)
}