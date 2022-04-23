import {
    CloudFilled,
    MessageFilled,
    StarFilled,
    CaretDownOutlined
  } from '@ant-design/icons';
  import { Avatar, Menu,Image } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
  import { useNavigate } from 'react-router-dom';
  export default function AccountManagerMenu() {

    const search =() =>(
      <i className="bi bi-search"></i>
    )
    const nav = useNavigate();
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        
        defaultSelectedKeys={['1']}
        style={{
          position: 'sticky',
          left: '0',
          top: '0',
          right: '0',
          zIndex: '1',
          display:"flex",
          justifyContent:"center",
          padding:"15px"
        }}
      >
      

        <SubMenu key="sub1"  icon={<CaretDownOutlined />} title="Howdy,  Partner"  >

       <Menu.Item
       
          key="1"
          icon={<CloudFilled />}
        >
          Upload
        </Menu.Item>
       <Menu.Item
          key="2"
          icon={<MessageFilled />}
          
        >
          {' '}
          Messages
        </Menu.Item>
      <Menu.Item
          key="3"
          icon={<StarFilled />}
          
        >
          Bookmarks
        </Menu.Item> 
     
      </SubMenu>
  
       
      </Menu>
    );
  }