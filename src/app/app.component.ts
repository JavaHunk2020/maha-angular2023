import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-album-app';
  message  = 'Welcome Jee Owow Learning Angular!!!';

  /**
   * this is logic 
   */
  public process(username : any , password : any, email:any) : void {
      //alert("Hello  =  "+username.value);
      this.message = 'Hello  =  '+username.value+' , Password = '+password.value+' and email = '+email.value;
  }

  public display(sername : any , password : any, email:any) : void {
    //alert("Hello  =  "+username.value);
  
  }
}
