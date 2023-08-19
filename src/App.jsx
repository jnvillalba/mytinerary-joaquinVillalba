import "./App.css";
import CitiesPage from "./pages/CitiesPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import CityDetails from "./pages/CityDetails";
const router = createBrowserRouter([
  { path:'/', element: <HomePage /> },
  { path:'/sign-up', element: <SignUpPage/> },
  { path:'/sign-in', element: <SignInPage/> },
  { path:'/cities', element: <CitiesPage/> },
  { path:'/cities/city/:id', element: <CityDetails/> },
  //En el futuro sera pagina de error
  { path:'*', element: <HomePage /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
