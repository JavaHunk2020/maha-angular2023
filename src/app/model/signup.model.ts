
export class Signup {
    
    username:string;
    password:string;
    email:string;
    mobile:string;
    address:string;
    doe:Date =new Date();
    
    constructor(username:string ,  password:string , email:string, mobile:string, address:string){
        this.username=username;
        this.password=password;
        this.email=email;
        this.mobile=mobile;
        this.address=address;
    }
}