import { useEffect, useState } from "react"

import lodash from "lodash"


import { Checkbox, FormControlLabel, Table, TableContainer, TextField } from "@mui/material";
import { IssueUI, SendtoapiIssues, SendtoapiSearch } from "./service";


import Paper from '@mui/material/Paper';
import TableTHeadComp from "./tableHead";
import TableBodyComp from "./tableBody";
import { Button } from "react-bootstrap";
export type RowType = {
  id: number,
  "tenant Id": number
  description: string,
  "category Id": string,
  "created At": string
  category: string,
  floor: number,
 "full Name": string
}



export function Issues() {





  const [issues, setIssues] = useState<Array<IssueUI>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [checked, setChecked] = useState(true);
  const [inputValue, setInputValue] = useState<string>("")


  useEffect(() => {
    let isSetState = true
    async function searchstatus() {
      try {
        setIsLoading(true)
        const status: any = await SendtoapiIssues()

        if (isSetState) {
          setIssues(status)
        }

      } catch (error) {
        alert(error)
      } finally {
        setIsLoading(false)
      }
    }
    searchstatus()
    return () => {
      isSetState = false;
    }
  }, [])


  const searchHandler = lodash.debounce(function (e) {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }, 500)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };






  function createData(
    id: number,
    tenantId: number,
    description: string,
    categoryId: string,
    createdAt: string,
    category: string,
    floor: number,
   fullName: string
  ): RowType {
    return {
      id,
      "tenant Id": tenantId,
      description,
      "category Id": categoryId,
      "created At": createdAt,
      category: category,
       floor: floor,
      "full Name": fullName
    };
  }


  const rows: Array<RowType> = []

  issues?.map((c) => {
    rows.push(
      createData(
        c.id,
        c.tenantId,
        c.description,
        c.categoryId,
        c.createdAt,
        c.category,
        c.floor,
        c.fullName
      )
    )
  });



  return (
    <div>
      <h1>table issues</h1>
      <TextField
        onChange={searchHandler}
        placeholder="search"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <FormControlLabel
         label="filter"
      control={
       <Checkbox
    
      checked={checked}
      onChange={handleChange}
    />}/>
     <Button variant="search" onClick={async () => {
  try {
    const result: any = await SendtoapiSearch(inputValue, checked);
    setIssues(result);
  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}}>search</Button>
  <Button variant="search" onClick={async () => {
  try {
    const result: any = await SendtoapiIssues();
    setIssues(result);
  } catch (error) {
    console.error("Error fetching issues:", error);
  }
}}>reset</Button>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : rows.length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableTHeadComp columns={Object.keys(rows[0])} />
            <TableBodyComp data={rows} />
          </Table>
        </TableContainer>
      ) : (
        <h2>No data available</h2>
      )}
    </div>
  )
}
















