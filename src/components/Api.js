import axios from "axios"

const baseUrl = 'https://linkdin-project.herokuapp.com'


export const loginUser = async(data)=>{
console.log('Sending data to',data)

    const res = await axios.post(`${baseUrl}/login`,data) ;
    return res ;
}