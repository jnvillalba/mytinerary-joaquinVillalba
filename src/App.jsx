import "./App.css";
import CitiesPage from "./pages/CitiesPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CityDetailsPage from "./pages/CityDetailsPage";
import { useEffect } from "react";
import userActions from "./store/actions/userActions";
import { useDispatch } from "react-redux";
const router = createBrowserRouter([
  { path:'/', element: <HomePage /> },
  { path:'/sign-up', element: <SignUpPage/> },
  { path:'/sign-in', element: <SignInPage/> },
  { path:'/cities', element: <CitiesPage/> },
  { path:'/cities/city/:id', element: <CityDetailsPage/> },
  //En el futuro sera pagina de error
  { path:'*', element: <HomePage /> },
])

function App() {

  const dispath = useDispatch()

  useEffect(() => {
     dispath(userActions.authenticate())
  },[])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
