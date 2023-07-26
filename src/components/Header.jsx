import React, { useContext, useState } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import youtubeLogo from "../images/youtube-logo.svg"
import { Avatar, Input } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

import { Link, useNavigate } from 'react-router-dom';

import SideBar from './SideBar';
import { Context } from '../context/context';
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
const {mobileMenu,setMobileMenu}=useContext(Context)
 

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
      if (
          (event?.key === "Enter" || event === "searchButton") &&
          searchQuery?.length > 0
      ) {
          navigate(`/searchResult/${searchQuery}`);
      }
  };

 


  
  return (
    <>

    <div className='flex  justify-between sticky top-0 z-20 bg-white '>
     <div className='flex items-center '>
         {mobileMenu && <MenuOutlinedIcon/>}
      
{/*     
    {showSidebar && <SideBar />} */}
    <Link to="/">
    <img  className=" w-[50%] md:h-[40px] mr-0 md:w-48  mt-0" src={youtubeLogo} alt="youtube logo" />
    </Link>
     
     </div>
      
      <div  className='flex items-center  md:p-2 border-solid p-0 md:w-[40%] ' >
      <input type='text' placeholder='Search' className='md:p-2 rounded-l-2xl rounded-r-sm outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[600px]  border border-l-0 '
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyUp={searchQueryHandler}
     
      value={searchQuery}
      
      />
   
                     <button 
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0  rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <SearchOutlinedIcon className=' p-2  bg-[#fafafa] 'fontSize='large'   />
                </button>
 
      </div>
     <div className=' flex items-center '>
     <div className="hidden md:block">
     <VideoCallOutlinedIcon className='md:mr-5'/>
     <NotificationsIcon className='md:mr-5'/>
     </div>
     
     <Avatar className='mr-0 md:mr-2' color="warning" >P</Avatar>
     </div>
     
    </div>
    </>
  )
}

export default Header
