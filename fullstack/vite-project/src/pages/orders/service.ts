import axios from "axios";

export async function Sendtoapiorders() {
    const url = `http://localhost:3500/orders-full-data`;
      const response = await axios.get(url);
     
      
      return response;
     }
