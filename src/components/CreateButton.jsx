"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import { FloatButton } from 'antd';
const App = () => {

    const router = useRouter();

    return <FloatButton onClick={() => 
        {
           
            console.log('onClick'), 
            console.log(2)
            router.push("/new")
        }}  />


}


export default App;