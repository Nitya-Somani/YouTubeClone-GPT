import { Comment } from "../../componentsIndex";

const CommentList = ({ commData }) => {
  return (
    <>
      {commData.map((comm, index) => (
        <>
          <Comment key={index} commDetails={comm} />
          <div className="border-l-4  border-l-black ml-12 ">
            <CommentList commData={comm.replies} />
          </div>
        </>
      ))}
    </>
  );
};
export default CommentList;
