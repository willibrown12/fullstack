
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TemporaryDrawer from './pages/root';


export const routes =[
  {
    lable:"customers",
    path: "customers",
    element: <>aaaa</>
  },
  {
    lable:"charts",
    path: "charts",
    element: <>aaaa</>
  },
  {
    lable:"orders",
    path: "orders",
    element: <>aaaa</>
  },
  { lable:"data",
    path: "orders_data",
    element: <>aaaa</>
  },
  { lable:"products",
    path: "products",
    element: <>aaaa</>
  },
  {
    lable:"home",
    path: "home",
    element: <>aaaa</>
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
