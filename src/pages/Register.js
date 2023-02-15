import '../register.css';
import { Button, Form, Input ,Typography,Divider} from 'antd';
import { FacebookFilled, GoogleOutlined, TwitterCircleFilled } from '@ant-design/icons';
function Register() {
  return <div className='login'>
    <Form className='loginform'>
      <Typography.Title>Register Page!</Typography.Title>
      <Form.Item label="Name" name={"Name"}>
          <Input placeholder='Enter You Name'></Input>
      </Form.Item>
      <Form.Item label="Email" name={"myEmail"}>
          <Input placeholder='Enter You Mail'></Input>
      </Form.Item>
      <Form.Item label="Password" name={"password"}>
          <Input placeholder='Enter You Password'></Input>
      </Form.Item>
      <Button type="primary" htmlType='submit' block>Register</Button>
      <Divider style={{borderColor:"black"}}>or Register with</Divider>
      <div className='icon'>
        <GoogleOutlined/>
        <FacebookFilled/>
        <TwitterCircleFilled/>
      </div>
    </Form>
   </div>
}
export default Register;
