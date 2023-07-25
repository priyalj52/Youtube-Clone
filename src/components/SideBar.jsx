import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/context';
import SideBarRow from './SideBarRow';
import { topics } from '../context/topics';

const SideBar = () => {
 
 
    const {category,setCategory,mobileMenu}=useContext(Context)
    const navigate = useNavigate();
  
    const handleClick = (name, type) => {
       //if type is menu means redirect to main page(/) else change the category
        switch (type) {
            case "categories":
                return setCategory(name);
            case "home":
                return setCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };
    return (
        //mobile menu when true hide the sidebar
      <div className={` flex-0.2 md:block w-[240px] overflow-y-auto h-full py-4  absolute md:relative  translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
    }`}
      
  >
      <div className="flex px-5 flex-col text-black">
          {topics.map((item) => {
              return (
                  <React.Fragment key={item.name}>
                      <SideBarRow
                          text={item.type === "home" ? "Home" : item.name}
                          icon={item.icon}
                          action={() => {
                              handleClick(item.name, item.type);
                              navigate("/");
                          }}
                          className={`${
                              category === item.name
                                  ? "bg-white/[0.15]"
                                  : ""
                          }`}
                      />
                      {item.divider && (
                          <hr className="my-5 border-white/[0.2]" />
                      )}
                  </React.Fragment>
              );
          })}
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">
              Clone by: Priyal Jain
          </div>
      </div>
  </div>
    )
        };

export default SideBar
