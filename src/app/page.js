import { Table } from 'antd';
import { FileAddFilled, DeleteFilled } from '@ant-design/icons';
import { FloatButton } from 'antd';

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
];

async function getUsers() {
  const fetchedData = await fetch("http://localhost:3001/api/tasks")
  const data = await fetchedData.json()

  return data
}

export default async function Home() {

  const data = await getUsers()

  console.log("data from getUsers en home", data)

  data.map((son) => { son.key = son.id })
  console.log("data afeter key", data)

  return (
    <>
      <div>
        <Table style={{ width: "50%", margin: "auto", marginTop: "10vh", outline: "2px solid black" }} dataSource={data} columns={columns} />
      </div>


    

    </>
  );
}
