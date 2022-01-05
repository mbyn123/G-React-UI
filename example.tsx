import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from './lib/icon/IconExample'
import DialogExample from './lib/dialog/dialogExample'

const App = () => {
    return (
        <Router>
           <div>
               <header>
                   <div>GUI</div>
               </header>
                <aside>
                   <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to={'/icon'}>icon</Link>
                        </li>
                        <li>
                            <Link to={'/dialog'}>dialog</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                </main>
            </div>
        </Router>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));