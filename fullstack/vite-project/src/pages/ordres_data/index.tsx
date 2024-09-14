import { useEffect, useState } from "react"

import lodash from "lodash"
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { TextField } from "@mui/material";
import { Sendtoapiorders } from "./service";



export function Status() {
    
    const [orders, setorders] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(true)
    const [inputValue, setInputValue] = useState<string>("")
    

    useEffect(() => {
        let isSetState = true
        async function searchstatus() {
            try {
                setIsLoading(true)
                const status:any = await Sendtoapiorders(inputValue)
                if (isSetState) {
                    setorders(status.data)
                }

            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (inputValue) {
            searchstatus()
        }
        return () => {
            isSetState = false;
        }
    }, [inputValue])




    
    
    const columns: GridColDef[] = orders.length > 0
    ? Object.keys(orders[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 150,
      }))
    : [];
        
    const searchHandler = lodash.debounce(function (e) {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }, 500)


 
    return (
        <div>
          <TextField
            onChange={searchHandler}
            placeholder="search"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          {isLoading ? (
            <h2>Loading..</h2>
          ) : (
            <div>
              <DataGrid 
                sx={{ overflowX: 'hidden' }}
                rows={orders}
                columns={columns}
              />
            </div>
          )}
        </div>
      )}
