import React,{SVGAttributes} from "react";
import './importAllIcons';
import './icon.scss'
import classes from "../../helpers/classes";

// 继承svg所有的属性
interface IconProps extends SVGAttributes<SVGElement> {
    name: string,
}

const Icon: React.FC<IconProps> = ({name, className, ...rest}) => {

    return (
        <>
            <svg className={classes('gui-icon', className)} {...rest}>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </>
    )
};

export default Icon