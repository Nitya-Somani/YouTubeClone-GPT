import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChatMessage } from "../../componentsIndex";
import { addMessage } from "../../../StoreSlices/chatSlice";
import { generateRandomName, makeRandomMessage } from "../../../utils/helperFunctions/chathelperFunction";

const ChatBox = () => {
  const dispatch = useDispatch();
  const chatMsg = useSelector((store) => store.chat.message);
  const [liveMsg,setLiveMsg] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({ name:  generateRandomName(), message:  makeRandomMessage() })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  const theme = useSelector((store) => store.theme.isDarkTheme);
  const color = theme ? "text-white" : "text-black";
  return (
    <>
    <h1 className={`font-bold ml-2 mb-2 ${color} `}>Live Chat 💬</h1>
    <div
      className={`${color} p-2 ml-2 border border-gray-500 w-[120%] h-[490px] rounded-t overflow-y-scroll flex flex-col-reverse `}
    >
      
      
     
      {chatMsg.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
     
     
    </div>
     <form className="w-[120%] p-2 border ml-2 border-gray-500  rounded-b flex" onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Nitya Somani",
        message:liveMsg
      }))
      setLiveMsg("")
     }}>
     <input className="w-[100%] flex-grow p-2 mr-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 " 
     type="text"
     placeholder="Type your message..."
     value = {liveMsg}
     onChange = {(e)=>{
     setLiveMsg(e.target.value) 
     }}
     />
     <button className=" mx-2  px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Send</button>
   </form>
   </>
  );
};

export default ChatBox;
