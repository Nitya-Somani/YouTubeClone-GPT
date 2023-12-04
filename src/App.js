import "./App.css";

import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import useFetchVideos from "./utils/useFetchVideos";
import Shimmer from "./components/Shimmer";
import Login from "./components/Login";
import Browse from "./components/Browse";

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
        path: "/Browse",
        element: <Browse />,
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
    ],
    errorElement: <Error />,
  },
]);
export default App;
