import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React,{useEffect,useState} from "react";
import "./WarehouseSign.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { faPhone, faUser, faHome , faLocationArrow, faGlobe, faLeaf, faLock, faImage, faBook, faStore, faShoppingBasket, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";
import ware from "../images/Warehouse_2.jpg"

function WarehouseSign()
{
    const [add,setAdd] = useState('');
    const [num,setNum] = useState(0);
    const [phone,setPhone] = useState('');
    const [currentTab,setCurrentTab] = useState(0);
    const [company,setCompany] = useState('');
    const [city,setCity] = useState('');
    const [dist,setDist] = useState('');
    const [state,setState] = useState('');
    const [storage,setStorage] = useState('');
    const [tonnes,setTonnes] = useState(0);
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const handlePhoneChange=(x)=>{
           setPhone(x);
           return x.length==10 ? false : true;
        }

    const handleCompanyRegister=(x)=>{
           setNum(x);
           return x.length==2 ? false : true;
        }
    
    const myFunction=()=> 
    {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

    // const showTab=(n)=> {
    //   // var x = document.getElementsByClassName("tab");
    //   // x[n].style.display = "block";
    //   if (n == 0) {
    //     document.getElementById("prevBtn").style.display = "none";
    //   } else {
    //     document.getElementById("prevBtn").style.display = "inline";
    //   }
    //   if (n == 2) {
    //     document.getElementById("nextBtn").innerHTML = "Submit";
    //   } else {
    //     document.getElementById("nextBtn").innerHTML = "Next";
    //   }
    //   fixStepIndicator(n)
    // }

    // const nextPrev=(n)=> {
    //   setCurrentTab(currentTab + n);  
    //   // var x = document.getElementsByClassName("tab");
    //   if (n == 1 && !validateForm()) return false;
    //   // x[currentTab].style.display = "none";
    //   if (currentTab == 3) {
    //     document.getElementById("regForm").submit();
    //     return false;
    //   }
    // }

    // const validateForm=()=> {
    //   var x, y, i, valid = true;
    //   x = document.getElementsByClassName("tab");
    //   y = x[currentTab].getElementsByTagName("input");
    //   for (i = 0; i < y.length; i++) {
    //     if (y[i].value == "") {
    //       y[i].className += " invalid";
    //       valid = false;
    //     }
    //   }
    //   if (valid) {
    //     document.getElementsByClassName("step")[currentTab].className += " finish";
    //   }
    //   return valid;
    // }

    // const fixStepIndicator=(n) =>{
    //   var i, x = document.getElementsByClassName("step");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].className = x[i].className.replace(" active", "");
    //   }
    //   x[n].className += " active";
    // }


    useEffect(() => {
        $('.iti__flag-container').click(function() { 
          var countryCode = $('.iti__selected-flag').attr('title');
          var countryCode = countryCode.replace(/[^0-9]/g,'')
          $('#phone').val("");
          $('#phone').val("+"+countryCode+" "+ $('#phone').val());
       });
         
         console.log(currentTab);
    }, [currentTab])

    return(

        <div>
            <div className="main">
<section className="signup">
    <div className="container">

        <div className="signup-content">

            <div className="signup-form">

                <h2 className="form-title">Sign up</h2>
                <form method="POST" className="register-form" id="regForm">
                   
                    
                    <div className="form-group">
                        <label htmlFor="Company Name"><FontAwesomeIcon icon={faUser}/></label>
                        <input type="text" name="name" id="name" value={company!==""?company:""} placeholder="Company Name" onInput={(e)=>{setCompany(e.target.value)}} required/>
                    </div>
                    <div className="form-group">
                         <label htmlFor="Phone"><FontAwesomeIcon icon={faPhone}/></label>
                        <IntlTelInput
                              id="phone"
                              name="phone"
                              pattern="/^-?\d+\.?\d*$/"
                              preferredCountries={['in']}
                              onPhoneNumberChange={(e)=>{handlePhoneChange(e)}}
                              />
                    </div>
                    <div className="form-group">
                        <label htmlFor=" WareHouse Address"><FontAwesomeIcon icon={faHome}/></label>
                        <input type="text" name="address" id="address" value={add!==""?add:""} placeholder="WareHouse Address" onInput={(e)=>{setAdd(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="City"><FontAwesomeIcon icon={faLocationArrow}/></label>
                        <input type="text" name="city" id="city" value={city!==""?city:""} placeholder="City" onInput={(e)=>{setCity(e.target.value)}}  required />
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="District"><FontAwesomeIcon icon={faGlobe}/></label>
                        <input type="text" name="District" id="district" value={dist!==""?dist:""} placeholder="District" onInput={(e)=>{setDist(e.target.value)}} required />
                       
                    </div>
                    <div className="form-group">
                        <label><FontAwesomeIcon icon={faLeaf}/></label>
                        <input list="states" name="state" placeholder="Your State" value={state!=""?state:""} onInput={(e)=>{setState(e.target.value)}}/>
                             <datalist id="states">
                              <option value="Maharashtra"></option>
                              <option value="Goa"></option>
                              <option value="Tamilnadu"> </option>
                              <option value="Karnataka"></option>
                              <option value="Bihar"></option>
                              <option value="Gujarat"></option>
                              <option value="Uttar Pradesh"></option>
                              <option value="Rajasthan"></option>
                             </datalist>
                    
                    </div>
                    <div className="form-group">
                      <label><FontAwesomeIcon icon={faBook}/></label>
                      <input type="Number" className="form-control"  name="user_mob_no" required placeholder="Company Register Number"  pattern="/^-?\d+\.?\d*$/" onKeyPress={(e)=>{handleCompanyRegister(e)}} />
                    </div>
             

               

          
                    <div className="form-group">
                      <label><FontAwesomeIcon icon={faStore}/></label>
                      <input type="text" name="storage capacity" id="storage"  value={tonnes!==0?tonnes:""} placeholder="Storage capacity in tonnes" onInput={(e)=>{setTonnes(e.target.value)}}/>
    
                    </div>
              

                
            
                
                    <div className="form-group">
                        <label htmlFor="Username"><FontAwesomeIcon icon={faPlusCircle}/></label>
                        <input type="text" name="user" id="user" value={user!==""?user:""} placeholder="Your Username" onInput={(e)=>{setUser(e.target.value)}} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass"><FontAwesomeIcon icon={faLock}/></label>
                      <input type="password" value="" id="myInput" placeholder="Your Password" onChange={()=>{}}/> 
                  </div>
                  <div className="form-group">
                      <label htmlFor="re-pass"><FontAwesomeIcon icon={faLock}/></label>
                      <input type="password" name="re_pass" id="re_pass" value="Repeat your password" placeholder="Repeat your password" required />
                  </div>
                    
                    <div className="form-group">
                      
                                <button onClick={()=>{myFunction()}}>Show Password</button>

                    </div>
                    
                     
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                    </div>
             
               

                    <div className="form-group">
                        <input type="button" name="reset" id="prevBtn"  className="form-submit" value="Submit"/>
                                           
                    </div> 
                    
                    <div style={{textAlign:"center",marginTop:"40px"}}>
                        <span className="step"></span>
                        <span className="step"></span>
                        <span className="step"></span>
                    </div>
                </form>
            </div>
            <div className="signup-image">
                <div>
                <figure><img src={ware} alt="sign up image" height="100px"/></figure>
                </div>
               
            </div>
           
        </div>
         
    </div>
</section>

</div>
      </div>
         
    );
}

export default WarehouseSign;