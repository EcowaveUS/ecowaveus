import React from 'react';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { sidebarData } from '../../constants/data';
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
            {sidebarData.map((item, index) => {
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

