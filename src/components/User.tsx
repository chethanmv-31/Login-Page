import { Table, Tag, Space, Avatar, Tooltip } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {EditFilled} from '@ant-design/icons'
const { Column } = Table;



export default function User() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    async function fetchUser() {
      const request = await axios.get("https://reqres.in/api/users?page=1");
      setUser(request.data.data)
      console.log(request.data.data);
  
      return request
  }

    fetchUser();
  },[])

return(
    
  <Table dataSource={user} style={{padding:"40px"}}>
      <Column title="First Name" dataIndex="first_name" key="id" />
      <Column title="Last Name" dataIndex="last_name" key="id" />
      <Column title="Email" dataIndex="email" key="id" /> 
      <Column title="Avatar" dataIndex="avatar"  key="id"  render={(avatar)=>(
        <Avatar src={avatar} />
      )}/> 
       
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Tooltip title="Edit Resource">
        <EditFilled
          style={{ fontSize: '22px', }}
         
        />
      </Tooltip>
      )}
    />
  </Table>
)
};