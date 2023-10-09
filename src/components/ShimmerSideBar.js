import React from 'react';
import ShimmerSideBarUl from './ShimmerSideBarUl';

const ShimmerSideBar = () => {
  return (
     <aside className="bg-gray-900 text-white w-64 p-4 h-screen fixed top-18 left-0 overflow-y-auto">
      <div className="animate-pulse">
       <ShimmerSideBarUl/>
        <hr className="my-4 border-t border-gray-800" />
        <ShimmerSideBarUl/>
        <hr className="my-4 border-t border-gray-800" />
        <div className="text-gray-500"></div>
        <ShimmerSideBarUl/>
      </div>
    </aside>
  )
}

export default ShimmerSideBar