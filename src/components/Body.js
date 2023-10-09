import React from 'react';
import Sidebar from './SideBar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className=' grid grid-flow-col '>
    <Sidebar/>
    <MainContainer/>
    </div>
  )
}

export default Body