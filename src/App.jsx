import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Layout from "./component/Layout/Layout"
import Start from "./component/Start/Start"
import About from "./component/About/About"
import Portofolio from "./component/Portofolio/Portofolio"
import Contact from "./component/Contact/Contact"

function App() {
  const myRouter = createBrowserRouter(
    [{
      path:"/", element: <Layout />, children: [
        { path: "/",element:<Start />},
        { path: "/about", element: <About /> },
        { path: "/portofolio", element: <Portofolio /> },
        { path: "contact", element: <Contact /> },]
    }]
  )

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
