import { HomeIcon, IdentificationIcon, NewspaperIcon, PhotographIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import 
const checkWidth = "w-7"
function checkIcon(name) {
  switch (name) {
    case "Home":
      return (<HomeIcon className={checkWidth} />)
    case "Products":
      return (<ShoppingCartIcon className={checkWidth} />)
    case "Gallery":
      return (<PhotographIcon className={checkWidth} />)
    case "Blog":
      return (<NewspaperIcon className={checkWidth} />)
    case "About Us":
      return (<UserGroupIcon className={checkWidth} />)
    case "Contact Us":
      return (<IdentificationIcon className={checkWidth} />)
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
