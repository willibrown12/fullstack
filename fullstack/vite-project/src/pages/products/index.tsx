import { useEffect, useState } from "react"


import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {  Sendtoapiproducts } from "./service";



export function Products() {
    
    const [products, setproducts] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(true)
  
    

    useEffect(() => {
        async function getproducts() {
            try {
                setIsLoading(true)
                const result:any = await Sendtoapiproducts();
                setproducts(result.data)
              
                
                
                
            } catch (error) {
               
            } finally {
                setIsLoading(false)
            }
        }
        getproducts()
    }, [])




    
    
    const columns: GridColDef[] = products.length > 0
    ? Object.keys(products[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 150,
      }))
    : [];
        
          


 
    
    if (isLoading) return <h2>Loading..</h2>
    return <div>
    <DataGrid 
    sx={{ overflowX: 'hidden' }}
      rows={products}
      columns={columns}
    />
 </div>
}