import { Component } from 'react';
import "../App.css"
import ParentFormComponent from '../componentListNPM/componentForms/parentFormComponent';
import FormWithUpdateAndRun from '../componentListNPM/componentForms/buttons/formWithUpdateAndRun';
import Notes from '../componentListNPM/componentForms/fullForms/notes';
export default class FormsTest extends Component {
  constructor(props) {
    super(props);
      this.state={
        obj: undefined
      }

  }
  
  componentDidMount(){
    this.props.app.dispatch({operate:"addgeneral", operation:"cleanPrepare"});
  }

  render() {
    let app = {...this.props.app};
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    



    return (
      <div style={{width:"100vw", height:"100vh"}} >
        {state.currentComponent&&(
        <div>

          {state.currentComponent.getJson().type}
          <Notes  app={app} />
        </div>
)}
        </div>

    )
  }
}