import{_ as e,o as s,c as n,e as a}from"./app.e3c83e88.js";const i={},c=a(`<h1 id="scp" tabindex="-1"><a class="header-anchor" href="#scp" aria-hidden="true">#</a> scp</h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><p><code>scp</code> \u662F secure copy \u7684\u7F29\u5199\uFF0C\u7528\u6765\u5728\u4E24\u53F0\u4E3B\u673A\u4E4B\u95F4\u52A0\u5BC6\u4F20\u9001\u6587\u4EF6\u3002\u5B83\u7684\u5E95\u5C42\u662F SSH \u534F\u8BAE\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u662F 22\u3002</p><p>\u5B83\u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u4E09\u79CD\u590D\u5236\u64CD\u4F5C\u3002</p><ul><li>\u4ECE\u672C\u5730\u7CFB\u7EDF\u5230\u8FDC\u7A0B\u7CFB\u7EDF\u3002</li><li>\u4ECE\u8FDC\u7A0B\u7CFB\u7EDF\u5230\u672C\u5730\u7CFB\u7EDF\u3002</li><li>\u5728\u672C\u5730\u7CFB\u7EDF\u7684\u4E24\u4E2A\u8FDC\u7A0B\u7CFB\u7EDF\u4E4B\u95F4\u3002</li></ul><p>\u4F7F\u7528 <code>scp</code> \u4F20\u8F93\u6570\u636E\u65F6\uFF0C\u6587\u4EF6\u548C\u5BC6\u7801\u90FD\u662F\u52A0\u5BC6\u7684\uFF0C\u4E0D\u4F1A\u6CC4\u6F0F\u654F\u611F\u4FE1\u606F\u3002</p><p><code>scp</code> \u7684\u8BED\u6CD5\u7C7B\u4F3C <code>cp</code> \u7684\u8BED\u6CD5\u3002</p><p>\u6CE8\u610F\uFF0C\u5982\u679C\u4F20\u8F93\u7684\u6587\u4EF6\u5728\u672C\u673A\u548C\u8FDC\u7A0B\u7CFB\u7EDF\uFF0C\u6709\u76F8\u540C\u7684\u540D\u79F0\u548C\u4F4D\u7F6E\uFF0C<code>scp</code> \u4F1A\u5728\u6CA1\u6709\u8B66\u544A\u7684\u60C5\u51B5\u4E0B\u8986\u76D6\u6587\u4EF6\u3002</p><h3 id="\u672C\u5730\u6587\u4EF6\u590D\u5236\u5230\u8FDC\u7A0B\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6587\u4EF6\u590D\u5236\u5230\u8FDC\u7A0B\u7CFB\u7EDF" aria-hidden="true">#</a> \u672C\u5730\u6587\u4EF6\u590D\u5236\u5230\u8FDC\u7A0B\u7CFB\u7EDF</h3><p>\u590D\u5236\u672C\u673A\u6587\u4EF6\u5230\u8FDC\u7A0B\u7CFB\u7EDF\u7684\u57FA\u672C\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
$ <span class="token function">scp</span> SourceFile user@host:directory/TargetFile

<span class="token comment"># \u793A\u4F8B</span>
$ <span class="token function">scp</span> file.txt remote_username@10.10.0.2:/remote/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u590D\u5236\u6574\u4E2A\u76EE\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u672C\u673A\u7684 documents \u76EE\u5F55\u62F7\u8D1D\u5230\u8FDC\u7A0B\u4E3B\u673A\uFF0C</span>
<span class="token comment"># \u4F1A\u5728\u8FDC\u7A0B\u4E3B\u673A\u521B\u5EFA documents \u76EE\u5F55</span>
$ <span class="token function">scp</span> -r documents username@server_ip:/path_to_remote_directory

<span class="token comment"># \u5C06\u672C\u673A\u6574\u4E2A\u76EE\u5F55\u62F7\u8D1D\u5230\u8FDC\u7A0B\u76EE\u5F55\u4E0B</span>
$ <span class="token function">scp</span> -r localmachine/path_to_the_directory username@server_ip:/path_to_remote_directory/

<span class="token comment"># \u5C06\u672C\u673A\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u5185\u5BB9\u62F7\u8D1D\u5230\u8FDC\u7A0B\u76EE\u5F55\u4E0B</span>
$ <span class="token function">scp</span> -r localmachine/path_to_the_directory/* username@server_ip:/path_to_remote_directory/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDC\u7A0B\u6587\u4EF6\u590D\u5236\u5230\u672C\u5730" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u6587\u4EF6\u590D\u5236\u5230\u672C\u5730" aria-hidden="true">#</a> \u8FDC\u7A0B\u6587\u4EF6\u590D\u5236\u5230\u672C\u5730</h3><p>\u4ECE\u8FDC\u7A0B\u4E3B\u673A\u590D\u5236\u6587\u4EF6\u5230\u672C\u5730\u7684\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
$ <span class="token function">scp</span> user@host:directory/SourceFile TargetFile

<span class="token comment"># \u793A\u4F8B</span>
$ <span class="token function">scp</span> remote_username@10.10.0.2:/remote/file.txt /local/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u590D\u5236\u6574\u4E2A\u76EE\u5F55\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62F7\u8D1D\u4E00\u4E2A\u8FDC\u7A0B\u76EE\u5F55\u5230\u672C\u673A\u76EE\u5F55\u4E0B</span>
$ <span class="token function">scp</span> -r username@server_ip:/path_to_remote_directory local-machine/path_to_the_directory/

<span class="token comment"># \u62F7\u8D1D\u8FDC\u7A0B\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5230\u672C\u673A\u76EE\u5F55\u4E0B</span>
$ <span class="token function">scp</span> -r username@server_ip:/path_to_remote_directory/* local-machine/path_to_the_directory/
$ <span class="token function">scp</span> -r user@host:directory/SourceFolder TargetFolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E24\u4E2A\u8FDC\u7A0B\u7CFB\u7EDF\u4E4B\u95F4\u7684\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u8FDC\u7A0B\u7CFB\u7EDF\u4E4B\u95F4\u7684\u590D\u5236" aria-hidden="true">#</a> \u4E24\u4E2A\u8FDC\u7A0B\u7CFB\u7EDF\u4E4B\u95F4\u7684\u590D\u5236</h3><p>\u672C\u673A\u53D1\u51FA\u6307\u4EE4\uFF0C\u4ECE\u8FDC\u7A0B\u4E3B\u673A A \u62F7\u8D1D\u5230\u8FDC\u7A0B\u4E3B\u673A B \u7684\u8BED\u6CD5\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5</span>
$ <span class="token function">scp</span> user@host1:directory/SourceFile user@host2:directory/SourceFile

<span class="token comment"># \u793A\u4F8B</span>
$ <span class="token function">scp</span> user1@host1.com:/files/file.txt user2@host2.com:/files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u8F93\u5165\u4E24\u4E2A\u8FDC\u7A0B\u5E10\u6237\u7684\u5BC6\u7801\u3002\u6570\u636E\u5C06\u76F4\u63A5\u4ECE\u4E00\u4E2A\u8FDC\u7A0B\u4E3B\u673A\u4F20\u8F93\u5230\u53E6\u4E00\u4E2A\u8FDC\u7A0B\u4E3B\u673A\u3002</p><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>-P</code> \u7528\u6765\u6307\u5B9A\u8FDC\u7A0B\u4E3B\u673A\u7684 SSH \u7AEF\u53E3\u3002\u5982\u679C\u8FDC\u7A0B\u4E3B\u673A\u4F7F\u7528\u975E\u9ED8\u8BA4\u7AEF\u53E3 22\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u4E2D\u6307\u5B9A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -P <span class="token number">2222</span> user@host:directory/SourceFile TargetFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-p</code> \u53C2\u6570\u7528\u6765\u4FDD\u7559\u4FEE\u6539\u65F6\u95F4(modification time)\u3001\u8BBF\u95EE\u65F6\u95F4(access time)\u3001\u6587\u4EF6\u72B6\u6001(mode)\u7B49\u539F\u59CB\u6587\u4EF6\u7684\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -C -p ~/test.txt root@192.168.1.3:/some/path/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-l</code> \u53C2\u6570\u7528\u6765\u9650\u5236\u4F20\u8F93\u6570\u636E\u7684\u5E26\u5BBD\u901F\u7387\uFF0C\u5355\u4F4D\u662F Kbit/sec\u3002\u5BF9\u4E8E\u591A\u4EBA\u5206\u4EAB\u7684\u5E26\u5BBD\uFF0C\u8FD9\u4E2A\u53C2\u6570\u53EF\u4EE5\u7559\u51FA\u4E00\u90E8\u5206\u5E26\u5BBD\u4F9B\u5176\u4ED6\u4EBA\u4F7F\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -l <span class="token number">80</span> yourusername@yourserver:/home/yourusername/* <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>scp</code> \u547D\u4EE4\u5360\u7528\u7684\u5E26\u5BBD\u9650\u5236\u4E3A\u6BCF\u79D2 80K \u6BD4\u7279\u4F4D\uFF0C\u5373\u6BCF\u79D2 10K \u5B57\u8282\u3002</p><p><code>-c</code> \u53C2\u6570\u7528\u6765\u6307\u5B9A\u52A0\u5BC6\u7B97\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -c blowfish some_file your_username@remotehost.edu:~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6307\u5B9A\u52A0\u5BC6\u7B97\u6CD5\u4E3A <code>blowfish</code>\u3002</p><p><code>-C</code> \u8868\u793A\u662F\u5426\u5728\u4F20\u8F93\u65F6\u538B\u7F29\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -c blowfish -C local_file your_username@remotehost.edu:~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-q</code> \u53C2\u6570\u7528\u6765\u5173\u95ED\u663E\u793A\u62F7\u8D1D\u7684\u8FDB\u5EA6\u6761\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -q Label.pdf mrarianto@202.x.x.x:.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-F</code> \u53C2\u6570\u7528\u6765\u6307\u5B9A ssh_config \u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -F /home/pungki/proxy_ssh_config Label.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-v</code> \u53C2\u6570\u7528\u6765\u663E\u793A\u8BE6\u7EC6\u7684\u8F93\u51FA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -v ~/test.txt root@192.168.1.3:/root/help2356.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-i</code> \u53C2\u6570\u7528\u6765\u6307\u5B9A\u5BC6\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">scp</span> -vCq -i private_key.pem ~/test.txt root@192.168.1.3:/some/path/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>-r</code> \u53C2\u6570\u8868\u793A\u662F\u5426\u4EE5\u9012\u5F52\u65B9\u5F0F\u590D\u5236\u76EE\u5F55\u3002</p>`,44),d=[c];function r(l,o){return s(),n("div",null,d)}var p=e(i,[["render",r],["__file","scp.html.vue"]]);export{p as default};
