import { HomeIcon, IdentificationIcon, NewspaperIcon, PhotographIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import 
const checkWidth = "w-7"
function checkIcon(name){
  switch (name) {
    case "Home":
      return (<HomeIcon className={checkWidth}/>)
      break;
      case "Products":
        return (<ShoppingCartIcon className={checkWidth}/>)
        break;
      case "Gallery":
        return (<PhotographIcon className={checkWidth}/>)
        break;
      case "Blog":
        return (<NewspaperIcon className={checkWidth}/>)
      break; 
      case "About Us":
        return (<UserGroupIcon className={checkWidth}/>)
      break; 
      case "Contact Us":
        return (<IdentificationIcon className={checkWidth}/>)
      break; 
    default:
      break;
  }
}
export default function ListItems(props) {
  const pageName = props.name;
  return (
      <NavLink 
      to={props.link} 
      className={({ isActive }) =>
                    isActive ? "activeHeaderLink" : "headerLinks"
                }>
      <div className='flex justify-end gap-1 items-end '>
          {/* {checkIcon(pageName)} */}
          <span>{props.name}</span>
      </div>
      </NavLink>
  )
}
