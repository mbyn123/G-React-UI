import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon/Icon'

const App = () => {
    return (
        <div>
            <Icon name='wechat' onClick={()=>console.log(23123123)}/>
            <Icon name='meituan' onMouseEnter={()=>console.log('object')}/>
            <Icon name='user' />
            <Icon name='menu' />
            <Icon name='alipay' />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));