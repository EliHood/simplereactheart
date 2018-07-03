import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      btnText: 'Like',
      className: 'glyphicon glyphicon-heart-empty'
    }


  }

  btnClick(){
    if(this.state.btnText === 'Like'){
      this.setState({
        btnText:'Unlike'
      })
    } else{
      this.setState({
        btnText: 'Like'
      })
    }


    if(this.state.className === 'glyphicon glyphicon-heart-empty'){
      this.setState({
        className: 'glyphicon glyphicon-heart'
      })
    }
      else{
        this.setState({
          className: 'glyphicon glyphicon-heart-empty'
        })
      }

  }

  render() {
    return (
      <span onClick={ this.btnClick.bind(this) }>
        <i onClick={ this.btnClick.bind(this) }  className={this.state.className}>
          </i>

           <p>{ this.state.btnText }</p>
      </span>
    )
  }


}

export default App;
