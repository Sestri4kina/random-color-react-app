/**
 * Created by Sestri4kina on 26.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import './css/index.css';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: [135, 19, 119]};
    }
    handleClick() {
        this.setState({
            color: this.chooseColor()
        });
    }

    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    render() {
        return (
            <div>
            <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)}.
    </h1>
        <Button
        light={this.isLight()}
        onClick={this.handleClick.bind(this)}
        />
    </div>
    );
    }

    //custom functions
    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        var rgb = this.state.color;
        return rgb.reduce(function(a,b){ return a+b;}) < 127 * 3;
    }

    applyColor() {
        var color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        for (var i = 0, random = []; i < 3; i++) {
            random.push(Math.floor(Math.random()*256));
        }
        return random;
    }

}

ReactDOM.render(
<Random />,
    document.getElementById('app')
);
