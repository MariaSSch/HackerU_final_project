import React, { useEffect, useState } from 'react'
import MenuBar from '../../UI/MenuBar/MenuBar'
import s from "./Nav.module.sass"
import { useDispatch } from 'react-redux';
import { scroll } from '../../../store/reducer';


export default function Nav() {
  let [menu, setMenu] = useState(false);
  
  const dispatch = useDispatch();
  
  const shiftMenu = () => setMenu(() => menu ? menu = !menu : menu);
  const nav_class = s.nav;
  const nav_class_shift = s.nav + " " + s.active;

  const windowWidth = ()=> {
    if (document.documentElement.clientWidth > 1100 && menu) {
      menu = !menu
  }
  setMenu(menu);
}

  useEffect(()=>{
    window.addEventListener("resize", windowWidth);
}
  )

  return (
    <>
      <nav className={(menu ? nav_class_shift : nav_class)} id="nav">
          <a onClick={()=> {shiftMenu(); dispatch(scroll("#authorsBook"))}} href="#authorsBook">Home</a>
          <a onClick={()=> {shiftMenu(); dispatch(scroll("#author"))}} href='#author'>About</a>
          <a onClick={()=> {shiftMenu(); dispatch(scroll("#partners"))}} href='#partners'>Pages</a>
          <a onClick={()=> {shiftMenu(); dispatch(scroll("#contacts"))}} href='#contacts'>Contact Us</a>
      </nav>
      <MenuBar onClick={() => setMenu(()=> menu = !menu)} />
    </>
  )
}
