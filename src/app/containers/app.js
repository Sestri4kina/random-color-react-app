import React from 'react';
import { connect } from 'react-redux';

import { Button } from '../components/button';
import '../css/app.css';

import changeColor from '../actions/index';

class Random extends React.Component {
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
        Your color is {this.formatColor(this.props.color)}.
    </h1>
        <Button
        light={this.isLight()}
        onClick={() => this.props.changeColor()}
        />
    </div>
    );
    }

    //custom functions
    formatColor(arr) {
      return 'rgb(' + arr.join(',') + ')';
    }

    isLight() {
      var rgb = this.props.color;
      return rgb.reduce(function(a,b){ return a+b;}) < 127 * 3;
    }

    applyColor() {
        var color = this.formatColor(this.props.color);
        document.body.style.background = color;
    }
}

const mapStateToProps = (state) => {
  return {color: state.color};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: () => {
      dispatch(changeColor());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Random);
