import { Table, Tag } from 'antd';
import { useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Describe',
        dataIndex: 'describe',
        width: '30%',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Number of tasks',
        dataIndex: 'numberTasks',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
    },
    {
        title: 'State',
        dataIndex: 'state',
        render: (_, { state }) => {
            let color = state.length > 8 ? 'geekblue' : 'volcano';
            if (state === 'Active') {
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
        createdAt: 'Nguyen Thi Hai Anh',
        price: 200000,
        describe:'Object-Oriented-Programming (Object-Oriented-Programming) is an object-',
        address: `So 1, Hoang Cong Chat, Mai Dich, Cau Giay, Ha Noi`,
        name: 'Advanced C++',
        state: 'Active',
        numberTasks: 80
    },
    {

        createdAt: 'Nguyen Thi Hai Anh',
        price: 200000,
        describe:'Object-Oriented-Programming (Object-Oriented-Programming) is an object-',
        address: `Ha Dong, Ha Noi`,
        name: 'Object Oriented Programming',
        numberTasks: 80,
        state: 'In coming',
        numberTasks: 80
    },
    {

        createdAt: 'Nguyen Manh Hung',
        price: 200000,
        describe:'Learn the basic of Java programming language through interactive coding',
        address: `Thanh Xuan, Ha Noi`,
        name: 'C++ for Beginners',
        state: 'Inactive',
        numberTasks: 80
    },
    {

        createdAt: 'Nguyen Van Quan',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Hai Duong`,
        name: 'C for Beginners',
        state: 'Active',
        numberTasks: 80
    },
    {

        createdAt: 'Hoang Thi Ngoc Anh',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Thai Binh`,
        name: 'Basic algorithms',
        state: 'Active',
        numberTasks: 80
    },
    {

        createdAt: 'Pham Ha Linh',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Ha Noi`,
        name: 'Data Structure and Algorithms',
        state: 'In coming',
        numberTasks: 80
    },
    {

        createdAt: 'Le Luu Hoang',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Thuong Tin, Ha Noi`,
        name: 'Java fundamentals',
        state: 'Active'
    },
    {

        createdAt: 'Le Long Viet',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Hai Phong`,
        name: 'Computer Software',
        state: 'Inactive'
    },
    {

        createdAt: 'Do Ly Ly',
        price: 200000,
        describe:'This course was created for complete beginners and will teach you',
        address: `Ha Giang`,
        name: 'Introduction to SQL',
        state: 'Active'
    },
    {

        createdAt: 'Le Thi Ha',
        price: 200000,
        describe:'Learn the basic of Java programming language through interactive coding',
        address: `Ha Nam`,
        name: 'Python fundamentals',
        state: 'Active'
    },
    {

        createdAt: 'Nguyen Thi Hai',
        price: 200000,
        address: 'Hai Phong',
        name: 'Advanced C++',
        state: 'Active'
    },
    {

        createdAt: 'To Bao Chau',
        price: 200000,
        address: `Ha Noi`,
        name: 'C for Beginners',
        state: 'Active'
    },
    {

        createdAt: 'To Thi Van',
        price: 200000,
        address: `Hai Duong`,
        name: 'C for Beginners',
        state: 'Inactive'
    },
    {

        createdAt: 'Nguyen Thi Van',
        price: 200000,
        address: `Ha Dong, Ha Noi`,
        name: 'Data Structure and Algorithms',
        state: 'Active'
    },

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
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <span>
                    {hasSelected ? `Selected ${selectedRowKeys.length} lessons` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};
export default App;