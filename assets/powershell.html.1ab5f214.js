import{_ as r,o,c as s,a as e,b as t,e as a,d as n,r as h}from"./app.17aa6dfd.js";const c={},d=a('<p>Powershell (Windows Powershell)\u662F Microsoft \u4E3A Windows \u8BBE\u8BA1\u7684\u65B0\u7684\u547D\u4EE4\u884C\u7A0B\u5E8F\uFF0C\u8FD9\u4E2A Windows \u5185\u7F6E\u7684\u547D\u4EE4\u884C shell \u5305\u62EC\u4EA4\u4E92\u5F0F\u63D0\u793A\u548C\u811A\u672C\u73AF\u5883\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u72EC\u7ACB\u4F7F\u7528\u4E5F\u53EF\u4EE5\u4EA4\u4E92\u4F7F\u7528\u3002</p><p>\u6211\u4EEC\u5E73\u65F6\u6240\u89C1\u7684\u5927\u591A\u6570\u7684\u811A\u672C(bat,perl,bash,sh)\uFF0C\u63A5\u53D7(\u8F93\u5165)\u548C\u8FD4\u56DE(\u8F93\u51FA)\u7684\u90FD\u662F\u6587\u672C\u3002Powershell \u662F\u5728 .Net \u516C\u5171\u8BED\u8A00\u8FD0\u884C\u65F6(CLR-Common Language Runtime)\u548C.Net Framework \u7684\u57FA\u7840\u4E0A\u6784\u5EFA\u7684\uFF0C\u6240\u4EE5 Powershell \u53EF\u4EE5\u63A5\u53D7\u548C\u8FD4\u56DE.Net \u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CPowershell \u662F\u9762\u5411\u5BF9\u8C61\u7684\u811A\u672C\u8BED\u8A00\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u5176\u5B83\u7684\u811A\u672C\u8BED\u8A00\u662F C \u8BED\u8A00(\u4F4E\u7EA7)\uFF0C\u90A3\u4E48 Powershell \u5C31\u662F Java \u6216\u662F C#(\u9AD8\u7EA7)\u3002\u9762\u5411\u5BF9\u8C61\u7684\u80FD\u529B\u4F7F Powershell \u76F8\u6BD4\u5176\u5B83\u811A\u672C\u8BED\u8A00\u6709\u66F4\u9AD8\u7684\u5F00\u53D1\u6548\u7387\uFF0C\u811A\u672C\u66F4\u5BB9\u6613\u7EF4\u62A4\uFF0C\u66F4\u5BB9\u6613\u5B9E\u73B0\u6A21\u5757\u5316\u548C\u590D\u7528\u3002</p><p>PowerShell \u5F15\u5165\u4E86 cmdlet \u7684\u6982\u5FF5(cmdlet \u8BFB\u4F5C\u201Ccommand-let\u201D,\u4E00\u770B\u5C31\u662F cmd \u7684\u8D85\u96C6\uFF0C\u4E8B\u5B9E\u4E5F\u662F\u5982\u6B64\uFF0C\u6240\u6709 cmd \u547D\u4EE4\u90FD\u53EF\u4EE5\u5728 Powershell \u4E2D\u6267\u884C)\uFF0C\u8FD9\u662F\u5185\u7F6E\u5230 shell \u4E2D\u7684\u4E00\u4E2A\u7B80\u5355\u7684\u5355\u4E00\u529F\u80FD\u547D\u4EE4\u884C\u5DE5\u5177\u3002\u76F8\u6BD4\u5176\u5B83 shell\uFF0CPowerShell \u9664\u4E86\u53EF\u4EE5\u5BF9\u8BA1\u7B97\u673A\u4E0A\u6587\u4EF6\u7CFB\u7EDF\u7684\u8BBF\u95EE\u3002\u8FD8\u53EF\u4EE5\u8BBF\u95EE\u5176\u4ED6\u6570\u636E\u5B58\u50A8\uFF0C\u5982\u6CE8\u518C\u8868\u548C\u6570\u5B57\u7B7E\u540D\u8BC1\u4E66\u5B58\u50A8\uFF0C\u5C31\u50CF\u8BBF\u95EE\u6587\u4EF6\u7CFB\u7EDF\u4E00\u6837\u5BB9\u6613\u3002</p><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><p>Powershell \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u5185\u7F6E\u547D\u4EE4\uFF0C\u76F8\u6BD4\u5176\u5B83 shell \u5C24\u5176\u72EC\u7279\u7684\u4F18\u52BF: \u60A8\u4E0D\u5FC5\u629B\u5F03\u81EA\u5DF1\u60EF\u7528\u7684\u5DE5\u5177\u3001\u547D\u4EE4\uFF0C\u5728 Powershell \u4E2D\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684 cmd \u547D\u4EE4\u3002</p><p>Powershell \u4E0D\u5904\u7406\u6587\u672C(\u4E0D\u628A\u6587\u672C\u5F53\u505A\u6587\u672C\u5904\u7406\uFF0C\u5F53\u505A.Net \u5BF9\u8C61\u5904\u7406)\uFF0C\u76F8\u53CD\uFF0C\u5B83\u5904\u7406\u57FA\u4E8E .Net Framework \u5E73\u53F0\u7684\u5BF9\u8C61\u3002</p><p>Powershell \u9644\u5E26\u4E86\u5177\u6709\u4E00\u81F4\u683C\u5F0F(\u52A8\u8BCD-\u540D\u8BCD)\u7684\u5927\u91CF\u5185\u7F6E\u547D\u4EE4\u3002</p><p>\u6240\u6709\u7684 Powershell \u547D\u4EE4\u90FD\u4F7F\u7528\u540C\u4E00\u547D\u4EE4\u5206\u6790\u7A0B\u5E8F\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E2A\u5DE5\u5177(\u547D\u4EE4)\u4F7F\u7528\u4E0D\u540C\u7684\u5206\u6790\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u540C\u65F6\u5B66\u4E60\u5927\u91CF\u7684\u547D\u4EE4\u3002</p><h2 id="\u5B98\u65B9\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u6559\u7A0B" aria-hidden="true">#</a> \u5B98\u65B9\u6559\u7A0B</h2>',10),p={href:"https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.1",target:"_blank",rel:"noopener noreferrer"},i=n("\u5B98\u65B9\u6559\u7A0B");function w(m,_){const l=h("ExternalLinkIcon");return o(),s("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[i,t(l)])])])])}var f=r(c,[["render",w],["__file","powershell.html.vue"]]);export{f as default};
