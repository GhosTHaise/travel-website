import React from 'react'

type Props = {
    title : string;
    children : React.ReactNode
}
const FooterColumn = ({
    title,
    children
} : Props) => {
  return (
    <div>
        <h4>{title}</h4>
    </div>
  )
}

export default FooterColumn