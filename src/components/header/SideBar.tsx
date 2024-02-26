import React from 'react';
import { SidebarData } from './SideBarData';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import './sidebar.css'


interface MenuComponentProps {
  showSidebar: () => void,
  sidebar: boolean
}

export const SideBar: React.FC<MenuComponentProps> = ({
  showSidebar,
  sidebar
}) => {

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose color='#B5B5B5' />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

