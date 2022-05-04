import React from 'react'
import Clientes from './Clientes/Clientes';
import Contato from './Contato/Contato';
import Projetos from './Projetos/Projetos';
import UserExperience from './UserExperience';
import UserProfile from './UserProfile';
import Navbar from './../Navbar';

const User = ({color, theme}) => {
  return (
    <>  
     <Navbar color={color} theme={theme}/>
      <UserProfile color={color}/> 
      <UserExperience color={color} />
      <Projetos color={color}/>
      <Clientes color={color}/>
      <Contato color={color}/>
    </>
  )
}

export default User;