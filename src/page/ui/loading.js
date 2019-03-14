import React from 'react'
import { Card, Button, Spin, Icon, Alert} from 'antd'
import './ui.less'
export default class Loadings extends React.Component{
    render(){
        const icon=<Icon type="loading" style={{fontSize:24}}/>;
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin />
                    <Spin size="small" style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎学习Loading组件使用"
                        type="info"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习Loading组件使用"
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎学习Loading组件使用"
                            type="warning"
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}