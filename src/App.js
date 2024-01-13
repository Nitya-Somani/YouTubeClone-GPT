import "./index.css";
import { Provider } from "react-redux";
import store from '../src/store/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {useFetchVideos} from "./utils/customHooks/hooksIndex";
import {Body, Login, Shimmer, Watch, MainContainer, Error ,BrowseTv} from './components/componentsIndex';


function App() {
  const videos = useFetchVideos();

  if (videos === null) return <Shimmer />;

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
      },
      {
        path: "/oops",
        element: <Error />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
