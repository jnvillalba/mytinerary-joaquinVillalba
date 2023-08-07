import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path:'/', element: <HomePage /> },
  { path:'/sign-up', element: <SignUpPage/> },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
