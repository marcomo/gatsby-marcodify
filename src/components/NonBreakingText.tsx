import React, { FC } from 'react'

const NonBreakingText: FC<{ text: string }> = (props) => {
  const regex = /(\[\[.+?\]\])/g
  const matches = props.text.split(regex).filter(Boolean)
  if (matches.length) {
    return <>
      {matches.map((match, i) => {
        if (match.match(regex)) {
          const innerText = match.replace(/(\[\[)(.+)(\]\])/, '$2')
          return <span key={`nowrap-${i}`} className="text-no-wrap">{innerText}</span>
        }
        return match
      })}
    </>
  }
  return <>{props.text}</>
}

export default NonBreakingText