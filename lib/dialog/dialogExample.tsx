import React, {useState} from "react";
import {Dialog} from "./dialog";

export default function DialogExample() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <button onClick={() => setVisible(!visible)}>click</button>
            <Dialog visible={visible}>
                 <div>7777</div>
            </Dialog>
        </>
    )
}