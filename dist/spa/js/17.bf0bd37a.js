(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{b85c:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",{attrs:{flat:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("图文列表")])]),e("q-card-section",t._l(t.articles,(function(a,i){return e("q-card",{key:i,attrs:{flat:""}},[e("q-card-section",[e("a",{attrs:{href:"javascript: void(0)"},on:{click:function(a){return t.openDialog("article-image-selector-"+i)}}},[e("q-img",{staticClass:"q-hoverable",attrs:{src:t.$axios.defaults.baseURL+"/picture/"+a.PicFile,width:0===i&&t.articles.length>1?"300px":"120px",height:"120px"},scopedSlots:t._u([{key:"error",fn:function(){return[e("div",{staticClass:"absolute-full flex flex-center"},[t._v("\n                  选择封面\n                ")])]},proxy:!0}],null,!0)})],1),e("ImageSelector",{ref:"article-image-selector-"+i,refInFor:!0,model:{value:a.PicFile,callback:function(e){t.$set(a,"PicFile",e)},expression:"article.PicFile"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"标题"},model:{value:a.Title,callback:function(e){t.$set(a,"Title",e)},expression:"article.Title"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"描述"},model:{value:a.Description,callback:function(e){t.$set(a,"Description",e)},expression:"article.Description"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"地址"},model:{value:a.Url,callback:function(e){t.$set(a,"Url",e)},expression:"article.Url"}})],1),e("q-card-actions",{attrs:{align:"around"}},[e("q-btn",{attrs:{icon:"remove",flat:""},on:{click:function(a){return t.articles.splice(i,1)}}})],1)],1)})),1),e("q-card-actions",{attrs:{align:"around"}},[t.articles.length<8?e("q-btn",{attrs:{icon:"add",color:"primary",flat:""},on:{click:function(a){t.articles.push(t.initArticle())}}}):t._e(),e("q-btn",{attrs:{icon:"delete",flat:"",color:"warning"},on:{click:t.delArticles}}),e("q-btn",{attrs:{icon:"check",flat:"",color:"primary"},on:{click:t.saveArticles}})],1)],1),e("q-card",{attrs:{flat:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("小程序卡片")])]),e("q-card-section",t._l(t.cards,(function(a,i){return e("q-card",{key:i,attrs:{flat:""}},[e("q-card-section",[e("a",{attrs:{href:"javascript: void(0)"},on:{click:function(a){return t.openDialog("card-image-selector-"+i)}}},[e("q-img",{staticClass:"q-hoverable",attrs:{src:t.$axios.defaults.baseURL+"/picture/"+a.ThumbMediaFilename,width:"100px",height:"120px"},scopedSlots:t._u([{key:"error",fn:function(){return[e("div",{staticClass:"absolute-full flex flex-center"},[t._v("\n                  选择封面\n                ")])]},proxy:!0}],null,!0)})],1),e("ImageSelector",{ref:"card-image-selector-"+i,refInFor:!0,model:{value:a.ThumbMediaFilename,callback:function(e){t.$set(a,"ThumbMediaFilename",e)},expression:"card.ThumbMediaFilename"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"小程序标题"},model:{value:a.Title,callback:function(e){t.$set(a,"Title",e)},expression:"card.Title"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"小程序 appid"},scopedSlots:t._u([{key:"hint",fn:function(){return[t._v("\n              小程序需要与公众号关联\n            ")]},proxy:!0}],null,!0),model:{value:a.Appid,callback:function(e){t.$set(a,"Appid",e)},expression:"card.Appid"}})],1),e("q-card-section",[e("q-input",{attrs:{label:"小程序地址"},model:{value:a.PagePath,callback:function(e){t.$set(a,"PagePath",e)},expression:"card.PagePath"}})],1),e("q-card-actions",{attrs:{align:"around"}},[e("q-btn",{attrs:{icon:"remove",flat:""},on:{click:function(a){return t.cards.splice(i,1)}}})],1)],1)})),1),e("q-card-actions",{attrs:{align:"around"}},[t.articles.length<8?e("q-btn",{attrs:{icon:"add",flat:"",color:"primary"},on:{click:function(a){t.cards.push(t.initCard())}}}):t._e(),e("q-btn",{attrs:{icon:"delete",flat:"",color:"warning"},on:{click:t.delCard}}),e("q-btn",{attrs:{icon:"check",flat:"",color:"primary"},on:{click:t.saveCard}})],1)],1)],1)},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("q-card",[e("q-card-section",[e("q-form",{on:{submit:t.uploadImage}},[e("q-file",{attrs:{name:"picture",filled:"",multiple:"","use-chips":"",label:"选择上传文件",accept:".jpg, .png, image/*"},model:{value:t.files,callback:function(a){t.files=a},expression:"files"}}),e("div",{staticClass:"q-mt-lg"},[e("q-btn",{attrs:{label:"提交上传",type:"submit",color:"primary",disable:!t.files}})],1)],1)],1),e("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"60vh"}},[e("div",{staticClass:"q-pa-md row items-start q-gutter-md"},t._l(t.images,(function(a,i){return e("q-card",{key:a.ID},[e("q-img",{staticClass:"col",attrs:{src:t.$axios.defaults.baseURL+"/picture/"+a.File},scopedSlots:t._u([{key:"error",fn:function(){return[e("div",{staticClass:"absolute-full flex flex-center"},[t._v("\n                error!\n              ")])]},proxy:!0}],null,!0)}),e("q-card-actions",{attrs:{align:"around"}},[e("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(e){return t.delImage(a.ID,i)}}}),e("q-btn",{attrs:{flat:"",icon:"check"},on:{click:function(e){t.selected=a.File}}})],1)],1)})),1)]),t.pagination.Total?e("q-card-section",[e("q-pagination",{attrs:{max:t.maxPage,input:!0},model:{value:t.current,callback:function(a){t.current=a},expression:"current"}})],1):t._e(),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"取消",color:"primary"}})],1)],1)],1)},r=[],l=(e("a434"),e("ddb0"),{props:["value"],data(){return{images:[],dialog:!1,files:null,selected:null,image:{ID:0,File:"",Url:""},pagination:{Limit:10,Offset:0,Total:0},current:1}},computed:{maxPage(){return Math.ceil(this.pagination.Total/this.pagination.Limit)}},created(){console.log(this.$axios.defaults),this.count()},watch:{current(t){this.pagination.Offset=this.Limit*t,this.getImages()},selected(t){this.$emit("input",t),this.dialog=!1}},methods:{count(){this.$axios.get("/big-picture/count").then((t=>{t=t.data,t&&t.Data&&(this.pagination.Total=t.Data,this.getImages())}))},uploadImage(t){const a=new FormData(t.target);this.loading=!0,this.$axios.put("/big-pictures",a).then((t=>{if(t=t.data,t&&t.Data){for(const a of t.Data)this.images.splice(0,0,a);this.pagination.Total+=t.Data.length}}))},delImage(t,a){this.$axios.delete("/big-pictures",{params:{IDs:[t]}}).then((t=>{t=t.data,(t&&t.Data||0===t.Data)&&(this.pagination.Total=t.Data),this.images.splice(a,1)}))},getImages(){this.$axios.get("/big-pictures",{params:this.pagination}).then((t=>{t=t.data,t&&t.Data&&this.images.splice(0,this.images.length,...t.Data)}))},openDialog(){this.dialog=!0}}}),c=l,o=e("2877"),d=e("24e8"),u=e("f09f"),p=e("a370"),g=e("0378"),h=e("7d53"),m=e("9c40"),f=e("068f"),q=e("4b7e"),b=e("3b16"),x=e("7f67"),v=e("eebe"),k=e.n(v),$=Object(o["a"])(c,n,r,!1,null,"4b79ac0f",null),D=$.exports;k()($,"components",{QDialog:d["a"],QCard:u["a"],QCardSection:p["a"],QForm:g["a"],QFile:h["a"],QBtn:m["a"],QImg:f["a"],QCardActions:q["a"],QPagination:b["a"]}),k()($,"directives",{ClosePopup:x["a"]});var C={name:"Index",components:{ImageSelector:D},data(){return{cards:[],initCard(){return{Title:"",Appid:"",PagePath:"",ThumbMediaFilename:""}},articles:[],initArticle(){return{Title:"",Description:"",Url:"",PicFile:""}}}},created(){this.getCard(),this.getArticles()},methods:{openDialog(t){this.$refs[t][0].openDialog()},getCard(){this.$axios.get("/mini-program-card").then((t=>{t=t.data,t&&t.Data&&(this.cards=t.Data)}))},saveCard(){this.$axios.put("/mini-program-card",this.cards).then((t=>{t=t.data,t&&t.Message&&this.$q.notify(t.Message)}))},delCard(){this.$q.dialog({title:"⚠️ 警告",message:"删除所有小程序卡片?",cancel:!0,persistent:!0}).onOk((()=>{this.$axios.delete("/mini-program-card").then((t=>{t=t.data,t&&t.Message&&(this.$q.notify(t.Message),this.cards=[])}))}))},getArticles(){this.$axios.get("/articles").then((t=>{t=t.data,t&&t.Data&&(this.articles=t.Data)}))},saveArticles(){this.$axios.put("/articles",this.articles).then((t=>{t=t.data,t&&t.Message&&this.$q.notify(t.Message)}))},delArticles(){this.$q.dialog({title:"⚠️ 警告",message:"删除所有图文消息?",cancel:!0,persistent:!0}).onOk((()=>{this.$axios.delete("/articles").then((t=>{t=t.data,t&&t.Message&&(this.$q.notify(t.Message),this.articles=[])}))}))}}},y=C,I=e("9989"),_=e("27f9"),T=Object(o["a"])(y,i,s,!1,null,"2a21419a",null);a["default"]=T.exports;k()(T,"components",{QPage:I["a"],QCard:u["a"],QCardSection:p["a"],QImg:f["a"],QInput:_["a"],QCardActions:q["a"],QBtn:m["a"]})}}]);