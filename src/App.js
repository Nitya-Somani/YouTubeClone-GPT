import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
           <Header /> 
         
          <Body />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
