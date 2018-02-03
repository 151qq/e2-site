const platform = "/e2-site-api/";

export default{

    interfaces: {
        getServiceWechatUserInfo: platform + 'getServiceWechatUserInfo.json',
        getSignature: platform + 'getSignature.json',
        saveMemberInfo: platform + 'member/saveMemberInfo.json',
        sentSms: platform + 'customer/sentSms.json',
        checkCustome: platform + 'customer/checkCustomer.json',

        saveEnterpriseUserInfo: platform + 'site/user/saveEnterpriseUserInfo.json',
        corpWechatRedirectUrl: platform + 'corpWechatRedirectUrl.json',
        getSiteWechatUserInfo: platform + 'getSiteWechatUserInfo.json',
        /**
        * 推荐文章 get
        * key 搜索时使用，返回搜索相关数据
        */
        html5PageGet: platform + 'html5PageGet.json',
        listPageArea: platform + 'listPageArea.json',

        getTemplates: platform +'templateListPage.json',

        selectEscs: platform + 'eventScenarioCouponStore/selectEscs.json',

        commentList: platform + 'comment/commentList.json',
        publishComment: platform + 'comment/publishComment.json',
        replyComment: platform + 'comment/replyComment.json',
        deleteComment: platform + 'comment/deleteComment.json',
        countCommentGoodJob: platform + 'comment/countCommentGoodJob.json',
        countCommentBadJob: platform + 'comment/countCommentBadJob.json',

        getExtendPages: platform + 'htmlPageExtend/getExtendPages.json',

        /**
        * 推广 get
        */
        getChannelInfo: platform + 'organizePromoterInfo/selectOrganizePromoterInfo.json',
        updateChannel: platform + 'organizePromoterInfo/manageOrganizePromoterInfo.json',

        /**
        * 预约 get
        */
        selectAll: platform + 'reserveInfo/selectAll.json',

        /**
        * 地推 get
        */
        getPartyCouponGroup: platform + 'E2site/partyInfo/getPartyCouponGroup.json'
    }
}
