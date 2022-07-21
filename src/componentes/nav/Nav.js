import React from "react";
import "./Nav.css";

export default function Nav(){
  return(
    <nav>
      <ul>
        <li>Diferenciais</li>
        <li>Metodologia</li>
        <li className='bg-btn'>Como estudar?</li>
      </ul>
    </nav>
  )
}