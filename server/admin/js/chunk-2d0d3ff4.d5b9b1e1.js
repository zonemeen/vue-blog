(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3ff4"],{"5ec1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("分类列表")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"480"}}),n("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(n){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(n){return e.remove(t.row._id)}}},[e._v("删除")])]}}])})],1)],1)},a=[],c=(n("96cf"),n("1da1")),i={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:n=t.sent,e.items=n.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$confirm("是否确定要删除该分类?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.delete("rest/categories/".concat(e));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return n.stop()}}),n)}))));case 1:case"end":return n.stop()}}),n)})))()}},created:function(){this.fetch()}},s=i,o=n("2877"),u=Object(o["a"])(s,r,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d3ff4.d5b9b1e1.js.map