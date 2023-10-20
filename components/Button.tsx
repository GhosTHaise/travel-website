import React from 'react'
type Props = {
    type : "button" | "submit";
    title : string;
    icon? : string;
    variant? : "btn_dark_green";
}
const Button = ({
    type,
    title,
    icon,
    variant
} : Props) => {
  return (
    <button
        type={type}
    >
        
        { title }
    </button>
  )
}

export default Button