const platform = "/e2-site-api/";

export default{

    interfaces: {
        getServiceWechatUserInfo: platform + 'getServiceWechatUserInfo.json',
        getSignature: platform + 'getSignature.json',
        /**
        * 推荐文章 get
        * key 搜索时使用，返回搜索相关数据
        */
        html5PageGet: platform + 'html5PageGet.json',
        listPageArea: platform + 'listPageArea.json',

        getTemplates: platform +'templateListPage.json',

        commentList: platform + 'comment/commentList.json',
        publishComment: platform + 'comment/publishComment.json',
        replyComment: platform + 'comment/replyComment.json',
        deleteComment: platform + 'comment/deleteComment.json',
        countCommentGoodJob: platform + 'comment/countCommentGoodJob.json',
        countCommentBadJob: platform + 'comment/countCommentBadJob.json'
    }
}
