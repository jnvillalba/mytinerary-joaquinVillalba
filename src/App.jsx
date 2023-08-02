import "./App.css";
import HomePage from "./pages/HomePage";
import SingUpPage from "./pages/SingUpPage";
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path:'/', element: <HomePage /> },
  { path:'/sing-up', element: <SingUpPage/> },
])

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
