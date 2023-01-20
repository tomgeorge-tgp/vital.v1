import React from 'react';
import {useState,useEffect} from "react";
import {Link,Navigate,useNavigate} from "react-router-dom"
import "./style/loginSetUpPage.css"
import Header from '../components/HeaderBar'

function LoginSetUpPage(){

  const navigate = useNavigate();
  const [userMode,setUserMode]=useState("");

  return (
    <>
      <div className="login1-container">
        <div className="login1-container1">
          <Header rootClassName="header-root-class-name4"></Header>
          <div className="login1-container2"></div>
          <div className="login1-container3"></div>
          <span className="login1-text">Hi , let’s check your vitals!</span>
          <div className="login1-html-node">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="22" cy="22" r="22" fill="#E6F3F9" />\r\n    <path\r\n        d="M32.8298 12.5993H31.6728V13.7562C31.6728 14.0668 31.5496 14.3644 31.33 14.584C31.1104 14.8036 30.8125 14.9268 30.5022 14.9268C30.1918 14.9268 29.894 14.8036 29.6744 14.584C29.4547 14.3644 29.3315 14.0668 29.3315 13.7562V12.5993H28.1746C27.8659 12.5993 27.5698 12.4775 27.3507 12.2603C27.1315 12.0432 27.0069 11.7483 27.0039 11.4396C27.0039 11.1293 27.1271 10.8314 27.3467 10.6118C27.5664 10.3922 27.8642 10.269 28.1746 10.269H29.3315V9.11207C29.3315 8.80169 29.4547 8.50385 29.6743 8.28425C29.894 8.06462 30.1918 7.94141 30.5021 7.94141C30.8125 7.94141 31.1104 8.06462 31.33 8.28425C31.5496 8.50388 31.6728 8.80172 31.6728 9.11207V10.269H32.8297C33.1401 10.269 33.4379 10.3922 33.6575 10.6118C33.8772 10.8315 34.0004 11.1293 34.0004 11.4396C33.9974 11.7483 33.8727 12.0432 33.6536 12.2603C33.4345 12.4775 33.1384 12.5993 32.8297 12.5993H32.8298Z"\r\n        fill="#8DC1D6" />\r\n    <path\r\n        d="M13.8159 29.113C13.8144 29.0874 13.8144 29.0616 13.8159 29.036C13.9757 25.488 17.5923 22.6341 21.2806 22.6341C24.9689 22.6341 29.2358 25.4878 29.3843 29.0436C29.3868 29.0665 29.3868 29.0896 29.3843 29.1125V31.9994H31.982L31.9818 29.1262C31.9813 28.9957 31.9665 28.8653 31.9377 28.7379C31.632 24.9668 28.2191 21.8153 24.451 20.5869C25.5686 19.6772 26.2577 18.3442 26.3543 16.9064C26.4507 15.4688 25.9458 14.0554 24.96 13.0045C23.9743 11.9536 22.5965 11.3591 21.1555 11.3633C19.7145 11.3675 18.3402 11.97 17.3607 13.0269C16.3811 14.0837 15.8845 15.4998 15.9895 16.9369C16.0946 18.3742 16.7918 19.7031 17.9145 20.6064C14.3914 21.8543 11.5076 25.0137 11.2456 28.7574V28.7571C11.2201 28.8786 11.207 29.0023 11.207 29.1263V31.9994H13.8017L13.8159 29.113ZM21.1817 13.9632C21.8765 13.9603 22.5438 14.234 23.0364 14.7242C23.5288 15.2141 23.806 15.8798 23.8067 16.5747C23.8074 17.2695 23.5317 17.9357 23.04 18.4269C22.5486 18.9178 21.8819 19.193 21.1871 19.1915C20.4926 19.1901 19.8268 18.9122 19.3373 18.419C18.8479 17.9259 18.5749 17.2584 18.5786 16.5636C18.5786 15.8723 18.8526 15.2089 19.3403 14.719C19.8282 14.2291 20.4903 13.9524 21.1817 13.9494L21.1817 13.9632Z"\r\n        fill="#8DC1D6" />\r\n</svg>',
              }}
            />
          </div>
          {/* <span className="login1-text1">New user setup</span> */}
          <span className="login1-text1"><button className="login1-text1-button"
          onClick={() =>setUserMode("newUser")}
          >New user setup</button>
          </span>
          <span className="login1-text2"><button className="login1-text2-button"
          onClick={() =>setUserMode("existingUser")}
          >Existing user login</button></span>
          <div className="login1-html-node1">
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n    <circle cx="22" cy="22" r="22" fill="#E6F3F9" />\r\n    <path\r\n        d="M13.8159 29.113C13.8144 29.0874 13.8144 29.0616 13.8159 29.036C13.9757 25.488 17.5923 22.6341 21.2806 22.6341C24.9689 22.6341 29.2358 25.4878 29.3843 29.0436C29.3868 29.0665 29.3868 29.0896 29.3843 29.1125V31.9994H31.982L31.9818 29.1262C31.9813 28.9957 31.9665 28.8653 31.9377 28.7379C31.632 24.9668 28.2191 21.8153 24.451 20.5869C25.5686 19.6772 26.2577 18.3442 26.3543 16.9064C26.4507 15.4688 25.9458 14.0554 24.96 13.0045C23.9743 11.9536 22.5965 11.3591 21.1555 11.3633C19.7145 11.3675 18.3402 11.97 17.3607 13.0269C16.3811 14.0837 15.8845 15.4998 15.9895 16.9369C16.0946 18.3742 16.7918 19.7031 17.9145 20.6064C14.3914 21.8543 11.5076 25.0137 11.2456 28.7574V28.7571C11.2201 28.8786 11.207 29.0023 11.207 29.1263V31.9994H13.8017L13.8159 29.113ZM21.1817 13.9632C21.8765 13.9603 22.5438 14.234 23.0364 14.7242C23.5288 15.2141 23.806 15.8798 23.8067 16.5747C23.8074 17.2695 23.5317 17.9357 23.04 18.4269C22.5486 18.9178 21.8819 19.193 21.1871 19.1915C20.4926 19.1901 19.8268 18.9122 19.3373 18.419C18.8479 17.9259 18.5749 17.2584 18.5786 16.5636C18.5786 15.8723 18.8526 15.2089 19.3403 14.719C19.8282 14.2291 20.4903 13.9524 21.1817 13.9494L21.1817 13.9632Z"\r\n        fill="#8DC1D6" />\r\n</svg>',
              }}
            />
          </div>
          {userMode==="newUser" ?(<Link to="/signUpForm" className="login1-navlink button">
            Continue
          </Link>):(<Link to="/loginForm" className="login1-navlink button">
            Continue
          </Link>)

          }
          
        
          <button className="login1-button button"
          onClick={(e)=>{
            if(userMode=="newUser")
            {
              navigate("/dashboard"); 
            }
            else{
              navigate("/"); 
            }
            
            }}>Continue as guest</button>
        </div>
      </div>
     
    </>
  )
}

export default LoginSetUpPage;