import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon/Icon'

const App = () => {
    return (
        <div>
            <Icon name='wechat' />
            <Icon name='meituan' />
            <Icon name='user' />
            <Icon name='menu' />
            <Icon name='alipay' />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))