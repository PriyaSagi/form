import React, { Component } from 'react';

class Container extends Component {
    render() {
      return (
          <div>
<div className="f" style={{"height":"637px", "display":"flex", "background-image":"url(images/mac.jpg)"}}>
   
    <div className="bootstrap" style={{"height":"610px", "width":"50%"}}>
        <div className="reg" style={{"height":"50px"}}>
         <h3 style={{"color":"white", "margin-left":"12px", "font-family":"Brush Script MT, Brush Script Std, cursive"}}>register</h3>
          </div>
        <div className="h" style={{"height":"200px"}}></div>
        <div className="registration" style={{"height":"150px"}}>
        <h1 style={{"text-align":"center", "color":"white"}}>Registration Form</h1>
        <p style={{"margin-left":"123px", "color":"white"}}>This is a free responsive registration form made with bootstrap.</p>
 </div>
   </div>
   
   <div className="form" style={{"height":"610px", "width":"44%", "margin-left":"100px"}}>
   <div className="p" style={{"height":"100px", "display":"flex"}}>
      
           <p style={{"margin-left":"200px", "color":"white", "margin-top":"17px"}}>Put some text, links or some icons:</p>
      
            <i className="fa fa-facebook fa-2x" aria-hidden="true" style={{"margin-left":"5px", "color":"white", "margin-top":"15px"}}></i>
            <i className="fa fa-twitter fa-2x" aria-hidden="true" style={{"margin-left":"10px", "color":"white", "margin-top":"15px"}}></i>
           <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{"margin-left":"10px", "color":"white", "margin-top":"15px"}}></i>
           <i className="fa fa-skype fa-2x" aria-hidden="true" style={{"margin-left":"10px", "color":"white", "margin-top":"15px"}}></i>
       
    </div>
   <div className="name" style={{"height":"490px", "width":"70%", "margin-left":"100px"}}>
    <div className="signup" style={{"background-color":"white", "height":"100px", "display":"flex"}}>
        <div className="up" style={{"height":"100px", "width":"80%"}}>
                <h3 style={{"margin-left":"20px"}}>Sign up</h3>
                <p style={{"margin-left":"20px"}}>Fill in th form below to get instant access:</p>
        </div>
      <div className="icon" style={{"height":"100px", "width":"20%"}}>
            <i className="fa fa-pencil fa-4x" aria-hidden="true" style={{"margin-top":"20px", "margin-left":"10px", "color":"rgba(190, 183, 183, 0.836)"}}></i>
      </div>
    </div>
    <div className="formpage" style={{"height":"370px", "background-color":"rgba(255, 255, 255, 0.932)"}}>
        <form action="/action_page.php" style={{"margin-left":"30px"}}>
            <input type="text" name="fname" placeholder="First name" style={{"margin-top":"30px", "padding-right":"170px", "padding-bottom":"10px", "padding-top":"10px"}}/><br/>
            <input type="text" name="lname" placeholder="Last name" style={{"margin-top":"10px", "padding-right":"170px", "padding-bottom":"10px", "padding-top":"10px"}}/><br/>
            <input type="text" name="email" placeholder="Email" style={{"margin-top":"10px", "padding-right":"170px", "padding-bottom":"10px", "padding-top":"10px"}}/><br/>
            <input type="text" name="pwd" placeholder="Password" style={{"margin-top":"10px", "padding-right":"170px", "padding-bottom":"10px", "padding-top":"10px"}}/><br/>
            <input type="text" name="cpwd" placeholder="Confirm Password" style={{"margin-top":"10px", "padding-right":"170px", "padding-bottom":"10px", "padding-top":"10px"}}/><br/>
            <button type="button" className="btn btn-primary btn-lg" style={{"margin-top":"10px"}}>Sign Up!</button>
           <a href="/login"> <button type="button" className="btn btn-primary btn-lg" style={{"margin-top":"10px", "margin-left":"10px"}}>Login</button></a>
            </form>
    </div>
   </div>
   </div>
   
</div>
</div>
);
}
}
export default Container;