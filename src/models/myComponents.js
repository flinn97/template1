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
        this.getPicSrc=this.getPicSrc.bind(this);
        this.getDaysFromNow=this.getDaysFromNow.bind(this);
    }
    json= {
        ...this.userInfo, 
        role:"teacher",
        type: "user",
        signUpDate: moment().format('L'),
        paidCustomer: false,

    }
    getDaysFromNow(){
        
        if(this.json.paidCustomer){
            return false;
        }
        else{
            let now = new Date(moment().format('L'));
            let then = new Date(this.json.signUpDate);
            var Difference_In_Time = now.getTime() - then.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            let needsToPay = true;
            if(Difference_In_Days<30){
                needsToPay = false;
            }
        
            return needsToPay;
        }
        
        
    }
    async getPicSrc(){
        let pic = await authService.downloadPics(this.json.pics);
        this.json.picURL=pic;
        
    }
}

class ChatRoom extends componentBase{
    json={
        _id: "",
        owner: "",
        people: {},
        name:"",
        type:"chatroom",
        collection: ""

    }
    async createChatroom(students){
        let arr = this.operationsFactory.isArray(students);
        let name="";
        let people={}
        for(const key in arr){
            let json = students[key].getJson();
            name += json.firstName;
            people[json.firstName]= json._id;
        }
        await this.cleanJsonPrepare({addchatroom:{name:name, people:people }})
    }
    async addToChatroom(students){
        let arr = this.operationsFactory.isArray(students);
        for(const key in arr){
            let json = arr[key].getJson();
            this.json.people[json.firstName]= json._id;
        }
        await this.cleanPrepareRun({update:this})
    }
    
    
}
class Post extends componentBase{
    json={
        _id: "",
        chatroom: "",
        owner: "",
        owners: {},
        student:false,
        content:"",
        type:"post",
        dateOfPost: moment().format('lll'),
        collection: "",
        read:false

    }
     /**
     * Send to functions to send a notification to student
     * @param {*} rest 
     */
      async notify(rest){
        
        if(rest==="add"){
            let message = this.json.content; 
            let title = "New Message"        
            await authService.getNotifyInfo(this.json.owner, message)
        }
        
    }
}
class General extends componentBase{
    
    json={
        ...this.startobj,
        type:"general",
        picURL: "",
        picURLs: {},
        testCheck: false,
        testColor: "red"

    }
    /**
     * Send to functions to send a notification to student
     * @param {*} rest 
     */
    async notify(rest){
        
        if(rest==="add"){
            let title = "New Badge"
            let message = "Your teacher just awarded you a new badge.";         
            await authService.getNotifyInfo(this.json.owner, message, title)
        }
        
    }
    async getPicSrc(path){
        let obj={}
        for(const key in path){
            let pic = await authService.downloadPics(path[key]);
            obj["media"+this.createUUID(3)]= pic;
        }
        obj = {...obj, ...this.json.picURLs}

        
        this.json.picURLs = obj
        
    }

}

function forFactory(){
    return { user: UserThings,  post: Post, chatroom:ChatRoom,general: General, }
}


export {forFactory}