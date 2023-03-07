"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{8219:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,s=t(1413),o=t(5861),i=t(9439),c=t(4687),u=t.n(c),d=t(7689),l=t(5705),m=t(5282),p=(t(7427),t(184)),b=function(e){var n=e.initialValues,t=void 0===n?{name:"",number:""}:n,r=e.onSubmit,a=e.btnText,s=function(){var e=(0,o.Z)(u().mark((function e(n,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:t.setSubmitting(!1),t.resetForm();case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=m.object().shape({name:m.string().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:m.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()});return(0,p.jsx)(l.J9,{initialValues:t,onSubmit:s,validationSchema:i,children:function(e){var n=e.isSubmitting;return(0,p.jsxs)(l.l0,{children:[(0,p.jsxs)("label",{children:["Name",(0,p.jsx)(l.gN,{name:"name",type:"text"}),(0,p.jsx)(l.Bc,{name:"name",component:"span"})]}),(0,p.jsx)("br",{}),(0,p.jsxs)("label",{children:["Number",(0,p.jsx)(l.gN,{name:"number",type:"text"}),(0,p.jsx)(l.Bc,{name:"number",component:"span"})]}),(0,p.jsx)("br",{}),(0,p.jsx)("button",{type:"submit",disabled:n,children:a})]})}})},h=t(168),f=t(8789),x=f.ZP.div(r||(r=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),g=f.ZP.div(a||(a=(0,h.Z)(["\n  padding: 24px;\n  background-color: #fff;\n"]))),v=t(8989),j=t(5985),k=function(){var e,n=(0,d.UO)().contactId,t=(0,v.wY)().data,r=(e=n,t.find((function(n){return n.id===e})));console.log(r);var a=r.name,c=r.number,l=(0,v.wv)(),m=(0,i.Z)(l,1)[0],h=(0,d.s0)(),f=function(){return h("/goit-react-hw-08-phonebook/contacts")},k=function(e){return t.find((function(n){return n.name.toLowerCase()===e&&n.id!==r.id}))},w=function(){var e=(0,o.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name.toLowerCase(),!k(r)){e.next=4;break}return j.Am.error("This contact is already exist",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.abrupt("return");case 4:return e.prev=4,e.next=7,m((0,s.Z)({id:n},t));case 7:f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsx)(x,{children:(0,p.jsxs)(g,{children:[r&&(0,p.jsx)(b,{initialValues:{name:a,number:c},btnText:"Save changes",onSubmit:w}),(0,p.jsx)("button",{type:"button",onClick:f,children:"Close"})]})})}}}]);
//# sourceMappingURL=219.94e8c28a.chunk.js.map