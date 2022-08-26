/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2022-08-06 15:28:36
 * @LastEditors: MrSong
 * @LastEditTime: 2022-08-26 17:36:21
 */

(function initApp() {
  let mySiteTitle = `我的学习心得体会`;
  let metaTitle = $("meta[property='og:title']").attr("content");
  document.title = `${mySiteTitle} - ${metaTitle} | MrSong`;
  if (window.sendVisiterMsg) window.sendVisiterMsg();
  if (window.stopBGSound) return;
  let baseUrl = getBaseUrl();
  function getBaseUrl() {
    let webSite = location.href;
    if (webSite.indexOf('/vuepress-blog2/') > -1) {
      return '/vuepress-blog2/'
    } else {
      return '/'
    }
  }
  let initAudio = () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    try {
      let context = new window.AudioContext();
      let source = null;
      let audioBuffer = null;
      let isPlay = true;
      function clickEvent() {
        let timer = setInterval(() => {
          if (audioBuffer) {
            clearInterval(timer);
            let appAudioStart = document.getElementById('app');
            appAudioStart.onclick = (e) => {
              isPlay = !isPlay;
              playSound();
              setTimeout(() => {
                initNotice(stopSound, playSound);
                appAudioStart.onclick = null
              }, 0)
            }
          }
        }, 1000)
      };
      function stopSound() {
        if (source) {
          source.stop(0); //立即停止
        }
      }

      function playSound() {
        source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.loop = true; //循环播放
        source.connect(context.destination);
        source.start(0); //立即播放
      }

      function initSound(arrayBuffer) {
        context.decodeAudioData(arrayBuffer, function (buffer) { //解码成功时的回调函数
          audioBuffer = buffer;
          // stopSound();
        }, function (e) { //解码出错时的回调函数
          console.log('Error decoding file', e);
        });
      }

      function loadAudioFile(url) {
        let xhr = new XMLHttpRequest(); //通过XHR下载音频文件
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) { //下载完成
          initSound(this.response);
        };
        xhr.send();
      }
      function keybroad() {
        document.onkeydown = keyDown;
        function keyDown() {
          let e = event || window.event;
          let realkey = null;
          if (e.keyCode == 32) {
            realkey = '\' 空格\'';
            // console.log(realkey, isPlay);
            if (!IsPC()) return;
            isPlay = !isPlay;
            if (isPlay) {
              stopSound();
            } else {
              initNotice(stopSound, playSound);
              playSound();
            }
          }
        }
      }
      loadAudioFile(`${baseUrl}assets/a little story.mp3`);
      keybroad();
      clickEvent();
      window.stopBGSound = stopSound;
    } catch (e) {
      console.log('!Your browser does not support AudioContext');
    }
  }
  let IsPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) { flag = false; break; }
    }
    return flag;
  }
  let initNotice = (stopSound, playSound) => {
    function createNotice() {
      let ele = document.createElement("div");
      //给元素添加属性
      if (IsPC()) {
        let myNotice = document.getElementById("myNotice");
        if (myNotice) return;
        ele.id = "myNotice";
        ele.innerHTML = `亲，按“空格键”可暂停或播放背景音乐哦...<span class='delIco'></span>`
      } else {
        let mobileNotice = document.getElementById("mobileNotice");
        if (mobileNotice) return;
        ele.id = "mobileNotice";
        ele.innerHTML = `<img src="${baseUrl}assets/img/pause.png" alt="" srcset="">`
      }
      document.body.appendChild(ele);
      clickEvent();
    }
    function deleteNotice() {
      if (IsPC()) {
        let delIco = document.getElementsByClassName("delIco");
        let myNotice = document.getElementById("myNotice");
        delIco[0].onclick = () => {
          document.body.removeChild(myNotice);
        }
      } else {

      }
    }
    function clickEvent() {
      let mobileNotice = document.getElementById("mobileNotice");
      let isPlay = true;
      if (!mobileNotice) return;
      mobileNotice.onclick = () => {
        if (isPlay) {
          mobileNotice.innerHTML = `<img src="${baseUrl}assets/img/play.png" alt="" srcset="">`
          stopSound();
        } else {
          mobileNotice.innerHTML = `<img src="${baseUrl}assets/img/pause.png" alt="" srcset="">`
          playSound();
        }
        isPlay = !isPlay
      }
    }
    createNotice();
    deleteNotice();
  }
  let sendMessage = () => {
    let msgtimer = setInterval(() => {
      let wlBtn = document.getElementsByClassName("wl-btn primary")[0];
      if (wlBtn) {
        wlBtn.onclick = (e) => {
          clearInterval(msgtimer);
          let message = document.getElementById("wl-edit").value;
          let userInfo = localStorage.getItem('WALINE_USER');
          userInfo = JSON.parse(userInfo);
          let {
            display_name,
            email
          } = userInfo,
            pageTitle = document.title,
            pageUrl = location.href, params
          if ($) {
            if (userInfo && userInfo.display_name) {
              // console.warn('已登录');
            } else {
              // console.warn('未登录');
              display_name = '匿名'
              email = '匿名'
            }
            params = {
              "appToken": "AT_4WvK7IFClYkrZJzsfbkuuqkegSaiEvfN",
              "content": `发言人：${display_name}\n发言人邮箱：${email}\n消息内容：${message}\n页面标题：${pageTitle}\n[预览地址](${pageUrl})\n<div align=center><img src="https://song-jun.github.io/vuepress-blog2/logo.png"/></div>`,
              "summary": `亲，你的的网站有新消息啦\n网站消息：${message}`,//消息摘要，显示在微信聊天页面或者模版消息卡片上，限制长度100，可以不传，不传默认截取content前面的内容。
              "contentType": 3,//内容类型 1表示文字  2表示html(只发送body标签内部的数据即可，不包括body标签) 3表示markdown 
              "topicIds": [ //发送目标的topicId，是一个数组！！！，也就是群发，使用uids单发的时候， 可以不传。
                520
              ],
              "uids": [//发送目标的UID，是一个数组。注意uids和topicIds可以同时填写，也可以只填写一个。
                "UID_sGmWCSXijnrsp0vMYsCRYCSEjvk7"
              ],
              "url": `${pageUrl} ` //原文链接，可选参数
            }
            $.ajax({
              url: "https://wxpusher.zjiecode.com/api/send/message",
              cache: false,
              data: JSON.stringify(params),
              dataType: 'json',
              type: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              }
            });
          }
        }
      }
    }, 1000)
  }
  let sendVisiterMsg = () => {
    let msgtimer = setInterval(() => {
      clearInterval(msgtimer)
      let pageUrl = localStorage.getItem('pageUrl');
      let pageTitle = document.title, params;
      let origin = location.origin, pathname = location.pathname, curentUrl = origin + pathname;
      if (curentUrl == pageUrl) return;
      if (returnCitySN) {
        localStorage.setItem('pageUrl', curentUrl);
        let { cip, cname } = returnCitySN;
        let clientInfo = navigator.userAgent;
        params = {
          "appToken": "AT_4WvK7IFClYkrZJzsfbkuuqkegSaiEvfN",
          "content": `访客地址：${cname}\n访客IP：${cip}\n访客客户端：${clientInfo}\n页面标题：${pageTitle}\n[预览地址](${pageUrl})\n<div align=center><img src="https://song-jun.github.io/vuepress-blog2/logo.png"/></div>`,
          "summary": `亲，你的的网站有访客啦\n访客地址：${cname}`,//消息摘要，显示在微信聊天页面或者模版消息卡片上，限制长度100，可以不传，不传默认截取content前面的内容。
          "contentType": 3,//内容类型 1表示文字  2表示html(只发送body标签内部的数据即可，不包括body标签) 3表示markdown 
          "topicIds": [ //发送目标的topicId，是一个数组！！！，也就是群发，使用uids单发的时候， 可以不传。
            520
          ],
          "uids": [//发送目标的UID，是一个数组。注意uids和topicIds可以同时填写，也可以只填写一个。
            "UID_sGmWCSXijnrsp0vMYsCRYCSEjvk7"
          ],
          "url": `${curentUrl} ` //原文链接，可选参数
        }
        $.ajax({
          url: "https://wxpusher.zjiecode.com/api/send/message",
          cache: false,
          data: JSON.stringify(params),
          dataType: 'json',
          type: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }
    }, 1000)
    window.sendVisiterMsg = sendVisiterMsg;
  }
  sendVisiterMsg();
  sendMessage();
  initAudio();
})();