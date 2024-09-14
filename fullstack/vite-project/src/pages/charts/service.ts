import axios from "axios";

export async function Sendtoapireport() {
    const url = `http://localhost:3500/report`;
    console.log(url);
    
      const response = await axios.get(url);
     
      
      return response;
     }




