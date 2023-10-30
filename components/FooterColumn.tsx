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
    <div className='flex flex-col gap-5'>
        <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
        {children}
    </div>
  )
}

export default FooterColumn