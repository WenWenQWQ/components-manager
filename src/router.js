import React , {Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin'
import Buttons from './page/ui/buttons'
import Modals from './page/ui/modals'
import Loadings from './page/ui/loading'
import Notice from './page/ui/notice'
import Message from './page/ui/message'
import Tabs from './page/ui/tabs'
import Gallery from './page/ui/gallery'
import Carousel from './page/ui/carousel'
import Login from './page/form/login'
import Register from './page/form/register'
import BasicTable from './page/table/basicTable'
import HighTable from './page/table/highTable'
import City from './page/city/index'
import Order from './page/order/index'
import Common from './common'
import OrderDetail from './page/order/detail'
export default class IRouter extends Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/common" render={()=>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                            </Common>
                        }/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/ui/buttons" component={Buttons}/>
                                    <Route path="/ui/modals" component={Modals}/>
                                    <Route path="/ui/loadings" component={Loadings}/>
                                    <Route path="/ui/notification" component={Notice}/>
                                    <Route path="/ui/messages" component={Message}/>
                                    <Route path="/ui/tabs" component={Tabs}/>
                                    <Route path="/ui/gallery" component={Gallery}/>
                                    <Route path="/ui/carousel" component={Carousel}/>
                                    <Route path="/form/login" component={Login}/>
                                    <Route path="/form/reg" component={Register}/>
                                    <Route path="/table/basic" component={BasicTable}/>
                                    <Route path="/table/high" component={HighTable}/>
                                    <Route path="/city" component={City}/>
                                    <Route path="/order" component={Order} />
                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}