const routers = [
  {
    // 详情编辑
    path: '/',
    name: 'home',
    component (resolve) {
      require(["./home.vue"], resolve)
    }
  },
  {
    // 详情编辑
    path: '/enterpriseRegistor',
    name: 'enterprise-registor',
    component (resolve) {
      require(["./enterprise-registor.vue"], resolve)
    }
  },
  {
    // 注册提示页面
    path: '/registorMessage',
    name: 'registor-message',
    component (resolve) {
      require(["./registorMessage.vue"], resolve)
    }
  },
  {
    // 详情编辑
    path: '/registor',
    name: 'registor',
    component (resolve) {
      require(["./registor.vue"], resolve)
    }
  },
  {
    // 验证确认
    path: '/check-confirm',
    name: 'check-confirm',
    component (resolve) {
      require(["../../components/common/check-confirm.vue"], resolve)
    }
  },
  {
    // 推广文章
    path: '/spreedArticle',
    name: 'spreedArticle',
    component (resolve) {
      require(["../../components/spreedArticle/main.vue"], resolve)
    },
    children: [
      {
        path: 'detail',
        name: 'article-detail',
        component: resolve => require(["../../components/spreedArticle/itemDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'comment',
        name: 'article-comment',
        component: resolve => require(["../../components/spreedArticle/itemComment.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 产品分类
    path: '/productCenter',
    name: 'productCenter',
    component (resolve) {
      require(["../../components/productCenter/main.vue"], resolve)
    },
    children: [
      {
        path: 'productDetail',
        name: 'product-detail',
        component: resolve => require(["../../components/productCenter/articleDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'productLog',
        name: 'product-log',
        component: resolve => require(["../../components/productCenter/articleLog.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'productComment',
        name: 'product-comment',
        component: resolve => require(["../../components/productCenter/itemComment.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'productSpec',
        name: 'product-spec',
        component: resolve => require(["../../components/productCenter/productSpec.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'productSenior',
        name: 'product-senior',
        component: resolve => require(["../../components/productCenter/productSenior.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'productimg',
        name: 'product-img',
        component: resolve => require(["../../components/productCenter/imgList.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  // 预约详情
  {
    // 在线预约
    path: '/reserveOnline',
    name: 'reserveOnline',
    component (resolve) {
      require(["../../components/reserveOnline/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'reserve-detail',
        component: resolve => require(["../../components/reserveOnline/reserveDetail.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 推广注册
    path: '/channelRegister',
    name: 'channelRegister',
    component (resolve) {
      require(["../../components/wxPromotion/editChannel.vue"], resolve)
    }
  },
  {
    // 地推活动
    path: '/receiveGift',
    name: 'receiveGift',
    component (resolve) {
      require(["../../components/party/receiveGift.vue"], resolve)
    }
  },
  {
    // 地推活动
    path: '/groupDetail',
    name: 'groupDetail',
    component (resolve) {
      require(["../../components/group/groupDetail.vue"], resolve)
    }
  }
]

export default routers
