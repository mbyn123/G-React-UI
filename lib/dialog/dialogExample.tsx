import React, { useState } from "react";
import Dialog, { alert } from "./dialog";

export default function DialogExample() {
    const [visible, setVisible] = useState(false);
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

        </>
    )
}