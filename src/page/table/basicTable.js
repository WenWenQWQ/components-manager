import React from 'react'
import {Card, Table } from 'antd'
import axios from './../../axios'
import Utils from './../../utils'
export default class BasicTable extends React.Component{
    state={};
    params={
        page:1
    };
    componentDidMount(){
        const dataSource=[
            {
                id:'0',
                username:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克花园',
                time:'09:00'
            },
            {
                id:'1',
                username:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克花园',
                time:'09:00'
            },
            {
                id:'2',
                username:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克花园',
                time:'09:00'
            },
            {
                id:'3',
                username:'jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克花园',
                time:'09:00'
            }
        ];
        dataSource.map((item,index)=>{
            item.key=index;
        });
        this.setState({
            dataSource
        });
        this.request();
    }
    //动态获取mock数据
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            res.result.list.map((item,index)=>{
                item.key=index;
            });
                this.setState({
                    dataSource2:res.result.list,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page=current;
                        this.request();
                    })
                })

        })
    };
    onRowClick=(record,index)=>{
        let selectKey=[index];
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    };
    render(){
        const columns=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女';
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    };
                    return config[state];
                }
            },
            {
                title:'兴趣',
                dataIndex:'interest',
                render(state){
                    let config={
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'踢足球',
                        '4':'跑步',
                        '5':'爬山',
                        '6':'骑行',
                        '7':'桌球',
                        '8':'麦霸'
                    };
                    return config[state];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:"早起时间",
                dataIndex:'time'
            }
        ];
        const { selectedRowKeys }=this.state;
        const rowSelection={
            type:'radio',
            selectedRowKeys
        };
        const rowCheckSelection={
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                let ids=[];
                selectedRows.map((item)=>{
                    ids.push(item.id);
                });
                this.setState({
                    selectedRowKeys,
                    selectedIds:ids
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="单选动态表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="复选动态表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="分页动态表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.pagination}
                    />
                </Card>
            </div>
        )
    }
}