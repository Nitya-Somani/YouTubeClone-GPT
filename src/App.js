import "./index.css";
import { Provider } from "react-redux";
import store from '../src/store/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Body, Login,  Watch, MainContainer, Error ,BrowseTv} from './components/componentsIndex';


function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/Login",
        element: <Login />,
        errorElement: <Error />,
      },
  
      {
        path: "/",
        element: <MainContainer />,
        errorElement: <Error />,
      },
      {
        path: "/watch",
        element: <Watch />,
        errorElement: <Error />,
      },
      {
        path: "/oops",
        element: <Error />,
        errorElement: <Error />,
      },
      {
        path: "/browseTV",
        element: <BrowseTv />,
        errorElement: <Error />,
      }
  
      
    ],
    errorElement: <Error />,
  },
]);
export default App;
