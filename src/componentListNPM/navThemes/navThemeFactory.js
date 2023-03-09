// import DefaultSideNav from "./defaultSideBar";
// import DefaultTopNav from "./defaultTopBar";
import flinnApps from "./flinnAppsNav";
import LegatoNav from "./legatoNav";
import LegatoNavDark from "./legatoNavDark";
import MinimalNav from "./minimalNav";
import DefaultNav from "./defaultNav.js";
import minimalNav from "./minimalNav";

class NavThemeFactory {
    operationsFactory;

    factory ={
    //     defaultSideNav: DefaultSideNav.getNavTheme(),
    //    defaultTopNav: DefaultTopNav.getNavTheme(),
    legato: LegatoNav.getNavTheme(),
    legatoDark: LegatoNavDark.getNavTheme(),
    flinnApps: flinnApps.getNavTheme(),
    minimal: minimalNav.getNavTheme(),
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