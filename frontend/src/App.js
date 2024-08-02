import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.scss"
import SignUp from "./pages/SignUp&Login/SignUp";
import Login from "./pages/SignUp&Login/Login";
import MyProfile from "./pages/MyProfile/MyProfile";
import NotFound from "./pages/404_NotFound_Page/NotFound";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/SuccessPage/Success";
import OrderDetails from "./pages/Order_Details_Page/OrderDetails";

const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/checkout",
        element:<Checkout/>,
      },
      {
        path:"/success",
        element:<Success/>,
      },
      {
        path:"/user/signup",
        element:<SignUp/>,
      },
      {
        path:"/user/login",
        element:<Login/>,
      },
      {
        path:"/user/profile",
        element:<MyProfile/>,
      },
      {
        path:"/user/orders",
        element:<OrderDetails/>,
      },
      {
        path:"*",
        element:<NotFound/>,
      },
    ]
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
