(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["join-page"],{"2cda":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"centered-form"},[n("div",{staticClass:"centered-form__box puff-in-center"},[n("h1",{staticClass:"u-text-center"},[e._v("Join")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.joinChat(t)}}},[n("label",[e._v("Nickname")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"Your nickname",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("label",[e._v("Room")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],attrs:{type:"text",name:"room",placeholder:"e.g Math, Travel, Academy, ...",required:""},domProps:{value:e.room},on:{input:function(t){t.target.composing||(e.room=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Join")])])])])},a=[],r={data:function(){return{username:"",room:""}},methods:{joinChat:function(){this.$router.push("/chat/".concat(this.username,"/").concat(this.room))}}},s=r,i=(n("89f6"),n("2877")),u=Object(i["a"])(s,o,a,!1,null,"340dfd55",null);t["default"]=u.exports},"39fd":function(e,t,n){},"89f6":function(e,t,n){"use strict";var o=n("39fd"),a=n.n(o);a.a}}]);
//# sourceMappingURL=join-page.9884e6a4.js.map