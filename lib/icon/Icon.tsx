import React from "react";
import './importAllIcons';
import './icon.scss'

interface Props {
    name: string
}

const Icon: React.FC<Props> = ({ name }) => {
    return (
        <>
            <svg className='gui-icon'>
                <use xlinkHref={`#${name}`}></use>
            </svg>
        </>
    )
}

export default Icon