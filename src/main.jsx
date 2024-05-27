import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Playground from './components/Playground';
import Docs from './components/Docs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: "/Playground",
    element: <>
      <Navbar />
      <Playground />
    </>
  },
  {
    path: "/Docs",
    element: <>
      <Navbar />
      <Docs />
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <App />
  </>
)
