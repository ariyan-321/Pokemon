import { createBrowserRouter } from "react-router-dom";
import MainHome from "../Pages/MainHome";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainHome></MainHome>,
    children:[{
      path:"/",
      element:<Home></Home>
    }]
  },
]);

export default router;
