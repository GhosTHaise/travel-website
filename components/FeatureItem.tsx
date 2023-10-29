import React from 'react'

type Props = {
    title : string;
    icon : string;
    variant : string;
    description : string;
}

const FeatureItem = ({
    title,
    icon,
    variant,
    description
} : Props) => {
  return (
    <div>
        {
            title
        }
    </div>
  )
}

export default FeatureItem