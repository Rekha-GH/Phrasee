import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { auth } from '../Model/LoginModel';
import { useDispatch } from 'react-redux';
import sessionSlice from '../Store/LoginBundle';
import patientsSlice from '../../Patient/Store/PatientBundle';
import { useHistory } from 'react-router-dom';

const LoginPage = React.memo(() => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onFinish = useCallback((values) => {
        auth(values.username, values.password).then((data) => {
            dispatch(sessionSlice.actions.setSession(data.token));
            dispatch(patientsSlice.actions.setPatients(data.patients));
            history.push("/");
        });
    }, [dispatch, history]);

    return (
        <main>
            <Form
                layout={'vertical'}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        {
                            pattern: /^(\S)+@\S{1,128}\.\S{1,6}$/,
                            message: "Invalid Username",
                        },
                    ]} name="username"
                >
                    <Input
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,128}$/,
                            message: "minimum 8 characters, at least one letter and one number",
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                    />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </main>
    );
});

LoginPage.displayName = 'LoginPage';
export default LoginPage;