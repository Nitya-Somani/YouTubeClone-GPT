import {useSelector} from "react-redux";

const Comment = ({ commDetails }) => {
  const theme = useSelector((store)=>store.theme.isDarkTheme);
  const color = theme ? "text-white" :"text-black"
  return (
    <>
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full m-6"
          src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-flat-girl-character-design-free-download-image_2292211.jpg"
          alt="img-icon"
        />
        <div>
          <span className={color}>{commDetails.name}</span>
          <p className={color}>{commDetails.text}</p>
        </div>
      </div>
    </>
  );
};
export default Comment;
