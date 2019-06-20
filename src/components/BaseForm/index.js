import React from 'react';
import { Card, Input, Select, Form, Button, Checkbox, Radio, DatePicker} from 'antd'
import Utils from './../../utils/utils'
class FilterForm extends React.Component{
    handleFilterSubmit=()=>{
        let fieldsValue=this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }
    initFormList = () =>{
        const {getFieldDecorator} =this.props.form;
        const formList=this.props.formList;
        const formItemList=[];
        if(formList&&formList.length>0){
            formList.forEach((item)=>{
                let label=item.label;
                let field=item.field;
                let initialValue=item.initialValue||'';
                let placeholder=item.placeholder;
                let width=item.width;
                if(item.type==='时间查询'){
                    const begin_time=<Form.Item label="订单时间" key="begin_time">
                        {
                            getFieldDecorator("begin_end")(
                               <DatePicker style={{width:width}} showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
                            )
                        }
                    </Form.Item>;
                    formItemList.push(begin_time);
                    const end_time=<Form.Item label="~" colon={false} key={field}>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime={true} style={{width:width}} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
                            )
                        }
                    </Form.Item>;
                    formItemList.push(end_time);
                }
                if(item.type==='INPUT'){
                    const INPUT=<Form.Item label={label} key={field}>
                        {
                            getFieldDecorator([field],{
                                initialValue:initialValue
                            })(
                               <Input type="text" placeholder={placeholder}/>
                            )
                        }
                    </Form.Item>;
                    formItemList.push(INPUT);
                }
                else if(item.type==='SELECT'){
                    const SELECT=<Form.Item label={label} key={field}>
                        {
                            getFieldDecorator([field],{
                                initialValue:initialValue
                            })(
                                <Select
                                    style={{width:width}}
                                    placeholder={placeholder}
                                >
                                    {Utils.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </Form.Item>;
                    formItemList.push(SELECT);
                }
                else if(item.type==='CHECKBOX'){
                    const CHECKBOX=<Form.Item label={label} key={field}>
                        {
                            getFieldDecorator([field],{
                                valuePropName:'checked',
                                initialValue:initialValue//true||false
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </Form.Item>;
                    formItemList.push(CHECKBOX);
                }
            })
        }
        return formItemList;
    };
    render(){
        return (
            <Form layout="inline">
                { this.initFormList()}
                <Form.Item>
                    <Button type="primary" style={{margin:'0 20px 0 0'}} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.handleReset}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}
//实现双向数据绑定功能，有getFieldDecorator
export default Form.create({})(FilterForm);