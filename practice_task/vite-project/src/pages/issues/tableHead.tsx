import { TableCell, TableHead, TableRow } from "@mui/material";

export default function TableTHeadComp(props:any) {
    return (
        <TableHead>
            <TableRow key={1}>
                {props.columns.map((c:string) => (
                    <TableCell key={c}>
                        {c}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}