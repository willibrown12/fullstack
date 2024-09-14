import { useEffect, useState } from "react"


import { BarChart } from '@mui/x-charts/BarChart';
import { Sendtoapireport } from "./service";




export function Charts() {
    
    const [reports, setreports] = useState<Array<any>>([])
    const [isLoading, setIsLoading] = useState(true)
  
    

    useEffect(() => {
        async function getreports() {
            try {
                setIsLoading(true)
                const reports:any = await Sendtoapireport();
                setreports(reports.data)
              
                
                
                
            } catch (error) {
               
            } finally {
                setIsLoading(false)
            }
        }
        getreports()
    }, [])


    console.log(reports);
    
   const dataforchartname=reports.map(current => {
      return current.employeesfullname
      });

      const dataforchartorders=reports.map(current => {
        return current.orders
        });
if (isLoading) return <h2>Loading..</h2>
    return <div>
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataforchartname,
       
       
       }]}
      series={[{ data: dataforchartorders }]}
      width={1100}
      height={500}
      
    />
 </div>
}