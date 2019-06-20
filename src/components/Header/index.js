import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import './index.less';
import Utils from '../../utils/utils';
import axios from '../../axios/index';
export default class Header extends Component{
    componentWillMount(){
        this.setState({
            userName:'佳佳'
        });
        setInterval(()=>{
            let sysTime=Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);
      //  this.getWeatherAPIData();
    }
   /* getWeatherAPIData(){
        let city='北京';
        /!*axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=L1zQtUpLDA5LMuAiM4naS4xzd2RyVuBZ'
        }).then((res)=>{
            if(res.status==='success'){
                let data=res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })*!/
    }*/
    render(){
        const menuType=this.props.menuType;
        return (
            <div className="header">
               <Row className="header-top">
                   {
                       menuType?
                           <Col span={ 6 } className="logo">
                              <img src="/assets/logo-ant.svg"/>
                               <span>组件后台管理系统</span>
                           </Col>:''
                   }
                   <Col span={ menuType?18:24 }>
                       <span>欢迎，{this.state.userName}</span>
                       <a href="#">退出</a>
                   </Col>
               </Row>
                {
                    menuType?'': <Row className="breadcrumb">
                        <Col span={ 4 } className="breadcrumb-title">
                            首页
                        </Col>
                        <Col span={ 20 } className="weather">
                            <span className="date">{this.state.sysTime}</span>
                            <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                            </span>
                            <span className="weather-detail">
                             {this.state.weather}
                        </span>
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}