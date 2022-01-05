import React from 'react'
import Icon from './Icon'

export default function IconExample(){
    return (
        <div>
            <Icon name='wechat' onClick={()=>console.log(23123123)}/>
            <Icon name='meituan' onMouseEnter={()=>console.log('object')}/>
            <Icon name='user' className={'icon'}/>
            <Icon name='menu' />
            <Icon name='alipay' />
        </div>
    )
}