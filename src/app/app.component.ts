import { Component } from '@angular/core';
import { Signup } from './model/signup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-album-app';
  message  = 'Welcome Jee Owow Learning Angular!!!';

  //Cretaing array of Signup
  signups:Signup[] =[];

  /**
   * this is logic 
   */
  public process(username : HTMLInputElement , password : any, email:any, mobile:HTMLInputElement , address:any) : void {
      //alert("Hello  =  "+username.value);
      let signup : Signup =new Signup(username.value, password.value,email.value,mobile.value , address.value);
      signup.doe =new Date();
      //Adding once signup instance inside Array
      this.signups.push(signup);
      username.value='';   
      password.value='';   
      email.value='';   
      mobile.value='';   
      address.value='';   
  }


  public display(username :unknown) : void {
     if(typeof username==='string') 
     console.log(username.toUpperCase() + 'Hello');
  }
}
