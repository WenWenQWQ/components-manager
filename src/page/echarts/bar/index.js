import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
import echartTheme from  './../echartTheme'
//引入echarts主模块
import echarts from 'echarts/lib/echarts'
//引入饼图和折线图
import 'echarts/lib/chart/bar'
//引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
export default class Bar extends React.Component{
    state={};
    componentWillMount(){
        //echarts.registerTheme('manager',echartTheme);
    }
    //配置图标
    getOption=()=>{
        let option= {
            title: {
                text: '用户骑行订单'
            },
            //点击提示标签
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            //内容数据
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        4000,
                        2300,
                        4000
                    ]
                }
            ]
        };
        return option;
    };
    getOption2=()=>{
        let option={
            title:{
                text:'骑行订单',
                subtext:'北京'
            },
            tooltip:{
                trigger:'axis'
            },
            legend:{
                data:['ofo','mobai','xiaolan']
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
                    type:'bar',
                    data:[
                        1000,
                        2000,
                        3000,
                        4000,
                        5000,
                        6000,
                        7000
                    ]
                },
                {
                    name:'mobai',
                    type:'bar',
                    data:[
                        1200,
                        2200,
                        3200,
                        4200,
                        5200,
                        6200,
                        7200
                    ]
                },
                {
                    name:'xiaolan',
                    type:'bar',
                    data:[
                        1300,
                        1400,
                        1100,
                        3200,
                        4300,
                        5900,
                        6700
                    ]
                }
            ]
        }
        return option;
    };
    render(){
        return(
            <div>
                <Card title="柱形图一">
                    <ReactEcharts option={this.getOption()} them="manager" notMerge={true} lazyUpdate={true} style={{height:500}}/>
                </Card>
                <Card title="柱形图二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} them="system" style={{height:500}}/>
                </Card>
            </div>
        )
    }
}