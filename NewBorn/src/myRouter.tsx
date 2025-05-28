import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AppLayout from "./Components/AppLayout";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
    ],
  },
]);

export default MyRouter;