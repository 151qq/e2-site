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
    },
    meta: {
      title: '营销精英'
    }
  },
  {
    // 注册提示页面
    path: '/registorMessage',
    name: 'registor-message',
    component (resolve) {
      require(["./registorMessage.vue"], resolve)
    },
    meta: {
      title: '注册成功'
    }
  },
  {
    // 详情编辑
    path: '/registor',
    name: 'registor',
    component (resolve) {
      require(["./registor.vue"], resolve)
    },
    meta: {
      title: '营销精英'
    }
  },
  {
    // 地图搜索
    path: '/search-map',
    name: 'search-map',
    component (resolve) {
      require(["../../components/common/search-map.vue"], resolve)
    },
    meta: {
      title: '地图搜索'
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
          title: '推广文章详情'
        }
      },
      {
        path: 'comment',
        name: 'article-comment',
        component: resolve => require(["../../components/spreedArticle/itemComment.vue"], resolve),
        meta: {
          title: '发表评论'
        }
      }
    ]
  },
  // {
  //   // 产品分类
  //   path: '/productCenter',
  //   name: 'productCenter',
  //   component (resolve) {
  //     require(["../../components/productCenter/main.vue"], resolve)
  //   },
  //   children: [
  //     {
  //       path: 'productDetail',
  //       name: 'product-detail',
  //       component: resolve => require(["../../components/productCenter/articleDetail.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     },
  //     {
  //       path: 'productLog',
  //       name: 'product-log',
  //       component: resolve => require(["../../components/productCenter/articleLog.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     },
  //     {
  //       path: 'productComment',
  //       name: 'product-comment',
  //       component: resolve => require(["../../components/productCenter/itemComment.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     },
  //     {
  //       path: 'productSpec',
  //       name: 'product-spec',
  //       component: resolve => require(["../../components/productCenter/productSpec.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     },
  //     {
  //       path: 'productSenior',
  //       name: 'product-senior',
  //       component: resolve => require(["../../components/productCenter/productSenior.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     },
  //     {
  //       path: 'productimg',
  //       name: 'product-img',
  //       component: resolve => require(["../../components/productCenter/imgList.vue"], resolve),
  //       meta: {
  //         title:false
  //       }
  //     }
  //   ]
  // },
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
          title: '预约确认'
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
    },
    meta: {
      title: '推广人员注册'
    }
  },
  {
    // 地推活动
    path: '/receiveGift',
    name: 'receiveGift',
    component (resolve) {
      require(["../../components/party/receiveGift.vue"], resolve)
    },
    meta: {
      title: '领取礼品'
    }
  },
  {
    // 地推活动
    path: '/groupDetail',
    name: 'groupDetail',
    component (resolve) {
      require(["../../components/group/groupDetail.vue"], resolve)
    },
    meta: {
      title: '套券信息'
    }
  }
]

export default routers
