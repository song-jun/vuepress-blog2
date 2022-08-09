import{_ as a,o as t,c as p,a as n,b as e,e as o,d as c,r as i}from"./app.238d4ac4.js";var u="/vuepress-blog2/assets/img/do.png",l="/vuepress-blog2/assets/img/do1.png",r="/vuepress-blog2/assets/img/do2.png";const k={},d=o('<div class="custom-container tip"><p class="custom-container-title">Python</p><p>python\u4E0B\u8F7D\u817E\u8BAF\uFF0C\u7231\u5947\u827A\uFF0C\u4F18\u9177\uFF0C\u571F\u8C46vip\u89C6\u9891<br> ......</p></div><ul><li><p>\u7B2C\u4E00\u6B65\u6253\u5F00\u817E\u8BAF/\u7231\u5947\u827A/\u4F18\u9177/\u571F\u8C46,\u70B9\u51FBvip\u89C6\u9891\u64AD\u653E\u3002</p></li><li><p>\u7B2C\u4E8C\u6B65\u590D\u5236\u7F51\u7AD9\u89C6\u9891\u64AD\u653E\u7684\u5730\u5740\u3002</p></li><li><p>\u7B2C\u4E09\u6B65\u6253\u5F00\u5168\u6C11vip\u89C6\u9891\u5728\u7EBF\u89E3\u6790\uFF08\u5176\u4ED6\u89C6\u9891\u89E3\u6790\u4E5F\u884C\uFF09\uFF0C\u7C98\u8D34\u89C6\u9891\u5730\u5740\uFF0C\u70B9\u51FB\u5F00\u59CB\u89C6\u9891\u89E3\u6790\u3002</p></li><li><p>\u7B2C\u56DB\u6B65\u89E3\u6790\u6210\u529F\u4E4B\u540E\uFF0C\u6309\u4E0BF12\uFF0C\u4F60\u4F1A\u770B\u5230\u5982\u4E0B\u56FE\u6240\u793A\u3002</p></li></ul><img src="'+u+'" alt=""><ul><li>\u8FD9\u4E9B\u89C4\u5F8B\u6027\u6587\u4EF6\u90FD\u662F\u7531\u56FA\u5B9A\u5B57\u7B26\u4E32+\u9012\u589E\u6570\u5B57+.ts\u540E\u7F00\u7EC4\u6210\uFF0C\u800C\u8FD9\u4E9B\u6587\u4EF6\u8FDE\u63A5\u8D77\u6765\u5C31\u662F\u6574\u4E2A\u89C6\u9891\u3002</li></ul><img src="'+l+`" alt=""><ul><li>\u7B2C\u4E94\u6B65\uFF0C\u4E0A\u4EE3\u7801\uFF0C\u4E0B\u8F7D\u8FD9\u4E9Bts\u6587\u4EF6\u3002</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> queue <span class="token keyword">import</span> Queue
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time
start <span class="token operator">=</span> time<span class="token punctuation">.</span>process_time<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># \u521B\u5EFA\u7EBF\u7A0B \u751F\u4EA7\u8005\u8D1F\u8D23\u83B7\u53D6URL\uFF0C\u5E76\u4E14\u89E3\u6790URL</span>


<span class="token keyword">class</span> <span class="token class-name">Procuder</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)&#39;</span>
                      <span class="token string">&#39;Chrome/76.0.3809.132 Safari/537.36&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num_queue<span class="token punctuation">,</span> ts_queue<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Procuder<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>num_queue <span class="token operator">=</span> num_queue
        self<span class="token punctuation">.</span>ts_queue <span class="token operator">=</span> ts_queue

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>num_queue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># \u5982\u679C\u961F\u5217\u4E3A\u7A7A\u5C31\uFF0C\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\uFF0C\u8DF3\u51FA\u6B7B\u5FAA\u73AF\uFF0C\u7ED3\u675Frun</span>
                <span class="token keyword">break</span>
            url <span class="token operator">=</span> self<span class="token punctuation">.</span>num_queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>download_ts<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">download_ts</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        ret <span class="token operator">=</span> r<span class="token punctuation">.</span>content
        filename <span class="token operator">=</span> url<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>ts_queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token punctuation">(</span>ret<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># \u521B\u5EFA\u7EBF\u7A0B \u6D88\u8D39\u8005 \u8D1F\u8D23\u4E0B\u8F7D</span>
<span class="token keyword">class</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num_queue<span class="token punctuation">,</span> ts_queue<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Consumer<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>num_queue <span class="token operator">=</span> num_queue
        self<span class="token punctuation">.</span>ts_queue <span class="token operator">=</span> ts_queue

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>ts_queue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> self<span class="token punctuation">.</span>num_queue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># \u5982\u679C\u961F\u5217\u4E3A\u7A7A\u5C31\uFF0C\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\uFF0C\u8DF3\u51FA\u6B7B\u5FAA\u73AF\uFF0C\u7ED3\u675Frun</span>
                <span class="token keyword">break</span>
            ret<span class="token punctuation">,</span> filename <span class="token operator">=</span> self<span class="token punctuation">.</span>ts_queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment"># \u5C06ts\u6587\u4EF6\u4FDD\u5B58\u5230\u6587\u4EF6\u5939\u91CC</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;E:/movies/{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>filename <span class="token operator">+</span> <span class="token string">&#39;  \u4E0B\u8F7D\u5B8C\u6210\uFF01&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5B9A\u4E49\u7EBF\u7A0B</span>
    num_queue <span class="token operator">=</span> Queue<span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
    ts_queue <span class="token operator">=</span> Queue<span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token number">1300</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># https://douban.donghongzuida.com/20200714/5459_09deb8e9/1000k/hls/d09d5135dfd000001.ts</span>
        url <span class="token operator">=</span> <span class="token string">&quot;https://douban.donghongzuida.com/20200714/5459_09deb8e9/1000k/hls/d09d5135dfd%06d.ts&quot;</span> <span class="token operator">%</span> i
        <span class="token comment"># print(url)</span>
        num_queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment"># \u5B9A\u4E49100\u4E2A\u751F\u4EA7\u8005</span>
    <span class="token comment"># return</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> Procuder<span class="token punctuation">(</span>num_queue<span class="token punctuation">,</span> ts_queue<span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># \u5B9A\u4E49100\u4E2A\u6D88\u8D39\u8005</span>
    <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        t <span class="token operator">=</span> Consumer<span class="token punctuation">(</span>num_queue<span class="token punctuation">,</span> ts_queue<span class="token punctuation">)</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    end <span class="token operator">=</span> time<span class="token punctuation">.</span>process_time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    endTime<span class="token operator">=</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u7A0B\u5E8F\u8017\u65F6\uFF1A %6.3f&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0B\u8F7D\u8017\u65F6\uFF1A %6.3f&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> starTime<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> starTime
    starTime<span class="token operator">=</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+`" alt=""><ul><li>\u6700\u540E\u4E00\u6B65\uFF0C.ts\u6587\u4EF6\u5408\u6210\u9AD8\u6E05MP4\u6587\u4EF6\u3002\u5728\u76EE\u5F55\u4E0B\u5F00\u542Fcmd\u6267\u884C\u547D\u4EE4\uFF0C\u6216\u8005\u521B\u5EFArun.bat\u6587\u4EF6,\u5199\u5165\u201Ccopy /b *.ts test.mp4\u201D\uFF0C\u4FDD\u5B58\u540E\u70B9\u51FB\u8FD0\u884C\u5373\u53EF\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#test.mp4 \u662F\u81EA\u5B9A\u4E49\u540D\u79F0\u3002</span>
copy /b *.ts test.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),m={href:"http://wpa.qq.com/msgrd?v=3&uin=289097246&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},v=c("\u5982\u82E5\u6709\u95EE\u9898\uFF0CContact me");function b(_,f){const s=i("ExternalLinkIcon");return t(),p("div",null,[d,n("blockquote",null,[n("p",null,[n("a",m,[v,e(s)])])])])}var w=a(k,[["render",b],["__file","python-vip.html.vue"]]);export{w as default};
