import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">menzies.io</h1>
                </header>
            </div>
        )
    }
}
class App extends Component {
    render() {
        return (
            <div>
                <Welcome/>
            </div>
        );
    }
}

export default App;
