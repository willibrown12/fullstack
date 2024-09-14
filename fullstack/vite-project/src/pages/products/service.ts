import axios from "axios";

export async function Sendtoapiproducts() {
    const url = `http://localhost:3500/products`;
      const response = await axios.get(url);
     
      
      return response;
     }
