import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Footer from "./Footer";

const MainContainer = () => {
  const sideBarToggle = useSelector((store) => store.app.isMenuOpen);
  const mainClass = `${
    sideBarToggle ? "absolute left-56 ml-8 bg-white " : "absolute left-12 ml-8"
  }`;

  return (
    <div className={mainClass} >
      <ButtonList />
      <VideoContainer />
      <Footer/>
    </div>
  );
};

export default MainContainer;
