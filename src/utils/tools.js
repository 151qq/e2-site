import jsCookie from 'js-cookie'
import axios from 'axios'
import interfaces from './interfaces'
import store from '../vuex/store'
import queryString from 'query-string'

const tools = {
  getUser (cb, type) {
    var parsed = queryString.parse(location.search)
    var e2Token = jsCookie.get('customer_infomation')
    var userInfo = store.state.userInfo

    if (type == 'snsapi_base') {
      if (!e2Token) {
          var path = '/registor?enterpriseCode=' + parsed.enterpriseCode + '&appid=' + parsed.appid  + '&pageType=' + parsed.pageType  + '&pageCode=' + parsed.pageCode +'&scope=' + type + '&redirectUrl=' + window.encodeURIComponent(window.location.href)
          window.location.replace(path)
      } else {
          if (!userInfo.openId) {
            tools.getCustom(cb)
          } else {
            cb()
          }
      }
    }

    if (type == 'snsapi_userinfo') {
      if (!e2Token || userInfo.customerType == '0') {
        var path = '/registor?enterpriseCode=' + parsed.enterpriseCode + '&appid=' + parsed.appid  + '&pageType=' + parsed.pageType  + '&pageCode=' + parsed.pageCode +'&scope=' + type + '&redirectUrl=' + window.encodeURIComponent(window.location.href)
        window.location.replace(path)
        return false
      }
      if (!userInfo.openId) {
        tools.getCustom(cb)
        return false
      }
      cb()
    }
  },

  getCustom (cb) {
    tools.request({
        method: 'post',
        interface: 'checkCustome',
        data: {}
    }).then(res => {
        if (res.result.success == '1') {
            var result = res.result.result
            store.commit('setUserInfo', result)
            cb()
        } else {
            alert(res.result.message)
        }
    })
  },

  /**
   * 格式化日期函数
   * @param date {Date|Date String} [需要格式化的日期]
   * @param frm {String} [格式(如：yyyy-MM-dd hh:mm:ss)]
   * @return 格式化后的日期
  */
  formatDate (date, fmt) {
      if (!date) {
        return ''
      }

      let theDate = new Date(date)
      var o = {
          'M+': theDate.getMonth() + 1, // 月份
          'd+': theDate.getDate(), // 日
          'h+': theDate.getHours(), // 小时
          'm+': theDate.getMinutes(), // 分
          's+': theDate.getSeconds(), // 秒
          'q+': Math.floor((theDate.getMonth() + 3) / 3), // 季度
          'S': theDate.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (theDate.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }

      return fmt
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
