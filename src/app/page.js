import { Space, Table, Tag } from 'antd';


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

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}
