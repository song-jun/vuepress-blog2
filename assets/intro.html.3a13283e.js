import{_ as i,o as e,c as p,e as a}from"./app.cc4bf3f5.js";const o={},t=a('<p>\u7531\u4E8E JavaScript \u7684\u51FA\u73B0\u5C31\u662F\u4E3A\u4E86\u80FD\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\uFF0C\u6240\u4EE5\uFF0C\u6D4F\u89C8\u5668\u81EA\u7136\u662F JavaScript \u5F00\u53D1\u8005\u5FC5\u987B\u8981\u5173\u6CE8\u7684\u3002</p><p>\u76EE\u524D\u4E3B\u6D41\u7684\u6D4F\u89C8\u5668\u5206\u8FD9\u4E48\u51E0\u79CD:</p><ul><li><p>IE 6-11: \u56FD\u5185\u7528\u5F97\u6700\u591A\u7684 IE \u6D4F\u89C8\u5668\uFF0C\u5386\u6765\u5BF9 W3C \u6807\u51C6\u652F\u6301\u5DEE\u3002\u4ECE IE10 \u5F00\u59CB\u652F\u6301 ES6 \u6807\u51C6\uFF1B</p></li><li><p>Chrome: Google \u51FA\u54C1\u7684\u57FA\u4E8E Webkit \u5185\u6838\u6D4F\u89C8\u5668\uFF0C\u5185\u7F6E\u4E86\u975E\u5E38\u5F3A\u608D\u7684 JavaScript \u5F15\u64CE\u2014\u2014V8\u3002\u7531\u4E8E Chrome \u4E00\u7ECF\u5B89\u88C5\u5C31\u65F6\u523B\u4FDD\u6301\u81EA\u5347\u7EA7\uFF0C\u6240\u4EE5\u4E0D\u7528\u7BA1\u5B83\u7684\u7248\u672C\uFF0C\u6700\u65B0\u7248\u65E9\u5C31\u652F\u6301 ES6 \u4E86\uFF1B</p></li><li><p>Safari: Apple \u7684 Mac \u7CFB\u7EDF\u81EA\u5E26\u7684\u57FA\u4E8E Webkit \u5185\u6838\u7684\u6D4F\u89C8\u5668\uFF0C\u4ECE macOS 10.7 Lion \u81EA\u5E26\u7684 6.1 \u7248\u672C\u5F00\u59CB\u652F\u6301 ES6\uFF0C\u76EE\u524D\u6700\u65B0\u7684 macOS 10.15 \u5BF9 ES6 \u652F\u6301\u5DF2\u7ECF\u76F8\u5F53\u826F\u597D\uFF1B</p></li><li><p>Firefox: Mozilla \u81EA\u5DF1\u7814\u5236\u7684 Gecko \u5185\u6838\u548C JavaScript \u5F15\u64CE OdinMonkey\u3002\u65E9\u671F\u7684 Firefox \u6309\u7248\u672C\u53D1\u5E03\uFF0C\u540E\u6765\u7EC8\u4E8E\u806A\u660E\u5730\u5B66\u4E60 Chrome \u7684\u505A\u6CD5\u8FDB\u884C\u81EA\u5347\u7EA7\uFF0C\u65F6\u523B\u4FDD\u6301\u6700\u65B0\uFF1B</p></li><li><p>\u79FB\u52A8\u8BBE\u5907\u4E0A\u76EE\u524D iOS \u548C Android \u4E24\u5927\u9635\u8425\u5206\u522B\u4E3B\u8981\u4F7F\u7528 Apple \u7684 Safari \u548C Google \u7684 Chrome\uFF0C\u7531\u4E8E\u4E24\u8005\u90FD\u662F Webkit \u6838\u5FC3\uFF0C\u7ED3\u679C HTML5 \u9996\u5148\u5728\u624B\u673A\u4E0A\u5168\u9762\u666E\u53CA(\u684C\u9762\u7EDD\u5BF9\u662F Microsoft \u62D6\u4E86\u540E\u817F)\uFF0C\u5BF9 JavaScript \u7684\u6807\u51C6\u652F\u6301\u4E5F\u5F88\u597D\uFF0C\u6700\u65B0\u7248\u672C\u5747\u652F\u6301 ES6\u3002</p></li></ul><p>\u5176\u4ED6\u6D4F\u89C8\u5668\u5982 Opera \u7B49\u7531\u4E8E\u5E02\u573A\u4EFD\u989D\u592A\u5C0F\u5C31\u88AB\u81EA\u52A8\u5FFD\u7565\u4E86\u3002</p><p>\u53E6\u5916\u8FD8\u8981\u6CE8\u610F\u8BC6\u522B\u5404\u79CD\u56FD\u4EA7\u6D4F\u89C8\u5668\uFF0C\u5982\u67D0\u67D0\u5B89\u5168\u6D4F\u89C8\u5668\uFF0C\u67D0\u67D0\u65CB\u98CE\u6D4F\u89C8\u5668\uFF0C\u5B83\u4EEC\u53EA\u662F\u505A\u4E86\u4E00\u4E2A\u58F3\uFF0C\u5176\u6838\u5FC3\u8C03\u7528\u7684\u662F IE\uFF0C\u4E5F\u6709\u53F7\u79F0\u540C\u65F6\u652F\u6301 IE \u548C Webkit \u7684\u201C\u53CC\u6838\u201D\u6D4F\u89C8\u5668\u3002</p><p>\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5BF9 JavaScript \u652F\u6301\u7684\u5DEE\u5F02\u4E3B\u8981\u662F\uFF0C\u6709\u4E9B API \u7684\u63A5\u53E3\u4E0D\u4E00\u6837\uFF0C\u6BD4\u5982 AJAX\uFF0CFile \u63A5\u53E3\u3002\u5BF9\u4E8E ES6 \u6807\u51C6\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5BF9\u5404\u4E2A\u7279\u6027\u652F\u6301\u4E5F\u4E0D\u4E00\u6837\u3002</p><p>\u5728\u7F16\u5199 JavaScript \u7684\u65F6\u5019\uFF0C\u5C31\u8981\u5145\u5206\u8003\u8651\u5230\u6D4F\u89C8\u5668\u7684\u5DEE\u5F02\uFF0C\u5C3D\u91CF\u8BA9\u540C\u4E00\u4EFD JavaScript \u4EE3\u7801\u80FD\u8FD0\u884C\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u4E2D\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E3A\u4E86\u8BA9\u5BF9\u65B0\u7248\u672C\u8BED\u6CD5\u652F\u6301\u4E0D\u597D\u7684\u6D4F\u89C8\u5668\u4E5F\u80FD\u591F\u8FD0\u884C\u6700\u65B0\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u8BDE\u751F\u4E86\u4E24\u5927\u8457\u540D Node.js package \u2014\u2014 core-js \u548C babel\u3002\u4E24\u8005\u90FD\u8D1F\u8D23\u5C06\u6700\u65B0\u7684\u5199\u6CD5\u8F6C\u6362\u5230\u6D4F\u89C8\u5668\u53EF\u4EE5\u652F\u6301\u7684\u65E7\u8BED\u6CD5\u6216\u63D0\u4F9B\u76F8\u5E94\u7684 pollyfill\u3002</p></div>',8),c=[t];function r(l,n){return e(),p("div",null,c)}var S=i(o,[["render",r],["__file","intro.html.vue"]]);export{S as default};
