
import axios from 'axios';
import interfaces from './interfaces';

const tools = {

  goWechatAuth (url) {
    this.request({
      method: 'post',
      interface: 'wechatAuth',
      data: {'redirect': url}
    }).then(res => {
      var data = res.result.result;
      if(data.startsWith('https')){
        console.log(data);
        window.location.href=data; //转向微信授权
      }
    });
  },

  getTokenByCode (code, cb) {
    this.request({
      method: 'post',
      interface: 'findUserByWeCode',
      data: {'code':code}
    }).then(res => {
      cb(res)
    });
  },

  request (option) {
    let method = option.method ? option.method : 'get'
    let putData = {
      url: interfaces.interfaces[option.interface],
      method: method,
      // headers:{
      //   token:option.token?option.token:''
      // }
    }

    if (method == 'get') {
      putData.params = option.data
    } else if (method == 'post'){
      putData.data = option.data
    }
    /**
     * 请求拦截：在请求之前执行 比如loading处理
     * */
    return new Promise((resolve, reject) => {

      axios.interceptors.request.use((config) => {
        // common.loading()
        return config;
      })
      /**
       * 请求完成后执行
       * */
      axios.interceptors.response.use(
        response => {
          //common.removeLoading();
          return response;
        },

        error => {
          if(error.response.status){
            console.log(error.response.status)
          }
        }

      )

      axios(putData).then(res => {
        resolve({
          status:0,
          result:res.data
        })
      }).catch(()=>{
        //reject('error');
      });
    });

  },

  upFile:  (e)=> {
    return new Promise((resolve,reject)=>{
      axios.interceptors.request.use((config) => {
        //common.loading();
        return config;
      })
      /**
       * 请求完成后执行
       * */
      axios.interceptors.response.use((response) => {
        //common.removeLoading();
        return response;
      })
      let file = e.target.files[0];
      let param = new FormData(); //创建form对象
      param.append('file',file,file.name);//通过append向form对象添加数据
      //param.append('chunk','0');//添加form表单中其他数据
      //console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };  //添加请求头
      axios.post(interfaces.interfaces.uploadArticleAreaImage,param,config)
        .then(response=>{
          //common.removeLoading();
          resolve({
            status:0,
            result:response.data
          });
        }).catch(()=>{
        //common.removeLoading();
        reject('error');
      });
    });

  }
};
export default tools
