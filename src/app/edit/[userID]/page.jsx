"use client"
import React, { useState } from 'react';
import Link from "next/link"
import { useRouter } from 'next/navigation'
export default function Page(props) {
    


    const [name,setName] = useState("")
    const [last_name,setLast_Name] = useState("")
    const [age,setAge] = useState("")

    const data = {
        id:  props.params.userID,
        name: name,
        last_name: last_name,
        age: age
    };

    const router = useRouter()

    
    return (
        <>
            <div>

               <div>
                Editar
               </div>
               <div>
                    <input type='text' style={{outline: "2px solid black"}} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
               </div>
               <div>
                    <input type='text' style={{outline: "2px solid black"}} placeholder='Last Name' onChange={(e)=>{setLast_Name(e.target.value)}}/>
               </div>
               <div>
                    <input type='text' style={{outline: "2px solid black"}} placeholder='Age' onChange={(e)=>{setAge(e.target.value)}}/>
               </div>
               <div>
                   <button onClick={()=>{fetch('/api/edit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log("LA DATA RECIBIDA EN EL BOTON",data), router.push("/"))
.catch(error => console.error('Error:', error));
}}>Actualizar datos</button>
               </div>

                <Link href={"/"}>Volver al inicio</Link>

                {props.params.userID}
            </div>
        </>
    )
}
