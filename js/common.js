/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2022-08-06 15:28:36
 * @LastEditors: MrSong
 * @LastEditTime: 2022-08-07 12:20:37
 */
initApp();
function initApp() {
  let initAudio = () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    try {
      let context = new window.AudioContext();
      let source = null;
      let audioBuffer = null;
      let isPlay = true;

      function clickEvent() {
        let appAudioStart = document.getElementById('app');
        appAudioStart.onclick = (e) => {
          isPlay = !isPlay;
          playSound();
          setTimeout(() => {
            initNotice(stopSound, playSound);
            appAudioStart.onclick = null
          }, 0)
        }
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
          // playSound();
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
            console.log(realkey, isPlay);
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
      loadAudioFile('/assets/a little story.mp3');
      keybroad();
      clickEvent();
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
        ele.innerHTML = `<img src="/assets/img/pause.png" alt="" srcset="">`
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
          mobileNotice.innerHTML = `<img src="/assets/img/play.png" alt="" srcset="">`
          stopSound();
        } else {
          mobileNotice.innerHTML = `<img src="/assets/img/pause.png" alt="" srcset="">`
          playSound();
        }
        isPlay = !isPlay
      }
    }
    createNotice();
    deleteNotice();
  }
  initAudio();
}