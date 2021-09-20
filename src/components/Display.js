import React from 'react'
import { useSelector } from 'react-redux'

function Display() {
    const select = useSelector(state=>state.contactDetails.contactList)
    return (
        <div>
            {select.map((e)=>{
                return (
                    <div key={e.id} >{e.firstName}</div>
                )
            })}
        </div>
    )
}

export default Display
