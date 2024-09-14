import { useEffect, useState } from "react"


import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Sendtoapiorders } from "./service";



export function Orders() {
    
    const [orders, setorders] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(true)
  
    

    useEffect(() => {
        async function getCustomers() {
            try {
                setIsLoading(true)
                const result:any = await Sendtoapiorders();
                setorders(result.data)
              
                
                
                
            } catch (error) {
               
            } finally {
                setIsLoading(false)
            }
        }
        getCustomers()
    }, [])




    
    
    const columns: GridColDef[] = orders.length > 0
    ? Object.keys(orders[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 150,
      }))
    : [];
        
          


 
    
    if (isLoading) return <h2>Loading..</h2>
    return <div>
    <DataGrid 
    sx={{ overflowX: 'hidden' }}
      rows={orders}
      columns={columns}
    />
 </div>
}