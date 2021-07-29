
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather.css';


class Search extends Component  {
    
       constructor(props) {
        super(props);
        var today = new Date();
        var d=today.getDay();
        var hours = today.getHours();
        var minute=today.getMinutes();
        var a="";
        var back="";

        if(hours>=19){
        back="https://i.imgur.com/dpqZJV5.jpg";
        console.log(hours)}

        else{
        back="https://nexusmedianews.com/wp-content/uploads/2019/12/sunrise-3533173_1920.jpg";console.log(hours)}

        if(hours>12)
        {
        hours=hours-12;
        a="PM"
        
      
        }
        else
        {
          a="PM"
       
        }

        
        if(minute<10)
        minute=0+""+minute

        today=today.toString();
        today=today.split(" ");
        var m="";
        switch(d)
        {
        case 1:
           m="Monday";
          break
        case 2:
           m="Tuesday";
          break
          case 3:
           m="Wednesday";
          break
        case 4:
           m="Thursday";
          break
          case 5:
           m="Friday";
          break
        case 6:
           m="Saturday";
          break
          case 7:
           m="Sunday";
          break
          default:
           m="";
          }

        //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var date=m+" , "+today[1]+" "+today[2];
          var time=hours+":"+minute;

      
        // Setting up state
        this.state = {city:undefined,temperature:undefined,type:undefined,currentDate: date,tp:time,ap:a,bg:back}
        console.log(this.state.bg)
       }
    
  
         changestate(value){
        
         this.setState({
          city: value,
          
          

         });
         }
      
        changecity(newc)
        {
        
          // let dataq=undefined;
         newc.preventDefault();
         const nc=newc.target.parentElement.offsetParent.childNodes[1].parentElement.childNodes[0].value;
        console.log(nc)
       

        fetch("http://api.openweathermap.org/data/2.5/weather?q="+nc+",India&APPID=9a00a6a57a3f03e78f3d4abb7c0e6f3f")
        .then(responseq=>responseq.json())
        .then(dataq=>{console.log(dataq);
         if(dataq.cod===404)
         {
           this.setState({
             
             temperature:""
             
   
            });
         }
         else{
         this.setState({
           city: dataq.name,
           temperature:Math.round(dataq.main.temp-273),
           type:dataq.weather[0].main
           
 
          });
        }})   
       }
      



        
       



         render()
        {
        return(
<div className="container-fluid outer">   <div className="container-fluid outer">  
       
 




<div className="container-fluid outer">
  
<center>
       

<h1 className="heading">Weather App</h1>
 </center> 
         <div class="input-group mb-3">
         <input style={{padding:"10px"}}type="text" name="searchcity" className="butt" onChange= {e => this.changestate(e.target.value)} placeholder="Type your city name..."></input>
         <div class="input-group-append">
        <button className="btn btn-warning butt1" onClick= {e => this.changecity(e)}>Search</button>
          </div>
         </div>
            <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
           <div className="row d-flex justify-content-center px-3">

           <div className="card" style={{backgroundImage:"url(" + this.state.bg+ ")"}}>
            <h2 className="ml-auto mr-4 mt-3 mb-0">{this.state.city}</h2>
            <p  className="ml-auto mr-4 mb-0 med-font">{this.state.type}</p>
            <h1 align="center" className="ml-auto mr-4 large-font">{this.state.temperature}&#176;</h1>
           <p align="right"className="time-font mb-0 ml-4 mt-auto">{this.state.tp} <span className="sm-font">{this.state.ap}</span></p>
           <p align="right" className="ml-4 mb-4"> { this.state.currentDate }</p>
    </div>
</div>
</div>
</div>
</div>





</div>








        )



      }
  }
    export default Search
