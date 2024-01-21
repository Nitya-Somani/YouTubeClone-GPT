const Comment = ({ commDetails }) => {
  return (
    <>
      <div className="flex">
        <img
          className="w-12 h-12 rounded-3xl m-6"
          src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-flat-girl-character-design-free-download-image_2292211.jpg"
          alt="img-icon"
        />
        <div>
          <span className="text-white">{commDetails.name}</span>
          <p className="text-white">{commDetails.text}</p>
        </div>
      </div>
    </>
  );
};
export default Comment;
