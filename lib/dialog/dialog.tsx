import React, { ReactElement } from "react";
import ReactDOM from 'react-dom'
import './dialog.scss'
import Icon from "../icon/Icon";
import { scopedClassMaker } from "../../helpers/classes";

const sc = scopedClassMaker('gui-dialog')

interface Props {
    visible: boolean,
    onCancel: React.MouseEventHandler,
    maskClosable?: boolean
    butttons?: Array<ReactElement>
}

const Dialog: React.FC<Props> = (props) => {

    const { visible, children, onCancel, maskClosable, butttons } = props

    const onClose: React.MouseEventHandler = (e) => {
        onCancel(e)
    }

    const onClickMask: React.MouseEventHandler = (e) => {
        maskClosable && onClose(e)
    }

    const dom = visible ? (
        <>
            <div className={(sc('mask'))} onClick={onClickMask} />
            <div className={sc()}>
                <div className={sc('close')} onClick={onClose}>
                    <Icon name='close' />
                </div>
                <header className={sc('header')}>提示</header>
                <main className={sc('main')}>
                    {children}
                </main>
                <footer className={sc('footer')}>
                    {
                        butttons ? butttons.map((button, index) => React.cloneElement(button, { key: index })) : (
                            <>
                                <button>确定</button>
                                <button onClick={onClose}>取消</button>
                            </>
                        )
                    }
                </footer>
            </div>
        </>
    ) : null
    // 传送门
    return ReactDOM.createPortal(dom, document.body)
};

export const alert = (content: string) => {
    // 声明组件
    const component = <Dialog visible={true} onCancel={() => { 
        // 关闭组件,重新渲染一遍组件
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        // 卸载组件
        ReactDOM.unmountComponentAtNode(div)
        // 清楚DOM
        div.remove()
    }}>
        {content}
    </Dialog>

    // 创建div
    const div = document.createElement('div')

    // 将div放在body中
    document.body.append(div)

    // 渲染DOM
    ReactDOM.render(component, div)
}

Dialog.defaultProps = {
    maskClosable: false
}

export default Dialog