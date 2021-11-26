import React from "react";
import './importAllIcons';

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