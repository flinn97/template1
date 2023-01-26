// import DefaultSideNav from "./defaultSideBar";
// import DefaultTopNav from "./defaultTopBar";
import flinnApps from "./flinnAppsNav";
import LegatoNav from "./legatoNav";
import DefaultNav from "./defaultNav.js";

class NavThemeFactory {
    operationsFactory;

    factory ={
    //     defaultSideNav: DefaultSideNav.getNavTheme(),
    //    defaultTopNav: DefaultTopNav.getNavTheme(),
    legato: LegatoNav.getNavTheme(),
    flinnApps: flinnApps.getNavTheme(),
    default: DefaultNav.getNavTheme(),
    }

    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    getNavThemeFactory(){
        return this.factory;
    }

   
}
export default new NavThemeFactory();