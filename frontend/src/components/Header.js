import React, {useState} from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab} from '@mui/material'
import AddHomeIcon  from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.jpeg'

const Header = () => {
  const [value, setvalue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position='Sticky'>
        <Toolbar>
          <img src={logo} width={75}/>
          <Typography><h4>Counselling and Visitor Management System </h4></Typography>
          <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='primary'value={value} onChange={(e,val)=>setvalue(val)}>
          <Tab LinkComponent={NavLink} to='/signup' label='Sign Up'/>
          <Tab LinkComponent={NavLink} to='/signin' label='Sign in'/>
          <Tab LinkComponent={NavLink} to='/counsellor'label='Add Counsellor'/>
          <Tab LinkComponent={NavLink} to='/appointment'label='Appointment'/>
          <Tab LinkComponent={NavLink} to='/visitor'label='Add Visitor'/>
          <Tab LinkComponent={NavLink} to='/contactpage'label='Contactpage'/>
          <Tab LinkComponent={NavLink} to='/about'label='About'/>
          

           </Tabs>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header