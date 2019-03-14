import React from 'react'
import {Card, Button, Form, Input, Checked, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import moment from 'moment'
const Option=Select.Option;
class Register extends React.Component{
    render(){
        const {getFieldDecorator}=this.props.form;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        };
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <Form.Item label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                })(
                                    <Input type="password" placeholder="请输入密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <Radio.Group>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'18',
                                })(
                                    <InputNumber/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2',
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option  value="3">百度FE</Option>
                                        <Option value="4">创业者</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('hobby',{
                                    initialValue:["2","4"],
                                })(
                                    <Select mode="multiple">
                                        <option value="1">游泳</option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">骑行</Option>
                                        <Option value="6">爬山</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    initialValue:true,
                                    valuePropName:'checked'
                                })(
                                    <Switch/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2019-3-1')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address')(
                                    <Input.TextArea
                                        autosize={
                                            {
                                                minRows:4,
                                                maxRows:6
                                            }
                                        }
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(

                                )
                            }
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register)