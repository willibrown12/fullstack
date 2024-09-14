
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TemporaryDrawer from './pages/root';
import { Customers } from './pages/customers';
import { Orders } from './pages/orders';
import { Products } from './pages/products';
import { Status } from './pages/ordres_data';
import { Charts } from './pages/charts';


export const routes =[
  {
    lable:"customers",
    path: "customers",
    element: <Customers/>
  },
  {
    lable:"charts",
    path: "charts",
    element: <Charts/>
  },
  {
    lable:"orders",
    path: "orders",
    element:  <Orders/>
  },
  { lable:"status",
    path: "orders_data",
    element: <Status/>
  },
  { lable:"products",
    path: "products",
    element: <Products/>
  },
  {
    lable:"home",
    path: "home",
    element: <>hey boy</>
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
