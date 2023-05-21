import { Modal, Form, Button, Row, Col, Divider, Input } from 'antd'
import { styled } from '@mui/material/styles';

const ContainerStyles = styled(Modal)(({

}) => ({
    '& .ant-modal-header': {
        borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        paddingBottom: '20px'
    },
    '& .ant-btn-primary': {
        background: ' #5419dd',
        fontWeight: 500
    },
    '& .ant-btn-default': {
        color: '#5419dd',
        fontWeight: 500
    }

}));
const { TextArea } = Input;
const AddUser = ({ title, open, onCancel, onOk, titleCancel = 'Hủy', titleOk = 'Lưu' }) => {
    const [form] = Form.useForm()
    const onSubmit = () => {
        return (
            'hi'
        )
    }
    return (

        <ContainerStyles
            width={400}
            title={title}
            className="create-form-supplier"
            open={open}
            // closeIcon={<CloseIcon />}
            onCancel={onCancel}
            // closable={false}
            footer={[
                <>
                    <Button onClick={onCancel}>{titleCancel}</Button>
                    <Button type="primary" form="add-supplier" key="submit" htmlType="submit">
                        {titleOk}
                    </Button>
                </>,
            ]}
        >
            <Form
                name="add-supplier"
                wrapperCol={{ span: 16 }}
                // initialValues={initialValues}
                form={form}
                onFinish={onSubmit}
                layout="vertical"
                autoComplete="off"
            >
                <p className="title-card" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>Name</p>


                <Form.Item name="name" style={{ width: '100%' }}>
                    <Input placeholder="" style={{ width: '350px' }} />
                </Form.Item>
                <p className="title-card" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>Email</p>

                <Form.Item name="description" style={{ width: '100%' }}>
                    <Input placeholder="" style={{ width: '350px' }} />
                </Form.Item>
                <Divider />
                <p className="title-card" style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>Study Time</p>

                <Form.Item name="studyTime" style={{ width: '100%' }}>
                    <Input placeholder="" style={{ width: '350px' }} />
                </Form.Item>
                <Divider />

            </Form>
        </ContainerStyles >

    )
}
export default AddUser