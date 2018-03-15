import jsCookie from 'js-cookie'
import axios from 'axios'
import interfaces from './interfaces'
import store from '../vuex/store'
import queryString from 'query-string'

const tools = {
  getUser (cb, type) {
    var location = window.location
    var parsed = queryString.parse(location.search)
    var userInfo = store.state.userInfo

    if (type == 'snsapi_base') {
      if (!userInfo.openId) {
        var path = location.origin + '/registor' + location.search + '&scope=snsapi_base&redirectUrl=' + window.encodeURIComponent(window.location.href)

        console.log(path, 'snsapi_base')
        window.location.replace(path)
      } else {
        cb()
      }
    }

    if (type == 'snsapi_userinfo') {
      if (!userInfo.openId || userInfo.customerType == '0') {
        var path = location.origin + '/registor' + location.search + '&scope=snsapi_userinfo&redirectUrl=' + window.encodeURIComponent(window.location.href)
        console.log(path, 'snsapi_userinfo')
        window.location.replace(path)
        return false
      }
      cb()
    }
  },
  formDataUrl (url) {
    var a =  document.createElement('a')
    a.href = url
    return {
      path: a.pathname,
      query: queryString.parse(a.search)
    }
  },
  /**
   * 格式化日期函数
   * @param date {Date|Date String} [需要格式化的日期]
   * @param frm {String} [格式(如：yyyy-MM-dd hh:mm:ss)]
   * @return 格式化后的日期
  */
  formatDate (date, fmt) {
      if (!date || !fmt) {
        return ''
      }

      var theDate = ''
      if (typeof date == 'number') {
        theDate = new Date(date)
      } else {
        if (date.length > 10) {
          var dateArr = date.split(/[T\s]/)

          var beforeTime = dateArr[0].split('-')
          var afterTime = dateArr[1].split(':')

          afterTime[2] = afterTime[2] ? afterTime[2] : '00'
        } else {
          var beforeTime = date.split('-')
        }

        if (afterTime) {
          theDate = new Date(beforeTime[0], beforeTime[1] - 1, beforeTime[2], afterTime[0], afterTime[1], afterTime[2])
        } else {
          theDate = new Date(beforeTime[0], beforeTime[1] - 1, beforeTime[2])
        }
      }

      if (!theDate) {
        return
      }

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
