import { Button, Table, Tag } from 'antd';
import { useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Box } from '@mui/material';
import AddUser from '../modal/AddUser';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Type of course',
    dataIndex: 'typeCourse',
  },
  {
    title: 'State',
    dataIndex: 'state',
    render: (_, { state }) => {
      let color = state.length > 8 ? 'volcano' : 'geekblue';
      if (state === 'Complete') {
        color = 'green';
      }
      return (
        <Tag color={color} key={state}>
          {state}
        </Tag>
      );
    }
  },
  {
    title: 'Action',
    render: () => (
      <>
        <span style={{ color: '#5419dd', marginRight: '10px' }}> <EyeOutlined /></span>
        <span style={{ color: '#00a4f5', marginRight: '10px' }}><EditOutlined /></span>
        <span style={{ color: '#ea230f' }}> <DeleteOutlined /></span>
      </>
    ),

  }
];
const data = [
  {
    name: 'Do Anh Tuyet',
    age: 2001,
    address: `So 1, Hoang Cong Chat, Mai Dich, Cau Giay, Ha Noi`,
    typeCourse: 'Advanced C++',
    state: 'Complete'
  },
  {

    name: 'Nguyen Thi Hai Anh',
    age: 2001,
    address: `Ha Dong, Ha Noi`,
    typeCourse: 'Object Oriented Programming',
    state: 'Imqualified'
  },
  {

    name: 'Nguyen Manh Hung',
    age: 2007,
    address: `Thanh Xuan, Ha Noi`,
    typeCourse: 'C++ for Beginners',
    state: 'Consider'
  },
  {

    name: 'Nguyen Van Quan',
    age: 2001,
    address: `Hai Duong`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Hoang Thi Ngoc Anh',
    age: 2001,
    address: `Thai Binh`,
    typeCourse: 'Basic algorithms',
    state: 'Complete'
  },
  {

    name: 'Pham Ha Linh',
    age: 2001,
    address: `Ha Noi`,
    typeCourse: 'Data Structure and Algorithms',
    state: 'Imqualified'
  },
  {

    name: 'Le Luu Hoang',
    age: 2001,
    address: `Thuong Tin, Ha Noi`,
    typeCourse: 'Java fundamentals',
    state: 'Complete'
  },
  {

    name: 'Le Long Viet',
    age: 2008,
    address: `Hai Phong`,
    typeCourse: 'Computer Software',
    state: 'Consider'
  },
  {

    name: 'Do Ly Ly',
    age: 1997,
    address: `Ha Giang`,
    typeCourse: 'Introduction to SQL',
    state: 'Complete'
  },
  {

    name: 'Le Thi Ha',
    age: 1999,
    address: `Ha Nam`,
    typeCourse: 'Python fundamentals',
    state: 'Complete'
  },
  {

    name: 'Nguyen Thi Hai',
    age: 2004,
    address: 'Hai Phong',
    typeCourse: 'Advanced C++',
    state: 'Complete'
  },
  {

    name: 'To Bao Chau',
    age: 2006,
    address: `Ha Noi`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'To Thi Van',
    age: 2005,
    address: `Hai Duong`,
    typeCourse: 'C for Beginners',
    state: 'Consider'
  },
  {

    name: 'Nguyen Thi Van',
    age: 2001,
    address: `Ha Dong, Ha Noi`,
    typeCourse: 'Data Structure and Algorithms',
    state: 'Complete'
  },
  {

    name: 'Le Thi Linh',
    age: 2001,
    address: `Hai Duong`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Nguyen Thi Linh',
    age: 2002,
    address: `Ha Noi`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Luu Thi Hoa',
    age: 2003,
    address: `Hai Duong`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Nguyen Thi Lan',
    age: 2001,
    address: `Ha Tinh`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Nguyen Thi Nhung',
    age: 2003,
    address: `Hai Phong`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  },
  {

    name: 'Nguyen Van Quan',
    age: 2004,
    address: `Hai Duong`,
    typeCourse: 'C for Beginners',
    state: 'Complete'
  }
];

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen)
  const showModal = () => {
      setIsModalOpen(true);
  };

  const handleOk = () => {
      setIsModalOpen(false);
  };

  const handleCancel = () => {
      setIsModalOpen(false);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 16px' }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} lessons` : ''}
          {/* <Button onClick={showModal} style={{ background: ' #5419dd', color: 'white', height: '40px' }}>Add User</Button>
          <AddUser title="Thêm người dùng " open={isModalOpen} onOk={handleOk} onCancel={handleCancel} /> */}

        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default App;