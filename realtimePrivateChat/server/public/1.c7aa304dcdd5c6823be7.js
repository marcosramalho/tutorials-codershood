(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TbC0:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),s=function(){},u=e("pMnS"),a=e("Ip0R"),i=e("iPoy"),r=e("58qO"),o=e("26FU"),c=function(){function n(){this.userId=null,this.userName=null,this.user=new o.a(null),this.selectedUser=this.user.asObservable()}return n.prototype.changeSelectedUser=function(n){this.user.next(n)},n.prototype.getUserId=function(){return null===this.userId&&(this.userId=localStorage.getItem("userid")),this.userId},n.prototype.getUserName=function(){return null===this.userName&&(this.userName=localStorage.getItem("username")),this.userName},n.ngInjectableDef=t.W({factory:function(){return new n},token:n,providedIn:"root"}),n}(),g=function(n,l,e,t){return new(e||(e=Promise))(function(s,u){function a(n){try{r(t.next(n))}catch(n){u(n)}}function i(n){try{r(t.throw(n))}catch(n){u(n)}}function r(n){n.done?s(n.value):new e(function(l){l(n.value)}).then(a,i)}r((t=t.apply(n,l||[])).next())})},h=function(n,l){var e,t,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,t&&(s=t[2&u[0]?"return":u[0]?"throw":"next"])&&!(s=s.call(t,u[1])).done)return s;switch(t=0,s&&(u=[0,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(s=(s=a.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){a.label=u[1];break}if(6===u[0]&&a.label<s[1]){a.label=s[1],s=u;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(u);break}s[2]&&a.ops.pop(),a.trys.pop();continue}u=l.call(n,a)}catch(n){u=[6,n],t=0}finally{e=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},d=function(){function n(n,l,e,t){this.chatService=n,this.socketService=l,this.router=e,this.dataShareService=t,this.loading=!0,this.userId=null,this.selectedUserId=null,this.chatListUsers=[]}return n.prototype.ngOnInit=function(){var n=this;this.loading=!0,this.userId=this.dataShareService.getUserId(),this.socketService.getChatList(this.userId).subscribe(function(l){n.renderChatList(l)})},n.prototype.renderChatList=function(n){var l=this;if(n.error)alert("Unable to load Chat list, Redirecting to Login."),this.chatService.removeLS().then(function(n){return g(l,void 0,void 0,function(){return h(this,function(n){switch(n.label){case 0:return[4,this.router.navigate(["/"])];case 1:return n.sent(),this.loading=!1,[2]}})})}).catch(function(n){return g(l,void 0,void 0,function(){return h(this,function(l){switch(l.label){case 0:return alert(" This App is Broken, we are working on it. try after some time."),[4,this.router.navigate(["/"])];case 1:return l.sent(),console.warn(n),this.loading=!1,[2]}})})});else{if(n.singleUser)this.chatListUsers.length>0&&(this.chatListUsers=this.chatListUsers.filter(function(l){return parseInt(l.id)!==parseInt(n.chatList.id)})),this.chatListUsers=this.chatListUsers.concat(n.chatList);else if(n.userDisconnected){var e=this.chatListUsers.findIndex(function(l){return l.id==n.userid.toString()});e>=0&&(this.chatListUsers[e].online="N")}else n.chatList.map(function(e){parseInt(e.id)===parseInt(l.userId)&&parseInt(e.id)!==parseInt(n.chatList.id)||l.chatListUsers.push(e)});this.loading=!1}},n.prototype.isUserSelected=function(n){return!!this.selectedUserId&&this.selectedUserId===n},n.prototype.selectedUser=function(n){this.selectedUserId=n.id,this.dataShareService.changeSelectedUser(n)},n}(),p=e("ZYCi"),b=t.Ra({encapsulation:0,styles:[[".user-list[_ngcontent-%COMP%]{padding:0;margin:0;list-style-type:none}.user-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 11px;margin-bottom:10px;text-transform:capitalize;background:rgba(215,234,255,.28)}.user-list[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:0 6px 30px rgba(0,0,0,.1);background:rgba(153,202,255,.49);border:0!important}.online[_ngcontent-%COMP%]{height:15px;width:15px;border-radius:10px;background-color:#00ff2a;float:right;margin-top:.5vh}.offline[_ngcontent-%COMP%]{height:15px;width:15px;border-radius:10px;background-color:red;float:right;margin-top:.5vh}.alert[_ngcontent-%COMP%]{text-align:center!important}"]],data:{}});function f(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,3,"li",[],[[2,"active",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.selectedUser(n.context.$implicit)&&t),t},null,null)),(n()(),t.ib(1,null,[" "," "])),(n()(),t.Ta(2,0,null,null,1,"span",[],null,null,null,null,null)),t.Sa(3,278528,null,0,a.i,[t.v,t.w,t.l,t.G],{ngClass:[0,"ngClass"]},null)],function(n,l){n(l,3,0,"Y"===l.context.$implicit.online?"online":"offline")},function(n,l){n(l,0,0,l.component.isUserSelected(l.context.$implicit.id)),n(l,1,0,l.context.$implicit.username)})}function m(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,1,"div",[["alert-info.class","!loading"],["class","alert"]],null,null,null,null,null)),(n()(),t.ib(1,null,[" ","\n"]))],null,function(n,l){var e=l.component;n(l,1,0,e.loading&&0===e.chatListUsers.length?"Loading your chat list.":"No User Avilable to chat.")})}function v(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,2,"ul",[["class","user-list"]],null,null,null,null,null)),(n()(),t.Ka(16777216,null,null,1,null,f)),t.Sa(2,278528,null,0,a.j,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Ka(16777216,null,null,1,null,m)),t.Sa(4,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.chatListUsers),n(l,4,0,0===e.chatListUsers.length)},null)}var y=e("gIcY"),S=e("fLD/"),I=function(){function n(n,l,e,t,s){this.router=n,this.chatService=l,this.socketService=e,this.formService=t,this.dataShareService=s,this.messageLoading=!0,this.userId=null,this.selectedUser=null,this.messages=[],this.messageForm=this.formService.createMessageForm()}return n.prototype.ngOnInit=function(){var n=this;this.userId=this.dataShareService.getUserId(),this.listenForMessages(),this.dataShareService.selectedUser.subscribe(function(l){null!==l&&(n.selectedUser=l,n.getMessages(n.selectedUser.id))})},n.prototype.getMessages=function(n){var l=this;this.messageLoading=!0,this.chatService.getMessages({userId:this.userId,toUserId:n}).subscribe(function(n){l.messages=n.messages,l.messageLoading=!1})},n.prototype.listenForMessages=function(){var n=this;this.socketService.receiveMessages().subscribe(function(l){null!==n.selectedUser&&n.selectedUser.id==l.fromUserId&&(n.messages=n.messages.concat([l]),n.scrollMessageContainer())})},n.prototype.sendMessage=function(n){if(13===n.keyCode){var l=this.messageForm.controls.message.value.trim();""===l||void 0===l||null===l?alert("Message can't be empty."):""===this.userId?this.router.navigate(["/"]):""===this.selectedUser.id?alert("Select a user to chat."):this.sendAndUpdateMessages({fromUserId:this.userId,message:l.trim(),toUserId:this.selectedUser.id})}},n.prototype.sendAndUpdateMessages=function(n){try{this.messageForm.disable(),this.socketService.sendMessage(n),this.messages=this.messages.concat([n]),this.messageForm.reset(),this.messageForm.enable(),this.scrollMessageContainer()}catch(n){console.warn(n),alert("Can't send your message")}},n.prototype.scrollMessageContainer=function(){var n=this;if(void 0!==this.messageContainer)try{setTimeout(function(){n.messageContainer.nativeElement.scrollTop=n.messageContainer.nativeElement.scrollHeight},100)}catch(n){console.warn(n)}},n.prototype.alignMessage=function(n){return this.userId!=n},n}(),x=t.Ra({encapsulation:0,styles:[[".massege-wrapper[_ngcontent-%COMP%]{height:100%}.massege-container[_ngcontent-%COMP%]{height:80%}.message-typer[_ngcontent-%COMP%]{height:20%}.opposite-user[_ngcontent-%COMP%]{background-color:rgba(0,123,255,.4);color:#fff;text-align:center;position:absolute;left:0;right:0;margin-left:15px;margin-right:15px;border:1px solid #007bff;box-shadow:0 6px 30px rgba(0,0,0,.1)}.message-overlay[_ngcontent-%COMP%]{height:100%;width:100%;background-color:rgba(255,255,255,.82);position:absolute;z-index:1;text-align:center;padding-top:200px}.sub-heading[_ngcontent-%COMP%]{font-size:20px;color:rgba(0,123,255)}.message-thread[_ngcontent-%COMP%]{overflow-y:scroll;list-style-type:none;height:100%;min-height:300px;width:100%;border:1px solid #bdbdbd;margin:0!important;padding:5px!important}.start-chatting-banner[_ngcontent-%COMP%]{padding-top:25%!important;text-align:center}.message-thread[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{clear:both;text-decoration:none;list-style-type:none;margin:20px 20px 0;float:left;padding:25px 34px;min-width:160px;min-height:10px;max-width:350px;border-radius:5px;border:1px solid #007bff;line-height:1.4;word-wrap:break-word;color:#444;text-align:left;background-color:rgba(0,123,255,.07)}.align-right[_ngcontent-%COMP%]{float:right!important;text-align:right}.message-typer[_ngcontent-%COMP%]{padding-top:20px}"]],data:{}});function C(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,2,"div",[["class","message-overlay"]],null,null,null,null,null)),(n()(),t.Ta(1,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.ib(2,null,[" ",""]))],null,function(n,l){var e=l.component;n(l,2,0,null!==e.selectedUser&&e.selectedUser.username?"Carregando Mensagens":" Selecione um usu\xe1rio para conversar.")})}function k(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,1,"div",[["class","opposite-user"]],null,null,null,null,null)),(n()(),t.ib(1,null,[" Conversando com o "," "]))],null,function(n,l){n(l,1,0,l.component.selectedUser.username)})}function w(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,1,"li",[],[[2,"align-right",null]],null,null,null,null)),(n()(),t.ib(1,null,[" "," "]))],null,function(n,l){n(l,0,0,l.component.alignMessage(l.context.$implicit.toUserId)),n(l,1,0,l.context.$implicit.message)})}function U(n){return t.jb(0,[(n()(),t.Ta(0,0,[[1,0],["messageThread",1]],null,2,"ul",[["class","message-thread"]],null,null,null,null,null)),(n()(),t.Ka(16777216,null,null,1,null,w)),t.Sa(2,278528,null,0,a.j,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.messages)},null)}function M(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,4,"div",[["class","message-thread start-chatting-banner"]],null,null,null,null,null)),(n()(),t.Ta(1,0,null,null,3,"p",[["class","heading"]],null,null,null,null,null)),(n()(),t.ib(2,null,[" Voc\xea ainda n\xe3o conversou com o ",", "])),(n()(),t.Ta(3,0,null,null,1,"span",[["class","sub-heading"]],null,null,null,null,null)),(n()(),t.ib(-1,null,["Diga Oi."]))],null,function(n,l){n(l,2,0,l.component.selectedUser.username)})}function P(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,20,"div",[["class","massege-wrapper"]],null,null,null,null,null)),(n()(),t.Ta(1,0,null,null,6,"div",[["class","massege-container"]],null,null,null,null,null)),(n()(),t.Ka(16777216,null,null,1,null,k)),t.Sa(3,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.Ka(16777216,null,null,1,null,U)),t.Sa(5,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.Ka(16777216,null,null,1,null,M)),t.Sa(7,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.Ta(8,0,null,null,12,"div",[["class","message-typer"]],null,null,null,null,null)),(n()(),t.Ta(9,0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0;return"submit"===l&&(s=!1!==t.db(n,11).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.db(n,11).onReset()&&s),s},null,null)),t.Sa(10,16384,null,0,y.q,[],null,null),t.Sa(11,540672,null,0,y.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.fb(2048,null,y.b,null,[y.f]),t.Sa(13,16384,null,0,y.l,[[4,y.b]],null,null),(n()(),t.Ta(14,0,null,null,6,"textarea",[["class","message form-control"],["formControlName","message"],["placeholder","Digite e aperte Enter"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var s=!0,u=n.component;return"input"===l&&(s=!1!==t.db(n,15)._handleInput(e.target.value)&&s),"blur"===l&&(s=!1!==t.db(n,15).onTouched()&&s),"compositionstart"===l&&(s=!1!==t.db(n,15)._compositionStart()&&s),"compositionend"===l&&(s=!1!==t.db(n,15)._compositionEnd(e.target.value)&&s),"keyup"===l&&(s=!1!==u.sendMessage(e)&&s),s},null,null)),t.Sa(15,16384,null,0,y.c,[t.G,t.l,[2,y.a]],null,null),t.fb(1024,null,y.i,function(n){return[n]},[y.c]),t.Sa(17,671744,null,0,y.e,[[3,y.b],[8,null],[8,null],[6,y.i],[2,y.s]],{name:[0,"name"]},null),t.fb(2048,null,y.j,null,[y.e]),t.Sa(19,16384,null,0,y.k,[[4,y.j]],null,null),(n()(),t.ib(-1,null,["\t\t\t"]))],function(n,l){var e=l.component;n(l,3,0,null!=e.selectedUser&&e.selectedUser.username),n(l,5,0,0!==e.messages.length),n(l,7,0,0===e.messages.length),n(l,11,0,e.messageForm),n(l,17,0,"message")},function(n,l){n(l,9,0,t.db(l,13).ngClassUntouched,t.db(l,13).ngClassTouched,t.db(l,13).ngClassPristine,t.db(l,13).ngClassDirty,t.db(l,13).ngClassValid,t.db(l,13).ngClassInvalid,t.db(l,13).ngClassPending),n(l,14,0,t.db(l,19).ngClassUntouched,t.db(l,19).ngClassTouched,t.db(l,19).ngClassPristine,t.db(l,19).ngClassDirty,t.db(l,19).ngClassValid,t.db(l,19).ngClassInvalid,t.db(l,19).ngClassPending)})}function T(n){return t.jb(0,[t.gb(671088640,1,{messageContainer:0}),(n()(),t.Ka(16777216,null,null,1,null,C)),t.Sa(2,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.Ka(16777216,null,null,1,null,P)),t.Sa(4,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.messageLoading),n(l,4,0,!e.messageLoading)},null)}var O=function(){function n(n,l,e,t){this.chatService=n,this.socketService=l,this.dataShareService=e,this.router=t,this.userId=null,this.username=null,this.overlayDisplay=!0}return n.prototype.ngOnInit=function(){this.userId=this.dataShareService.getUserId(),this.username=this.dataShareService.getUserName(),this.establishSocketConnection()},n.prototype.establishSocketConnection=function(){return n=this,void 0,e=function(){return function(n,l){var e,t,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,t&&(s=t[2&u[0]?"return":u[0]?"throw":"next"])&&!(s=s.call(t,u[1])).done)return s;switch(t=0,s&&(u=[0,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,t=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(s=(s=a.trys).length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){a.label=u[1];break}if(6===u[0]&&a.label<s[1]){a.label=s[1],s=u;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(u);break}s[2]&&a.ops.pop(),a.trys.pop();continue}u=l.call(n,a)}catch(n){u=[6,n],t=0}finally{e=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),""!==this.userId&&void 0!==this.userId&&null!==this.userId?[3,1]:(this.router.navigate(["/"]),[3,3]);case 1:return[4,this.socketService.connectSocket(this.userId)];case 2:n.sent(),this.overlayDisplay=!1,n.label=3;case 3:return[3,5];case 4:return n.sent(),alert("Something went wrong"),[3,5];case 5:return[2]}})},new((l=void 0)||(l=Promise))(function(t,s){function u(n){try{i(e.next(n))}catch(n){s(n)}}function a(n){try{i(e.throw(n))}catch(n){s(n)}}function i(n){n.done?t(n.value):new l(function(l){l(n.value)}).then(u,a)}i((e=e.apply(n,[])).next())});var n,l,e},n.prototype.logout=function(){var n=this;this.chatService.removeLS().then(function(l){n.socketService.logout({userId:n.userId}).subscribe(function(l){n.router.navigate(["/"])})}).catch(function(n){throw alert(" This App is Broken, we are working on it. try after some time."),n})},n}(),L=t.Ra({encapsulation:0,styles:[[".app-header[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:1.5vh 5vh;height:10vh}.app-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{float:left}.content[_ngcontent-%COMP%]{height:70vh;margin-top:5vh}.chat-content[_ngcontent-%COMP%]{height:100%}.chat-list-container[_ngcontent-%COMP%]{padding:25px 15px;height:100%;box-shadow:0 6px 30px rgba(0,0,0,.1)}.message-container[_ngcontent-%COMP%]{height:100%}"]],data:{}});function _(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,2,"div",[["class","overlay"]],null,null,null,null,null)),(n()(),t.Ta(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.ib(-1,null,["Loading"]))],null,null)}function j(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,7,"main",[["class","container content"],["role","main"]],null,null,null,null,null)),(n()(),t.Ta(1,0,null,null,6,"div",[["class","row chat-content"]],null,null,null,null,null)),(n()(),t.Ta(2,0,null,null,2,"div",[["class","col-3 chat-list-container"]],null,null,null,null,null)),(n()(),t.Ta(3,0,null,null,1,"app-chat-list",[],null,null,null,v,b)),t.Sa(4,114688,null,0,d,[i.a,r.a,p.k,c],null,null),(n()(),t.Ta(5,0,null,null,2,"div",[["class","col-8 message-container"]],null,null,null,null,null)),(n()(),t.Ta(6,0,null,null,1,"app-conversation",[],null,null,null,T,x)),t.Sa(7,114688,null,0,I,[p.k,i.a,r.a,S.a,c],null,null)],function(n,l){n(l,4,0),n(l,7,0)},null)}function F(n){return t.jb(0,[(n()(),t.Ka(16777216,null,null,1,null,_)),t.Sa(1,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.Ta(2,0,null,null,7,"header",[["class","app-header"]],null,null,null,null,null)),(n()(),t.Ta(3,0,null,null,2,"nav",[["class","navbar navbar-expand-md"]],null,null,null,null,null)),(n()(),t.Ta(4,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),t.ib(5,null,["Ol\xe1 ",""])),(n()(),t.Ta(6,0,null,null,3,"ul",[["class","nav justify-content-end"]],null,null,null,null,null)),(n()(),t.Ta(7,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),t.Ta(8,0,null,null,1,"a",[["class","nav-link active"],["href","#"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.logout()&&t),t},null,null)),(n()(),t.ib(-1,null,["Sair"])),(n()(),t.Ka(16777216,null,null,1,null,j)),t.Sa(11,16384,null,0,a.k,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.overlayDisplay),n(l,11,0,!e.overlayDisplay)},function(n,l){n(l,5,0,l.component.username)})}var D=t.Pa("app-home",O,function(n){return t.jb(0,[(n()(),t.Ta(0,0,null,null,1,"app-home",[],null,null,null,F,L)),t.Sa(1,114688,null,0,O,[i.a,r.a,c,p.k],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),K=e("9AJC"),N=e("4GxJ"),A=function(){},G=e("MD/u"),R=e("Y2m1"),E=function(){},$=function(){};e.d(l,"HomeModuleNgFactory",function(){return z});var z=t.Qa(s,[],function(n){return t.ab([t.bb(512,t.k,t.Fa,[[8,[u.a,D,K.a,K.b,K.i,K.e,K.f,K.g,K.h]],[3,t.k],t.A]),t.bb(4608,a.m,a.l,[t.x,[2,a.y]]),t.bb(4608,y.r,y.r,[]),t.bb(4608,N.t,N.t,[t.k,t.t,N.T,N.u]),t.bb(4608,y.d,y.d,[]),t.bb(1073742336,a.b,a.b,[]),t.bb(1073742336,p.l,p.l,[[2,p.r],[2,p.k]]),t.bb(1073742336,A,A,[]),t.bb(1073742336,N.c,N.c,[]),t.bb(1073742336,N.f,N.f,[]),t.bb(1073742336,N.g,N.g,[]),t.bb(1073742336,N.k,N.k,[]),t.bb(1073742336,N.l,N.l,[]),t.bb(1073742336,y.p,y.p,[]),t.bb(1073742336,y.g,y.g,[]),t.bb(1073742336,N.q,N.q,[]),t.bb(1073742336,N.r,N.r,[]),t.bb(1073742336,N.v,N.v,[]),t.bb(1073742336,N.z,N.z,[]),t.bb(1073742336,N.A,N.A,[]),t.bb(1073742336,N.D,N.D,[]),t.bb(1073742336,N.G,N.G,[]),t.bb(1073742336,N.L,N.L,[]),t.bb(1073742336,N.P,N.P,[]),t.bb(1073742336,N.Q,N.Q,[]),t.bb(1073742336,N.R,N.R,[]),t.bb(1073742336,N.w,N.w,[]),t.bb(1073742336,G.a,G.a,[]),t.bb(1073742336,y.n,y.n,[]),t.bb(1073742336,R.a,R.a,[]),t.bb(1073742336,E,E,[]),t.bb(1073742336,$,$,[]),t.bb(1073742336,s,s,[]),t.bb(1024,p.i,function(){return[[{path:"",component:O},{path:"**",redirectTo:""}]]},[])])})}}]);