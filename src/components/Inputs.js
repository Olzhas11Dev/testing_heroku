import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getToList} from '../features/contactSlice'
import {sendToList} from '../apiCalls'
import axios from 'axios'

function Inputs() {
    const dispatch = useDispatch()
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
   
    useEffect(()=>{
         axios.get('http://localhost:3000/contactData').then ((res)=>{
            dispatch(getToList(res.data))
        })
    },[dispatch])

    const handlerInputs =()=>{
        let inputsObj = {
            id: Math.random(),
            firstName:name,
            email,password
        }
       
        sendToList(inputsObj,dispatch)        
    }
   
    return (
        <div>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='name' value={name}/>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value={email}/>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='name' value={password}/>
            <button onClick={handlerInputs} >Click</button>
        </div>
    )
}

export default Inputs
