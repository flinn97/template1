import { Component } from 'react';
import "../App.css"
import IframeVideo from './iframe';

export default class IframeContainer extends Component {
  constructor(props) {
    super(props);
    

  }


  render() {
    let app = {...this.props.app};
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    



    return (
      <div >
        <IframeVideo app={app} />
        </div>

    )
  }
}