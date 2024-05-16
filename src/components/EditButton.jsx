import React from 'react'
import Link from "next/link"
export default function EditBtn({userid}) {
    

    return (
        <Link href={`edit/${userid}`} style={{textDecoration: "underline",color: "blue"}}>
          Editar 
        </Link>
    )
}
