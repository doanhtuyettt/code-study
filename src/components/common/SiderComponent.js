import React from "react";
import { Menu, Layout } from "antd";
import Link from "next/link";

const { SubMenu } = Menu;

const SiderComponent = ({ handleClick }) => {

  const menuList = [
    {
      id:'1',
      name: 'Users',
      href:'/users'
    },
    {
      id:'2',
      name:'Courses',
      href:'/courses',
      menuItem :[
        {
        key: 1,
        name:' Option 1'
        },
       {
        key: 2,
        name:' Option 2'
       }
      ]
    }
  ]
  return (
    <Layout.Sider>
      <Menu theme="dark" mode="inline" >
        {menuList.map( item =>
          <SubMenu
          key={item.id}
          title={
            <Link href={item.href}>
              <span>{item.name}</span>
            </Link>
          }
        >
          {item.menuItem && item.menuItem.map(obj =>
            <Menu.Item key={obj.key} onClick={handleClick}>
            {obj.name}
          </Menu.Item>
            )}
        </SubMenu>
          )}
        
        
      </Menu>
    </Layout.Sider>
  );
}
export default SiderComponent