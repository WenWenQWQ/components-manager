import React from 'react'
import { Card, Table } from 'antd'
import axios from "../../axios";
import Utils from "../../utils/utils";
export default class HighTable extends React.Component{
    state={};
    params={
        page:1
    };
    componentDidMount(){
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
                dataSource:res.result.list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page=current;
                    this.request();
                })
            })

        })
    };
    render(){
        const columns=[
            {
                title:'id',
                width:80,
                dataIndex:'id'
            },
            {
                title:'用户名',
                width:80,
                dataIndex:'username'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女';
                }
            },
            {
                title:'状态',
                width:80,
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
                width:80,
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
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'地址',
                width:120,
                dataIndex:'address'
            },
            {
                title:"早起时间",
                width:80,
                dataIndex:'time'
            }
        ];
        const columns2=[
            {
                title:'id',
                width:80,
                fixed:'left',
                dataIndex:'id'
            },
            {
                title:'用户名',
                fixed:'left',
                width:80,
                dataIndex:'username'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女';
                }
            },
            {
                title:'状态',
                width:80,
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
                width:80,
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
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'地址',
                width:120,
                dataIndex:'address'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女';
                }
            },
            {
                title:'状态',
                width:80,
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
                width:80,
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
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'地址',
                width:120,
                dataIndex:'address'
            },
            {
                title:'性别',
                width:80,
                dataIndex:'sex',
                render(sex){
                    return sex===1?'男':'女';
                }
            },
            {
                title:'状态',
                width:80,
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
                width:80,
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
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'地址',
                width:120,
                dataIndex:'address'
            },
            {
                title:"早起时间",
                width:80,
                fixed:'right',
                dataIndex:'time'
            }
        ];
        return (
            <div>
                <Card title="头部固定表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左右侧边固定表格" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:1590}}
                    />
                </Card>
            </div>
        )
    }
}