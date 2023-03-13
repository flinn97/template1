import DefaultMap from "./default";
import LegatoMap from './legatoStudentList'
import OutreachMap from "./outreachList";

class MapThemeFactory {
    operationsFactory; 

    factory ={
       default: DefaultMap.getMapTheme(),
       legatoMap: LegatoMap.getMapTheme(),
       outreachMap: OutreachMap.getMapTheme()

    }

    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    getMapThemeFactory(){
        return this.factory;
    }

   
}
export default MapThemeFactory;