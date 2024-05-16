"use client"

import { useRouter } from 'next/navigation'




function deleteUser(idUser){
    const router = useRouter()

    fetch('/api/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:idUser})
    })
    .then(response => response.json())
    .then(data => console.log("DELETED: ",data), setTimeout(()=>{router.push("/")},1500))
    .catch(error => console.error('Error:', error));
}

export default function Page(props) {
    
    deleteUser(props.params.userID)
    
    return (
       <div>
        Borrando . . . {props.params.userID}       
        </div>
    )
}
