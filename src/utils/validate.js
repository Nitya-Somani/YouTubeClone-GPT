const checkValidateData = (email, password)=>{
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//const isNameValid =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password is not valid";
//if(!isNameValid) return "Name is not valid";

return null;

};

export default checkValidateData;