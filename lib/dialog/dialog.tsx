import React from "react";
import './dialog.scss'
import Icon from "../icon/Icon";
import {scopedClassMaker} from "../../helpers/classes";

interface Props {
    visible: boolean,
}



const sc = scopedClassMaker('gui-dialog')


const Dialog: React.FC<Props> = ({visible, children}) => {
    return visible ? (
        <>
            <div className={(sc('mask'))}/>
            <div className={sc()}>
                <div className={sc('close')}>
                    <Icon name='close'/>
                </div>
                <header className={sc('close')}>提示</header>
                <main className={sc('main')}>
                    {children}
                </main>
                <footer className={sc('footer')}>
                    <button>确定1111</button>
                    <button>取消</button>
                </footer>
            </div>
        </>
    ) : null
};

export default Dialog