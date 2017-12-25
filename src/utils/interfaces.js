const platform = "/e2-platform-api/";

export default{

  interfaces: {
    "html5PageSearch": "html5SiteInfo/html5PageSearch.json",      //文章列表接口
    "uploadArticleAreaImage": platform + "siteEdit/uploadArticleAreaImage.json",   //图片上传接口
    "deleteDraftFile": "html5SiteInfo/deleteDraftFile.json",                       //文章删除接口,参数 html5PageCode,id
    "mediaList": "html5SiteInfo/mediaList.json",
    "getUserInfo": "getUserInfo.json",
    "getTemplateBytplCode": "siteTpl/getTemplateBytplCode.json",
    "templateList": "siteTpl/templateList.json",
    "draftArticle": "siteEdit/draftArticle.json",          //保存草草
    "saveArticleArea": "siteEdit/saveArticleArea.json",    //保存块
    "stockJson": platform+"/article/articleList.json",       //发布
    "taskJson": platform+"/task/list.json",        //任务
    "serviceJson": platform+"/mock/message.json",
    "wechatAuth": platform+"/authentication/wx468d884c0dc5251a/2.json",
    "findUserByWeCode": platform+"/findWechatUserByCode.json",
    "getWechatUserInfo": platform+"/getWechatUserInfo.json"
  }
}
