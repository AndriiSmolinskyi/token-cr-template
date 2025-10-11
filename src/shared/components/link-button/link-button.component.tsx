import React from 'react'

type Props = {
  href?: string
  text: string
}

export const LinkButton: React.FC<Props> = ({
	href, text,
},) => {
	return (
		<a
			href={href}
		>
			{text}
		</a>
	)
}