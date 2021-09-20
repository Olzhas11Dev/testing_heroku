import axios from 'axios'
import {getToList} from './features/contactSlice'


export const sendToList = async (inputs,dispatch)=>{                                
    try{
       const res = await axios.post('http://localhost:3000/contactData',inputs);   
      if(res.data){
         axios.get('http://localhost:3000/contactData').then ((response)=>{
            dispatch(getToList(response.data))
        })
      }
    } catch (error){
        console.log(error)
    }
}

