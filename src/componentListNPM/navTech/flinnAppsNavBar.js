import { Component } from 'react';
// import auth from '../services/auth';
import NavItems from './navItem';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Logo from './navBarLogo';
import ProfilePic from './navBarProfilePic';

import NavThemeFactory from '../navThemes/navThemeFactory';

export default class FlinnApps extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchCase = app.state.switchCase;
    let dispatch = app.dispatch;
    let f = NavThemeFactory?.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:state.theme?f[state.theme]:f.default;
    let style = theme[this.props.alignment];
  return (
    <div style={this.props.options?.sectionsContainerStyle?{...this.props.options?.sectionsContainerStyle}:
    this.props.options?.sectionsContainerTheme?{...f[this.props.options?.sectionsContainerTheme][this.props.alignment].sectionsContainer}:
    {...style.sectionsContainer}}>
       
      <div style={this.props.options?.sectionTwoStyle?{...this.props.options?.sectionTwoStyle}:
      this.props.options?.sectionTwoTheme?{...f[this.props.options?.sectionTwoTheme][this.props.alignment].sectionTwo}:
      {...style.sectionTwo}}>
        <NavItems app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={this.props.options}/>
      </div>
     <div style={this.props.options?.sectionThreeStyle?{...this.props.options?.sectionThreeStyle}:
     this.props.options?.sectionThreeTheme?{...f[this.props.options?.sectionThreeTheme][this.props.alignment].sectionThree}:{...style.sectionThree}}>
        <ProfilePic app={app} alignment={this.props.alignment} theme={this.props.theme} obj={this.props.obj} options={this.props.options} />
      </div> 
    </div>
        
  )}
}