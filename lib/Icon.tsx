import React from "react";
import wechat from '../icons/wechat.svg'

console.log(wechat)

interface Props{
   name:string
}

 const Icon:React.FC<Props> = ({name})=>{
    return (
        <span>
            <svg>
                <use xlinkHref={`#${name}`}></use>
            </svg>
        </span>
    )
}

export default Icon