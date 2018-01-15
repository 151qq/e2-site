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
        path: '',
        name: 'off-shell',
        component: resolve => require(["../../components/spreedArticle/offShell.vue"], resolve),
        meta: {
          token:false
        }
      },
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
    // 推广注册
    path: '/channelRegister',
    name: 'channelRegister',
    component (resolve) {
      require(["../../components/wxPromotion/editChannel.vue"], resolve)
    }
  }
]

export default routers
