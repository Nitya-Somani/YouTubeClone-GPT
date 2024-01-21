import React from "react";
import commentsData from "../../../utils/helperFunctions/commentsMockData";
import {CommentList} from "../../componentsIndex";

const CommBase = () => {
  return (
    <div className="flex flex-col m-4">
      <h1 className="text-white font-bold text-lg">Comments: </h1>
      <CommentList commData={commentsData} />
    </div>
  );
};

export default CommBase;
