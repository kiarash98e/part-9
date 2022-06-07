import React from 'react'

interface TitleProps {
    title:string
}

const Title:React.FC<TitleProps> = ({title}) => {
    return(
        <div className="mb-3 text-center py-4 font-bold text-[#28766b]">{title}</div>
    )
}

export default Title