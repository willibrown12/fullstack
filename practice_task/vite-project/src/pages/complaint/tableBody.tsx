
import { TableBody, TableCell, TableRow } from "@mui/material";
import { RowType } from ".";


export default function TableBodyComp(data:any) {
    console.log(data);
    
    return (
        <TableBody>
            {data.data.map((row:RowType)=>(
                <TableRow
                key={row.id}>
                {Object.values(row).map((c:any) => (
                    <TableCell
                    key={c}>
                        {c}
                    </TableCell>
                ))}
            </TableRow>

            ))}
            
        </TableBody>
    );
}




