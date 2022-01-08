import React, { ReactElement, ReactNode } from "react";
import ReactDOM from 'react-dom'
import './dialog.scss'
import Icon from "../icon/Icon";
import { scopedClassMaker } from "../../helpers/classes";

const sc = scopedClassMaker('gui-dialog')

interface Props {
    visible: boolean,
    onCancel: React.MouseEventHandler,
    maskClosable?: boolean
    butttons?: Array<ReactElement>, // 应该设置成footer配置项
    onOk?: (e: React.MouseEvent<Element, MouseEvent>) => void
}

const Dialog: React.FC<Props> = (props) => {

    const { visible, children, onCancel, maskClosable, butttons, onOk } = props

    const onClose: React.MouseEventHandler = (e) => {
        onCancel(e)
    }

    const onConfirm: React.MouseEventHandler = (e) => {
        onOk && onOk(e)
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
                                <button onClick={onConfirm}>确定</button>
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



const alert = (content: ReactNode) => {
    const onClose = () => {
        // 关闭组件,重新渲染一遍组件
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        // 卸载组件
        ReactDOM.unmountComponentAtNode(div)
        // 清楚DOM
        div.remove()
    }

    // 声明组件
    const component = <Dialog visible={true} onCancel={onClose} onOk={onClose}>
        {content}
    </Dialog>

    // 创建div
    const div = document.createElement('div')

    // 将div放在body中
    document.body.append(div)

    // 渲染DOM
    ReactDOM.render(component, div)
}


const confirm = ({
    content, yes, no
}: {
    content: ReactNode,
    yes?: () => void,
    no?: () => void
}) => {

    return new Promise((resolve, reject) => {
        const onClose = () => {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
        }
        const onYes = () => {
            onClose()
            resolve('yes')
            yes && yes()
        }

        const onNo = () => {
            onClose()
            reject('no')
            no && no()
        }

        const component = <Dialog visible={true} onCancel={onNo} onOk={onYes}>
            {content}
        </Dialog>

        const div = document.createElement('div')
        document.body.append(div)
        ReactDOM.render(component, div)
    }).catch(err => err)

}


const modal = (content: ReactNode, yes?: () => void) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const onYes = () => {
        onClose()
        yes && yes()
    }
    const component = <Dialog visible={true} onCancel={onClose} onOk={onYes}>
        {content}
    </Dialog>

    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)

    // 将关闭弹窗的方法暴露出去
    return onClose

}

Dialog.defaultProps = {
    maskClosable: false
}

export { alert, confirm, modal }

export default Dialog