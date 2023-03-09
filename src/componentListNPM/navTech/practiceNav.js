import { Component } from 'react';
import "../App.css"
import CardPractice from './CardPrac';


export default class NavPrac extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
 
  componentDidMount(){
    this.props.app.dispatch({linkChange:'NavBar'})
  }

  render() {
    let app = this.props.app;


    return (
      <div><h1>Nav</h1>

      

      </div>

    )
  }
}

