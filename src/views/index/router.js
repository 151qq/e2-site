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
    path: '/detailEdit',
    name: 'detail-edit',
    component (resolve) {
      require(["../../components/common/detailEdit.vue"], resolve)
    }
  },
  {
    // 礼品递推
    path: '/giftEdit',
    name: 'gift-edit',
    component (resolve) {
      require(["../../components/common/giftEdit.vue"], resolve)
    }
  },
  {
    // 发表
    path: '/comment-chat',
    name: 'comment-chat',
    component (resolve) {
      require(["../../components/common/comment-chat.vue"], resolve)
    }
  },
  {
    // 发表
    path: '/submit-comment',
    name: 'submit-comment',
    component (resolve) {
      require(["../../components/common/submit-comment.vue"], resolve)
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
    // 产品分类
    path: '/productCategory',
    name: 'productCategory',
    component (resolve) {
      require(["../../components/productCategory/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'product-list',
        component: resolve => require(["../../components/productCategory/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'detail',
        name: 'product-detail',
        component: resolve => require(["../../components/productCategory/itemDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'imgList',
        name: 'product-img',
        component: resolve => require(["../../components/productCategory/imgList.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 外呼工作
    path: '/nolineJob',
    name: 'nolineJob',
    component (resolve) {
      require(["../../components/nolineJob/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'noline-list',
        component: resolve => require(["../../components/nolineJob/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'nolineLog',
        name: 'log-list',
        component: resolve => require(["../../components/nolineJob/nolineLog.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'nolineDetail',
        name: 'noline-detail',
        component: resolve => require(["../../components/nolineJob/nolineDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'logDetail',
        name: 'log-detail',
        component: resolve => require(["../../components/nolineJob/logDetail.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
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
        name: 'article-list',
        component: resolve => require(["../../components/spreedArticle/itemList.vue"], resolve),
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
      },
      {
        path: 'offShell',
        name: 'off-shell',
        component: resolve => require(["../../components/spreedArticle/offShell.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'articleStatistics',
        name: 'article-statistics',
        component: resolve => require(["../../components/spreedArticle/articleStatistics.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 券营销活动
    path: '/marketCase',
    name: 'marketCase',
    component (resolve) {
      require(["../../components/marketCase/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'case-list',
        component: resolve => require(["../../components/marketCase/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'caseDetail',
        name: 'case-detail',
        component: resolve => require(["../../components/marketCase/caseDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'caseStatistics',
        name: 'case-statistics',
        component: resolve => require(["../../components/marketCase/caseStatistics.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'caseDate',
        name: 'case-date',
        component: resolve => require(["../../components/marketCase/caseDate.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'casePaket',
        name: 'case-paket',
        component: resolve => require(["../../components/marketCase/casePaket.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'caseWxspreed',
        name: 'case-wxspreed',
        component: resolve => require(["../../components/marketCase/caseWxspreed.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'casePushspreed',
        name: 'case-pushspreed',
        component: resolve => require(["../../components/marketCase/casePushspreed.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'caseNoline',
        name: 'case-noline',
        component: resolve => require(["../../components/marketCase/caseNoline.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'stopActivity',
        name: 'stop-activity',
        component: resolve => require(["../../components/marketCase/stopActivity.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 营销分析
    path: '/marketAnalyse',
    name: 'marketAnalyse',
    component (resolve) {
      require(["../../components/marketAnalyse/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'analyse-list',
        component: resolve => require(["../../components/marketAnalyse/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'analyseDetail',
        name: 'analyse-detail',
        component: resolve => require(["../../components/marketAnalyse/analyseDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'analyseNoline',
        name: 'analyse-noline',
        component: resolve => require(["../../components/marketAnalyse/analyseNoline.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'analyseWx',
        name: 'analyse-wx',
        component: resolve => require(["../../components/marketAnalyse/analyseWx.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'analysePush',
        name: 'analyse-push',
        component: resolve => require(["../../components/marketAnalyse/analysePush.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'analyseSpreed',
        name: 'analyse-spreed',
        component: resolve => require(["../../components/marketAnalyse/analyseSpreed.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 营销红包
    path: '/marketPacket',
    name: 'marketPacket',
    component (resolve) {
      require(["../../components/marketPacket/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'logo-list',
        component: resolve => require(["../../components/marketPacket/logoList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'giftPoints',
        name: 'gift-points',
        component: resolve => require(["../../components/marketPacket/giftPoints.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 推广注册
    path: '/promotionFranchise',
    name: 'promotionFranchise',
    component (resolve) {
      require(["../../components/promotionFranchise/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'spreed-join',
        component: resolve => require(["../../components/promotionFranchise/spreedJoin.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 在线预约
    path: '/onlineBooking',
    name: 'onlineBooking',
    component (resolve) {
      require(["../../components/onlineBooking/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'appointment-list',
        component: resolve => require(["../../components/onlineBooking/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'appointmentConfirm',
        name: 'appointment-confirm',
        component: resolve => require(["../../components/onlineBooking/appointmentConfirm.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'appointmentCustomer',
        name: 'appointment-customer',
        component: resolve => require(["../../components/onlineBooking/appointmentCustomer.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'pageConfirm',
        name: 'page-confirm',
        component: resolve => require(["../../components/onlineBooking/pageConfirm.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 我的会员
    path: '/member',
    name: 'member',
    component (resolve) {
      require(["../../components/member/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'member-list',
        component: resolve => require(["../../components/member/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'detail',
        name: 'member-detail',
        component: resolve => require(["../../components/member/itemDetail.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  },
  {
    // 营销任务
    path: '/marketTask',
    name: 'marketTask',
    component (resolve) {
      require(["../../components/marketTask/main.vue"], resolve)
    },
    children: [
      {
        path: '',
        name: 'task-list',
        component: resolve => require(["../../components/marketTask/itemList.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'activityTask',
        name: 'activity-task',
        component: resolve => require(["../../components/marketTask/activityTask.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'activityDetail',
        name: 'activity-detail',
        component: resolve => require(["../../components/marketTask/activityDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'editTask',
        name: 'edit-task',
        component: resolve => require(["../../components/marketTask/editTask.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'editDetail',
        name: 'edit-detail',
        component: resolve => require(["../../components/marketTask/editDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'spreedTask',
        name: 'spreed-task',
        component: resolve => require(["../../components/marketTask/spreedTask.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'spreedDetail',
        name: 'spreed-detail',
        component: resolve => require(["../../components/marketTask/spreedDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'pushTask',
        name: 'push-task',
        component: resolve => require(["../../components/marketTask/pushTask.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'pushDetail',
        name: 'push-detail',
        component: resolve => require(["../../components/marketTask/pushDetail.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'designTask',
        name: 'design-task',
        component: resolve => require(["../../components/marketTask/designTask.vue"], resolve),
        meta: {
          token:false
        }
      },
      {
        path: 'designDetail',
        name: 'design-detail',
        component: resolve => require(["../../components/marketTask/designDetail.vue"], resolve),
        meta: {
          token:false
        }
      }
    ]
  }
]

export default routers
