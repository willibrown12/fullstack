
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TemporaryDrawer from './pages/root';
import { Issues } from './pages/issues';
import Complaint from './pages/complaint';



export const routes =[

  { lable:"Issues",
    path: "Issues",
    element: <Issues/>
  },

  {
    lable:"Complaint",
    path: "Complaint",
    element: <Complaint/>
  },
]




const router = createBrowserRouter([
  {
    path: "/",
    element: <TemporaryDrawer/>,
    children: routes,
  },
]);





function App() {
  
  return (
    <>
            <RouterProvider router={router} />
    </>
)

}

export default App
