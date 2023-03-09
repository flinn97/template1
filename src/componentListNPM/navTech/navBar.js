import { Component } from 'react';
// import auth from '../services/auth';
import "../../App.css";
import Legato from './legatoNavBar.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavThemeFactory from '../navThemes/navThemeFactory.js';
import DefaultNav from './defaultNavBar.js'
import FlinnApps from './flinnAppsNavBar.js';
import Minimal from './minimalNavBar.js';


export default class NavBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let app = this.props.app;
    let state = app.state;
    let styles = state.styles;
    
    let switchCase = app.state.switchCase;
    let dispatch = app.dispatch;
    let template = {
      legato : <Legato app={app} alignment={this.props.alignment} theme={this.props.theme? this.props.theme: "legato"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      legatoDark: <Legato app={app} alignment={this.props.alignment} theme={this.props.theme? this.props.theme: "legatoDark"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      flinnApps :  <FlinnApps app={app} alignment={this.props.alignment} theme={this.props.theme? this.props.theme: "flinnApps"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      minimal : <Minimal app={app} alignment={this.props.alignment} theme={this.props.theme? this.props.theme: "minimal"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
      default :  <DefaultNav app={app} alignment={this.props.alignment} theme={this.props.theme? this.props.theme:state.defaultTheme?state.defaultTheme: "default"} obj = {this.props.obj} template={this.props.template} options={this.props.options}/>,
    }
    let f = NavThemeFactory?.getNavThemeFactory();
    let theme = this.props.theme?f[this.props.theme]:this.props.template?f[this.props.template]: state.defaultTheme?f[state.defaultTheme]:f.default;
    let container = theme[this.props.alignment];
  return (
    <div style={
      this.props.options?.navContainerStyle?{...this.props.options?.navContainerStyle}:
      this.props.options?.navContainerTheme?f[this.props.options?.navContainerTheme][this.props.alignment].navContainer:
      container.navContainer}>
      {this.props.template?(<>{template[this.props.template]}</>):(<>{template.default}</>)}
    </div>
        
  )}
}

      //  logo={this.props.logo}  navContainerStyle={this.props.navContainerStyle} navContainerTheme={this.props.navContainerTheme} sectionsContainerTheme={this.props.sectionsContainerTheme} sectionsContainerStyle={this.props.sectionsContainerStyle} sectionOneStyle={this.props.sectionOneStyle} sectionOneTheme={this.props.sectionOneTheme} logoWrapperStyle={this.props.logoWrapperStyle} logoWrapperTheme={this.props.logoWrapperTheme} logoTheme={this.props.logoTheme} logoImageStyle={this.props.logoImageStyle} logoImageTheme={this.props.logoImageTheme} navItemStyle={this.props.navItemStyle} navItemTheme={this.props.navItemTheme} linksWrapperStyle={this.props.linksWrapperStyle} linksWrapperTheme={this.props.linksWrapperTheme} linksTheme={this.props.linksTheme} 
