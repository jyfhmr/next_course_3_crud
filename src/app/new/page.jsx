"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
export default function Page() {

    const router = useRouter()

    const [name,setName] = useState("")
    const [last_name,setLast_Name] = useState("")
    const [age,setAge] = useState("")

    const data = {
        name: name,
        last_name: last_name,
        age: age
    };

    return (
        <>
            <div>Formulario de tareas</div>

            <div>
                <input type='text' style={{ outline: "2px solid black" }} placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <input type='text' style={{ outline: "2px solid black" }} placeholder='Last Name' onChange={(e) => { setLast_Name(e.target.value) }} />
            </div>
            <div>
                <input type='text' style={{ outline: "2px solid black" }} placeholder='Age' onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div>
                <button onClick={() => {
                    fetch('/api/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(data => console.log("LA DATA RECIBIDA EN EL BOTON, CREADO", data), router.push("/"))
                    .catch(error => console.error('Error:', error));
                }}>Crear Datos</button>
            </div>
        </>
    )
}
