import axios from 'axios'
import {getToList} from './features/contactSlice'


export const sendToList = async (inputs,dispatch)=>{                                
    try{
       const res = await axios.post('https://test-react-json.herokuapp.com/contactData',inputs);   
      if(res.data){
         axios.get('https://test-react-json.herokuapp.com/contactData').then ((response)=>{
            dispatch(getToList(response.data))
        })
      }
    } catch (error){
        console.log(error)
    }
}

