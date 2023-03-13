import BaseClass from "../componentListNPM/baseClass";
import authService from "../services/auth.js";
import moment from 'moment';
class componentBase extends BaseClass{
    constructor(opps){
        super(opps);

    }
    json;
    startobj={
        date: "",
        _id: "",
        description: "",
        title: "",
        owner: "",
        user: "",
        type: "",
        
        collection:"",
    }

    userInfo={
        about: "",
        picURL:"",
        email: "",
        firstName:"",
        lastName:"",
        password:"",
        phone: "",
        role: "",
        date: "",
        pics: "",
        
        collection:""
    }


    
    

}



class UserThings extends componentBase{
    constructor(opps){
        super(opps);
        
    }
    json= {
        ...this.userInfo, 
        role:"teacher",
        type: "user",
        signUpDate: moment().format('L'),
        paidCustomer: false,

    }

    
    
}

class Tag extends componentBase{
   
    json= {
        
        type: "tag",
        name: "",
        order: 0,
       

    }

    
    
}

class Person extends componentBase{
   
    json= {
        
        type: "person",
        name: "",
        notes: "",
        email:"",
        phone:"",
        platform:"",
        tag:"Not Started"
       

    }

    
    
}




function forFactory(){
    return { user: UserThings, tag:Tag, person:Person  }
}


export {forFactory}
//kinstone: Kinstone, kinstoneComponent: KinstoneComponent,element: Element, chosenElement:Element, chosenKinstoneComponent:KinstoneComponent  \
/**
 * class Kinstone extends componentBase{
    
    json={
        ...this.startobj,
        type:"kinstone",
        picURL: "",
        picURLs: {},
        

    }
    
    

}
class Element extends componentBase{
    
    json={
        ...this.startobj,
        type:"element",
        picURL: "",
        picURLs: {},
        

    }
    
    

}

class KinstoneComponent extends componentBase{
    
    json={
        ...this.startobj,
        type:"kinstoneComponent",
        picURL: "",
        picURLs: {},
        

    }
    
    

}
 */