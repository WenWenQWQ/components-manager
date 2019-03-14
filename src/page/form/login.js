import React from 'react'
import { Card, Form, Input,Button,message, Icon, Checkbox } from 'antd'
 class Login extends React.Component{
     handleSubmit = ()=>{
         let userInfo=this.props.form.getFieldsValue();
         this.props.form.validateFields((err,value)=>{
             if(!err){
                 message.success(`${userInfo.username}恭喜你，通过登录校验，密码为${userInfo.password}`)
             }
         })
     };
    render(){
        const { getFieldDecorator}=this.props.form;
        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'Jack',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },{
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },{
                                            pattern:/^\d+/g,
                                            message:'用户名必须为英文字母'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'12345',
                                    rules:[]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login);