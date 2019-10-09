(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),l=(a(25),a(12)),i=a(13),o=a(14),u=a(18),d=a(15),m=a(19),p=a(1),f=a(2),k=a(4),b=a.n(k),E=a(16),v=a(17),h=a.n(v),_=(a(27),h.a.initializeApp({apiKey:"AIzaSyDj_CTwpr7_bhQoHnvOtP0Ag8P8ip7L8-Q",authDomain:"todo-app-217a2.firebaseapp.com",databaseURL:"https://todo-app-217a2.firebaseio.com",projectId:"todo-app-217a2",storageBucket:"todo-app-217a2.appspot.com",messagingSenderId:"440756000946",appId:"1:440756000946:web:f3abb34d419d0603cc51ab",measurementId:"G-FJW0NN9MVK"})),N=function(e){return _.firestore().collection(e)};var g=function(e){var t=e.id,a=Object(n.useState)(!1),c=Object(p.a)(a,2),r=c[0],l=c[1],i=function(){var e=Object(E.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("tasks").where("listId","==",t).get().then((function(e){e.forEach((function(e){return e.ref.delete()}))}));case 3:return e.next=5,N("lists").doc(t).delete();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(e){e.stopPropagation(),l(!r)};return s.a.createElement("div",null,s.a.createElement("span",{className:r?"active sidebar__list-delete":"sidebar__list-delete",onClick:o},s.a.createElement(f.e,null)),r&&s.a.createElement("div",{className:"delete-modal"},s.a.createElement("div",{className:"delete-modal__content"},s.a.createElement("p",null,"Are you sure you want to delete this list?"),s.a.createElement("button",{onClick:function(){return i(t)}},"Delete"),s.a.createElement("span",{onClick:o},"Cancel"))))};var O=function(e){var t=e.changed,a=e.input,c=Object(n.useState)(!1),r=Object(p.a)(c,2),l=r[0],i=r[1];return s.a.createElement("div",{className:"addList"},l&&s.a.createElement("div",{className:"addList__content"},s.a.createElement("input",{value:a,onChange:function(e){return t(e.target.value,"list")},className:"addList__input",type:"text",placeholder:"Enter new list name"}),s.a.createElement("button",{className:"addList__button",onClick:function(){return e=a,void(a&&N("lists").add({listName:e}).then((function(){t("","list"),i(!1)})));var e}},"Add"),s.a.createElement("span",{className:"addList__cancel",onClick:function(){return i(!1)}},"Cancel")),s.a.createElement("span",{className:"addList__icon"},s.a.createElement(f.b,null)),s.a.createElement("span",{className:"addList__text",onClick:function(){return i(!l)}},"Add new List!"))};function j(e){var t=e.select,a=e.lists,c=e.active,r=e.changed,l=e.input,i=Object(n.useState)(!0),o=Object(p.a)(i,2),u=o[0],d=o[1];return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__list-dropdown",onClick:function(){return d(!u)}},s.a.createElement("span",null,s.a.createElement(f.a,{className:!u&&"hide-lists"})),s.a.createElement("h2",null,"Lists")),u&&s.a.createElement("ul",{className:"sidebar__lists",onClick:t},a.map((function(e){return s.a.createElement("li",{key:e.docId,value:e.docId,className:c&&c.toString()===e.docId?"active sidebar__list":"sidebar__list"},e.listName,s.a.createElement(g,{id:e.docId}))}))),s.a.createElement(O,{changed:r,input:l}))}var y=a(5);function C(e){var t=e.id,a=e.filter,c=e.select,r=Object(n.useState)(!1),l=Object(p.a)(r,2),i=l[0],o=l[1];return s.a.createElement("div",{className:"checkbox-div"},"current"===a?s.a.createElement("span",{className:"checkbox",onClick:function(){N("tasks").doc(t).update({done:!0})}},s.a.createElement(f.d,null)):s.a.createElement("span",{className:"checkbox",onClick:function(){c(t),o(!i)}},i?s.a.createElement(f.c,null):s.a.createElement(f.d,null)))}var w=function(e){var t=e.list,a=e.changed,c=e.input,r=Object(n.useState)(!1),l=Object(p.a)(r,2),i=l[0],o=l[1];return s.a.createElement("div",{className:"addTask"},i&&s.a.createElement("div",{className:"addTask__content"},s.a.createElement("input",{value:c,onChange:function(e){return a(e.target.value,"task")},className:"addTask__input",type:"text",placeholder:"Enter new Task"}),s.a.createElement("button",{className:"addTask__button",onClick:function(){return e=c,void(t&&N("tasks").add({done:!1,listId:t,task:e}).then((function(){a("","task"),o(!1)})));var e}},"Add"),s.a.createElement("span",{className:"addTask__cancel",onClick:function(){return o(!1)}},"Cancel")),s.a.createElement("span",{className:"addTask__icon"},s.a.createElement(f.b,null)),s.a.createElement("span",{className:"addTask__text",onClick:function(){return o(!i)}},"Add new Task!"))};function I(e){var t=e.tasks,a=e.doneTasks,c=e.listName,r=e.list,l=e.changed,i=e.input,o=Object(n.useState)("current"),u=Object(p.a)(o,2),d=u[0],m=u[1],f=Object(n.useState)([]),k=Object(p.a)(f,2),b=k[0],E=k[1],v=function(e){m(e.target.value)},h=function(e){return d===e?"active tasks__filter-".concat(e):"tasks__filter-".concat(e)},_=function(e){if(b.includes(e)){var t=b.filter((function(t){return t!==e}));E(Object(y.a)(t))}else E([].concat(Object(y.a)(b),[e]))},g=function(e,t){var a=e.map(t);Promise.all(a).then((function(){E([]),m("current")}))};return s.a.createElement("div",{className:"tasks"},s.a.createElement("h2",{className:"list-name"},c),r&&s.a.createElement("div",null,s.a.createElement("button",{className:h("current"),value:"current",onClick:v},"Current"),s.a.createElement("button",{className:h("done"),value:"done",onClick:v},"Done")),s.a.createElement("ul",{className:"tasks__list"},"current"===d?t.map((function(e){return s.a.createElement("li",{key:e.docId},s.a.createElement(C,{id:e.docId,filter:d}),s.a.createElement("span",null,e.task))})):a.map((function(e){return s.a.createElement("li",{key:e.docId},s.a.createElement(C,{id:e.docId,filter:d,select:_}),s.a.createElement("span",{className:"tasks__list-done"},e.task))}))),r&&"current"===d?s.a.createElement(w,{list:r,changed:l,input:i}):"done"===d&&0!==a.length?s.a.createElement("div",null,s.a.createElement("button",{className:"tasks__filter-restore",onClick:function(){return g(b,(function(e){return N("tasks").doc(e).update({done:!1})}))}},"Restore"),s.a.createElement("button",{className:"tasks__filter-delete",onClick:function(){return g(b,(function(e){return N("tasks").doc(e).delete()}))}},"Delete")):null)}function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={lists:[],tasks:[],doneTasks:[],selectedList:"",selectedListName:"",listInput:"",taskInput:""},a.getLists=function(){N("lists").onSnapshot((function(e){var t=e.docs.map((function(e){return S({docId:e.id},e.data())}));a.setState({lists:t})}))},a.getTasks=function(e){N("tasks").where("listId","==",e).onSnapshot((function(e){var t=e.docs.map((function(e){return S({docId:e.id},e.data())})),n=t.filter((function(e){return!0!==e.done})),s=t.filter((function(e){return!0===e.done}));a.setState({tasks:n,doneTasks:s})}))},a.selectList=function(e){a.setState({selectedList:e.target.getAttribute("value"),selectedListName:e.target.textContent},(function(){a.getTasks(a.state.selectedList)}))},a.input=function(e,t){"list"===t&&a.setState({listInput:e}),"task"===t&&a.setState({taskInput:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getLists()}},{key:"render",value:function(){return s.a.createElement("div",{className:"page"},s.a.createElement(j,{select:this.selectList,lists:this.state.lists,active:this.state.selectedList,changed:this.input,input:this.state.listInput}),s.a.createElement(I,{tasks:this.state.tasks,doneTasks:this.state.doneTasks,list:this.state.selectedList,listName:this.state.selectedListName,changed:this.input,input:this.state.taskInput}))}}]),t}(n.Component);var x=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(T,null))};r.a.render(s.a.createElement(x,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0e9b6eba.chunk.js.map