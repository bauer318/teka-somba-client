import axios from "axios";
const baseUrl = 'http://localhost:8081/api/product';

const isContainsBuyer = async (productId, buyerId)=>{
    try{
        const response = await axios.get(`${baseUrl}/contains/${productId}/${buyerId}`);
        return response;
    }catch(error){
        console.log(error.response);
    }
}

export default {isContainsBuyer};