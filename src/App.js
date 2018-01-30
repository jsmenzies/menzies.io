import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";
import Buttonify from "./Buttonify";

class Welcome extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Menzies.io</h1>
                </header>
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        )
    }
}

class Letter extends React.Component {
    render() {
        const letterStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        };

        return (
            <div align="center" style={letterStyle}>
                {this.props.children}
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        const squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        };

        return(
            <div style={squareStyle}></div>
        );
    }
}

class Label extends React.Component {
    render() {
        const labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };

        return(
            <div style={labelStyle}>{this.props.color}</div>
        );
    }
}

class Card extends React.Component {
    render() {
        const cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return(
            <div style={cardStyle}>
                <Square color={this.props.color} />
                <Label color={this.props.color} />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Welcome/>
                {/*<div align="center">*/}
                {/*<HelloWorld greetTarget={"James"}/>*/}
                {/*<Buttonify behavior={"submit"}>SEND DATA</Buttonify>*/}
                {/*<br/>*/}
                {/*<Letter bgcolor="#58B3FF">A</Letter>*/}
                {/*<Letter bgcolor="#FF605F">E</Letter>*/}
                {/*<Letter bgcolor="#FFD52E">I</Letter>*/}
                {/*<Letter bgcolor="#49DD8E">O</Letter>*/}
                {/*<Letter bgcolor="#AE99FF">U</Letter>*/}
                {/*<br/>*/}
                {/*<Card color="#FFA737"></Card>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
