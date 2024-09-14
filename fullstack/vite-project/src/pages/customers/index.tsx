import { useEffect, useState } from "react"
import { Sendtoapicustomers } from "./service"

import { DataGrid, GridColDef } from '@mui/x-data-grid';


export function Customers() {
    
    const [customers, setCustomers] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(true)
  
    

    useEffect(() => {
        async function getCustomers() {
            try {
                setIsLoading(true)
                const result:any = await Sendtoapicustomers();
                setCustomers(result.data)
                console.log(result.data);
                
                
                
            } catch (error) {
               
            } finally {
                setIsLoading(false)
            }
        }
        getCustomers()
    }, [])




    
    
    const columns: GridColDef[] = customers.length > 0
    ? Object.keys(customers[0]).map((key) => ({
        field: key,
        headerName: key,
        
      }))
    : [];
        
          



    
    if (isLoading) return <h2>Loading..</h2>
    return <div>
    <DataGrid 
   
      rows={customers}
      columns={columns}
      
    />
 </div>
}