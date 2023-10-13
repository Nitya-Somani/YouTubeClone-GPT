import React from 'react';
import ShimmerHeader from "./ShimmerHeader";

import ShimmerSideBar from './ShimmerSideBar';

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