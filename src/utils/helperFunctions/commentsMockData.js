// This is the structure that we need to built a nested comment -
/** const commentsData-structure = [
    {
      name:"Person1",
      text:"some comment text ",
      replies :[
        {
          name:"Person  2 ",
          text:".............",
          replies:[
            {
                
            }
          ]
        }
      ]
    }
  ]**/

  const commentsData = [];

  const generateLongText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  };
  
  for (let i = 0; i < 5; i++) {
    const topLevelComment = {
      name: `Person ${i}`,
      text: generateLongText(),
      replies: [],
    };
  
    for (let j = 1; j <= 4 - i; j++) {
      const nestedCommentLevel2 = {
        name: `Person ${i}_${j}`,
        text: generateLongText(),
        replies: [],
      };
  
      for (let k = 1; k <= 3 - j; k++) {
        const nestedCommentLevel3 = {
          name: `Person ${i}_${j}_${k}`,
          text: generateLongText(),
          replies: [],
        };
  
        for (let l = 1; l <= 2 - k; l++) {
          const nestedCommentLevel4 = {
            name: `Person ${i}_${j}_${k}_${l}`,
            text: generateLongText(),
            replies: [],
          };
  
          for (let m = 1; m <= 1 - l; m++) {
            const nestedCommentLevel5 = {
              name: `Person ${i}_${j}_${k}_${l}_${m}`,
              text: generateLongText(),
              replies: [],
            };
            nestedCommentLevel4.replies.push(nestedCommentLevel5);
          }
  
          nestedCommentLevel3.replies.push(nestedCommentLevel4);
        }
  
        nestedCommentLevel2.replies.push(nestedCommentLevel3);
      }
  
      topLevelComment.replies.push(nestedCommentLevel2);
    }
  
    commentsData.push(topLevelComment);
  }
  
  export default commentsData;
  

