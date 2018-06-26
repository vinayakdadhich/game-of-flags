import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // url="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
  name="";
  a=0;
  number=0;
  priority=""
  date=""
   numbers:any=[]
    add()
    {
      var obj={
        status:false,name:this.name,priority:this.priority,date: new Date()
      }
      this.numbers.push(obj);
      console.log(this.numbers)
      this.name="";

    
    }
    delete(i){
      this.numbers.splice(i,1);
    }
    done(i){
      this.numbers[i].status=!this.numbers[i].status;
      console.log(this.numbers[i].status);
        if(this.numbers[i].status==true){
           this.a= this.a-1;
            
        }
        
          else(this.numbers[i].status==false)
          {
           this.a= this.a+1;
        }


    }
    count1(){
      var c=0;
      for(var i=0;i<this.numbers.length;i++){
              c=i;
              
      }
      return c;
    }
    pending(){
      var count=0;
      for(var i=0;i<this.numbers.length;i++){
        if(!this.numbers.status){
          count++
        }
      }
      return count;
    }
   
}