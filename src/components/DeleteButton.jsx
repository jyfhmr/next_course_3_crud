import React from 'react'
import Link from "next/link"
export default function DeleteButton({ userid }) {


    return (
            <Link href={`delete/${userid}`} style={{ textDecoration: "underline", color: "red" }}>
                Borrar
            </Link>
    )
}
