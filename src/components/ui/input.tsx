import React from 'react'

interface IInput {
    value:string,
    type: "text" | "tel",
    name:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
    label:string,
    defaultValue?: string | undefined,
    errorText?: string,
    placeHolder:string | undefined,
    disabled?:boolean
}

const Input:React.FC<IInput> = ({
    type,
    value,
    onChange,
    disabled=false,
    name,
    label,
    defaultValue,
    placeHolder
}) => {
    
    
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input 
                disabled={disabled}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                defaultValue={defaultValue ? defaultValue : undefined}
                placeholder={placeHolder}
                className={`block w-full text-heading border-green bg-transparent outline-none border-b-2 py-2 px-2  placeholder-gray-400 focus:bg-purple-100 `}
              
          
            /> 
        </>
    )
}

export default Input
