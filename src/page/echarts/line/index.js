import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint'
export default class Line extends React.Component{
    getOption=()=>{
        let option={
            title:{
                text:'骑行订单量'
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:[
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[
                        1000,
                        2000,
                        5000,
                        2300,
                        4900,
                        2000,
                        3400,
                    ]
                }
            ]
        }
        return option;
    };
    getOption2=()=>{
        let option={
            title:{
                text:'骑行订单量'
            },
            tooltip:{
                trigger:'axis'
            },
            legend:{
                data:['ofo','mobai','chuanqi']
            },
            xAxis:{
                data:[
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'ofo',
                    type:'line',
                    data:[
                        1000,
                        2000,
                        5000,
                        2300,
                        4900,
                        2000,
                        3400
                    ]
                },
                {
                    name:'mobai',
                    type:'line',
                    data:[
                        1230,
                        2230,
                        5230,
                        2230,
                        4230,
                        2230,
                        3230
                    ]
                },
                {
                    name:'chuanqi',
                    type:'line',
                    data:[
                        1500,
                        2500,
                        5500,
                        2500,
                        4500,
                        2500,
                        3500
                        ]
                }
            ]
        }
        return option;
    };
    getOption3=()=>{
        let option={
            title:{
                text:'骑行订单量'
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                type:'category',
                //x坐标在刻度线上，而不是刻度线中间
                boundaryGap: false,
                data:[
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'line',
                    data:[
                        1000,
                        2000,
                        5000,
                        2300,
                        4900,
                        2000,
                        3400,
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    };
    render(){
        return(
            <div>
                <Card title="折线图一">
                    <ReactEcharts option={this.getOption()} them="line" notMerge={true} lazyUpdate={true} style={{height:500}}/>
                </Card>
                <Card title="折线图二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} them="line" notMerge={true} lazyUpdate={true} style={{height:500}}/>
                </Card>
                <Card title="折线图三" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption3()} them="line" notMerge={true} lazyUpdate={true} style={{height:500}}/>
                </Card>
            </div>
        )
    }
}