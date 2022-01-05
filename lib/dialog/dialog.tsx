import React, {ReactElement} from "react";

interface Props {
    visible: boolean,
    children: ReactElement
}

export const Dialog: React.FC<Props> = ({visible, children}) => {
    return visible ? children : null
};