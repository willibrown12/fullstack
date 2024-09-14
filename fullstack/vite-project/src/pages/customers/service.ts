import axios from "axios";

export async function Sendtoapicustomers() {
    const url = `http://localhost:3500/customers`;
      const response = await axios.get(url);
     
      
      return response;
     }
