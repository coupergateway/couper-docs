(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{550:function(t,e,r){"use strict";r.r(e);var n,l=r(94),o=r.n(l),d=r(161),m=r(261),f=["components"],N={};function c(t){var e=t.components,r=Object(d.a)(t,f);return n("wrapper",o()([{},N,{},r,{attrs:{components:e,mdxType:"MDXLayout"}}]),[n("h1",["Files Block"]),n("p",["The ",n("inlineCode",{attrs:{parentName:"p"}},["files"])," blocks configure the file serving. Can be defined multiple times as long as the ",n("inlineCode",{attrs:{parentName:"p"}},["base_path"])," is unique."]),n("table",[n("thead",{attrs:{parentName:"table"}},[n("tr",{attrs:{parentName:"thead"}},[n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Block name"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Context"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Label"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Nested block(s)"])])]),n("tbody",{attrs:{parentName:"table"}},[n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["files"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("a",o()([{attrs:{parentName:"td"}},{href:"#server-block"}]),["Server Block"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Optional"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("a",o()([{attrs:{parentName:"td"}},{href:"#cors-block"}]),["CORS Block"])])])])]),n("table",[n("thead",{attrs:{parentName:"table"}},[n("tr",{attrs:{parentName:"thead"}},[n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Attribute(s)"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Type"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Default"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Description"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Characteristic(s)"]),n("th",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Example"])])]),n("tbody",{attrs:{parentName:"table"}},[n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["base_path"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["string"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Configures the path prefix for all requests."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},['base_path = "/files"'])])]),n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["document_root"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["string"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Location of the document root."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["⚠"," required"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},['document_root = "./htdocs"'])])]),n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["error_file"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["string"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Location of the error file template."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"])]),n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["access_control"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["tuple (string)"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Sets predefined ",n("a",o()([{attrs:{parentName:"td"}},{href:"#access-control"}]),["Access Control"])," for ",n("inlineCode",{attrs:{parentName:"td"}},["files"])," block context."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},['access_control = ["foo"]'])])]),n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["disable_access_control"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["tuple (string)"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Disables access controls by name."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},['disable_access_control = ["foo"]'])])]),n("tr",{attrs:{parentName:"tbody"}},[n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),[n("inlineCode",{attrs:{parentName:"td"}},["custom_log_fields"])]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["object"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["Defines log fields for ",n("a",o()([{attrs:{parentName:"td"}},{href:"LOGS.md#custom-logging"}]),["Custom Logging"]),"."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["⚠"," Inherited by nested blocks."]),n("td",o()([{attrs:{parentName:"tr"}},{align:"left"}]),["-"])])])])])}c.isMDXComponent=!0,e.default={name:"Mdx",inject:{$mdxComponents:{default:function(){return function(){return{}}}}},computed:{components:function(){return this.$mdxComponents()}},render:function(t){return n=m.b.bind({createElement:t,components:this.components}),c({components:this.components})}}}}]);