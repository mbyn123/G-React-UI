import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";

export default function DialogExample() {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        // 接受关闭弹窗的方法
        const close = modal(<div>
            '11111'
            {/* 可以在内部关闭弹窗 */}
            <button onClick={() => close()}>关闭</button>
        </div>, () => {
            console.log('你点击了确认')
        })
    }

    const x = () => {
        confirm({
            content: '1111',
            yes(){
                console.log(111)
            },
            no(){
                console.log(222)
            }
        })

    }
    return (
        <>
            <div>
                <h2>dialog</h2>
                <button onClick={() => setVisible(!visible)}>click</button>
                <Dialog visible={visible} onCancel={() => setVisible(false)}>
                    <div>1111</div>
                </Dialog>
            </div>
            <div>
                <h2>alert</h2>
                <button onClick={() => alert('提示')}>alert</button>
            </div>
            <div>
                <h2>confirm</h2>
                <button onClick={x}>confirm</button>
            </div>
            <div>
                <h2>confirm</h2>
                <button onClick={openModal}>modal</button>
            </div>

        </>
    )
}