import React from "react";
import CartWidget from "./CartWidget"; 
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


const NavBar = () => {

return (
    <header>
     <nav>   
     <ul>
    <li >
      <a class="nav-link active" aria-current="page" href="#">PATITAS - PET SHOP</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">ALIMENTOS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">ACCESORIOS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href='#'>SERVICIOS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">REGISTRATE</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">SING IN</a>
    </li>
    
      </ul>

    <Badge>CartWidget </Badge> 

  </nav>
   
  
     </header>     
 
   );
 }
 
 export default NavBar;
 