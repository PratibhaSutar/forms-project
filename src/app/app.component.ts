import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formdata: any;
  
  ngOnInit(): void {
    
    this.formdata = new FormGroup(
      {
        
        email: new FormControl("",Validators.compose([Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")])),
        password: new FormControl("",Validators.compose([Validators.required,
          Validators.minLength(5),Validators.maxLength(8)
        ]))
      
      });
      
  }
 
  title = 'forms-project';
  
  email ="";
  password ="";

  name="";
  emailId="";
  pwd="";
  cpassword="";
 

  /**submitClicked(data: any) {
    alert(data.email);
    alert(data.password);
    //alert(data);
    //console.log(data);

  }

  registerClicked(data: any) {
    alert(data.name);
    alert(data.email);
    alert(data.password);
    alert(data.cpassword);
    //alert(data);
    //console.log(data);
  }**/
  onClicksubmitMyData(data:any){
    
    this.email = data.email;
    this.password = data.password;
    console.log(data);
    //alert(data.emal);
  }

  onClickregisterMyData(data:any){
    this.name = data.name;
    this.emailId = data.emailId;
    this.pwd = data.pwd;
    this.cpassword = data.cpassword;
    console.log(data);
  }
}
