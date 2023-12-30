import React from 'react';
import {ShimmerHeader,ShimmerSideBar} from '../componentsIndex'

const Shimmer = () => {
  return (
    <div>
        <ShimmerHeader />
        <div className={`flex`}>
      <ShimmerSideBar />
    </div>
      
    
    
    </div>
  )
}

export default Shimmer