import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios{
    static jsonp(options){
       return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function (err,response) {
                if(response.status==='success'){
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }
    static ajax(options){
        let loading;
        if(options.data&&options.data.isShowLoading!==false){
            loading=document.getElementById('ajaxLoading');
            loading.style.display='block';
        }
        //成功调用resolve
        //失败调用reject
        return new Promise((resolve,reject)=>{
            let baseUrl='https://easy-mock.com/mock/5c8c613bee611359cdbb489d/api';
            axios({
                url:options.url,
                method:'get',
                baseURL:baseUrl,
                timeout:5000,
                params:(options.data && options.data.params)|| ''
            }).then((response)=>{
                if(options.data&&options.data.isShowLoading!==false){
                    loading=document.getElementById('ajaxLoading');
                    loading.style.display='none';
                }
                if(response.status===200){
                    if(response.data.code===0){
                        resolve(response.data);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:response.data.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}