import React from "react";
import { faPlay, faCircleInfo, FontAwesomeIcon } from "../../../assests/FontAwesomeIcons/FontIcons";

const VideoTitle = ({ title, overview }) => {
  
    return (
        <div className={`absolute w-full aspect-video text-white pt-[25%] pl-[5%] bg-gradient-to-r from-black`}>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 p-3">{title}</h1>
         
            <div className="flex space-x-4">    
                <button className="bg-white hover:bg-opacity-80  text-black px-8 py-3 rounded-lg focus:outline-none focus:shadow-outline-blue flex items-center ">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Play
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg focus:outline-none focus:shadow-outline-gray flex items-center">
                    <FontAwesomeIcon icon={faCircleInfo} className="mr-2 " title={overview}/>
                    More Info
                    
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
