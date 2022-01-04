import React, { SVGAttributes } from "react";
import './importAllIcons';
import './icon.scss'


interface IconProps extends SVGAttributes<SVGElement> {
    name: string,
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
    return (
        <>
            <svg className='gui-icon' {...rest}>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </>
    )
};

export default Icon