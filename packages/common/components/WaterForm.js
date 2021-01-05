//  packages/common/components/WaterForm.js
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './water-form.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const WaterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      className='form-wrapper'
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='姓名'
        name='username'
        rules={[
          {
            required: true,
            message: '请输入姓名',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          查询操作
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WaterForm;
