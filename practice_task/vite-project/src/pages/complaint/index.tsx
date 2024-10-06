import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import {  CircularProgress, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { z } from "zod"
import { categoryUI, registerApi, SendtoapiCategory, SendtoapiTenants, tenantsUI } from './service';




const descriptionSchema = z.string().min(3).max(50)


const Complaint = () => {
  
    const [isLoading, setIsLoading] = useState(false)

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState({ isError: false, errorMessage: "" });

    const [category, setcategories] = useState<Array<categoryUI>>([]);
    const [categoryid, setcategoriesPost] = useState("");


    const [tenants, setTenants] = useState<Array<tenantsUI>>([]);;
    const [tenantId, setTenantsPost] = useState("");






    useEffect(() => {
        let isSetState = true
        async function sendtoapi() {
            try {
                setIsLoading(true)
                const status: any = await SendtoapiCategory()
                const status2: any = await SendtoapiTenants()

                if (isSetState) {
                    setcategories(status)
                    setTenants(status2)

                }

            } catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }
        sendtoapi()
        return () => {
            isSetState = false;
        }
    }, [])

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const result = await registerApi({ description, tenantId, categoryid,})
            console.log(result);
            
          
        } catch (error) {
            console.log(error, "error")
            alert(error)
        } finally {
            setIsLoading(false)
        }
        // Handle form submission here, e.g., send data to an API
    };

    function isSubmitDisabled(): boolean {
        if (!description || !categoryid || !tenantId ) {
            return true
        }
        if (descriptionError.isError) {
            return true
        }
        return false;
    }

    function isDescriptionValid() {
        const result = descriptionSchema.safeParse(description);
        if (result.success) {
            setDescriptionError({ isError: false, errorMessage: "" })
        } else {
            const errors = result?.error?.issues.map(e => e.message)
            setDescriptionError({ isError: true, errorMessage: errors.join(", ") })
        }
    }



    const handleChange = (event: SelectChangeEvent) => {
        setcategoriesPost(event.target.value as string);
    };

    const handleChange2 = (event: SelectChangeEvent) => {
        setTenantsPost(event.target.value as string);
    };



    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <TextField style={{width:"1000px"}}  onBlur={isDescriptionValid} helperText={descriptionError.errorMessage} error={descriptionError.isError} label="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      
            
                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoryid}
                        label="category"
                        onChange={handleChange}
                    >
                        {category.map((c) => (
                            <MenuItem key={c.id+"Aaaaaasdasda"} value={c.id}>
                                {c.category}
                            </MenuItem>
                        ))}


                    </Select>
                    <InputLabel id="demo-simple-select-label">tenants names</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tenantId}
                        label="tenants"
                        onChange={handleChange2}
                    >
                        {tenants.map((c) => (
                            <MenuItem key={c.id} value={c.id}>
                                {c.fullname}
                            </MenuItem>
                        ))}


                    </Select>
                
                
      
         
            {isLoading ? <LoadingLogin /> : <Button disabled={isSubmitDisabled()} variant="contained" onClick={handleSubmit} color="primary" type="button">Submit</Button>}


        </form>
        
    );
};

function LoadingLogin() {
    return <span> <CircularProgress /> Please wait ...  </span>
}

export default Complaint;

