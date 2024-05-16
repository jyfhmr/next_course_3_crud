import { Table } from 'antd';
import "./tableStyles.css"
import EditBtn from "@/components/EditButton"
import DeleteButton from '@/components/DeleteButton';
import CreateButton from "@/components/CreateButton"



const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last_Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: 'ActionEdit',
    key: 'action_edit',
    dataIndex: "action_edit"
  },
  {
    title: 'ActionDelete',
    key: 'action_delete',
    dataIndex: "action_delete"
  },
];

async function getUsers() {
  const fetchedData = await fetch("http://localhost:3000/api/tasks", {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  const data = await fetchedData.json()

  return data
}

export default async function Home() {



  const data = await getUsers()

  console.log("data from getUsers en home", data)

  data.map((son) => { son.key = son.id }) //agrega el key a la data

  data.map((son) => { son.action_edit = "Editar" })

  data.map((son) => { son.action_delete = "Borrar" })

  console.log("data afeter key", data)

  return (
    <>
      <div>
        {/*<Table style={{ width: "50%", margin: "auto", marginTop: "10vh", outline: "2px solid black" }} dataSource={data} columns={columns} />*/}
      </div>


      <div className='table'>
          <div className='tableRow'>
               <div className='tableChild'>Id</div>
               <div className='tableChild'>Name</div>
               <div className='tableChild'>LastName</div>
               <div className='tableChild'>Age</div>
               <div className='tableChild'>Btn1</div>
               <div className='tableChild'>Btn2</div>
          </div>
        {data.map((user) => {
          return <div className='tableRow' key={user.id}>
            <div className='tableChild' >{user.id}</div>
            <div  className='tableChild'>{user.name}</div>
            <div className='tableChild'>{user.last_name}</div>
            <div className='tableChild' >{user.age}</div>
            <div className='tableChild' ><EditBtn userid={user.id}/></div>
            <div  className='tableChild'><DeleteButton userid={user.id}/></div>
          </div>
        })}
      </div>

       <CreateButton/>
  

    </>
  );
}
