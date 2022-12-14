/*
 * @Description:
 * @Version:
 * @Autor: MrSong
 * @Date: 2022-07-29 15:16:53
 * @LastEditors: MrSong
 * @LastEditTime: 2022-08-04 21:36:41
 */

let timer, flag, timeout = null, addressJson = null;

import $ from "jquery";
export const getAddress = ({
  path,
  title
}) => {
  if (!$) return;
  // $.getScript("http://pv.sohu.com/cityjson", () => {
  //   let cip = returnCitySN.cip;
  //   let cid = returnCitySN.cid;
  //   let cname = returnCitySN.cname;
  //   function print() {
  //     console.group("ð", "å¼å§")
  //     console.log("cip", cip);
  //     console.log("cid", cid);
  //     console.log("cname", cname);
  //     console.log("path", path);
  //     console.log("title", title);
  //     console.groupEnd("ð", "END");
  //   }
  //   throttle(print, 5000)
  // });
  setTimeout(() => {
    return;
    let myTimer = setInterval(() => {
      if (returnCitySN) {
        addressJson = returnCitySN;
        clearInterval(myTimer)
      }
    }, 1000)
  }, 10000);
  if (addressJson) {
    let cip = addressJson.cip;
    let cid = addressJson.cid;
    let cname = addressJson.cname;
    function print() {
      console.group("ð", "å¼å§")
      console.log("cip", cip);
      console.log("cid", cid);
      console.log("cname", cname);
      console.log("path", path);
      console.log("title", title);
      console.groupEnd("ð", "END");
    }
    throttle(print, 5000)
  }
};

/**
 * èæµåçï¼å¨ä¸å®æ¶é´åï¼åªè½è§¦åä¸æ¬¡
 * 
 * @param {Function} func è¦æ§è¡çåè°å½æ° 
 * @param {Number} wait å»¶æ¶çæ¶é´
 * @param {Boolean} immediate æ¯å¦ç«å³æ§è¡
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // å¦ææ¯ç«å³æ§è¡ï¼åå¨waitæ¯«ç§åå¼å§æ¶æ§è¡
      typeof func === 'function' && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true
      // å¦ææ¯éç«å³æ§è¡ï¼åå¨waitæ¯«ç§åçç»æå¤æ§è¡
      timer = setTimeout(() => {
        flag = false
        typeof func === 'function' && func();
      }, wait);
    }
  }
};
/**
 * é²æåçï¼ä¸å®æ¶é´åï¼åªææåä¸æ¬¡æä½ï¼åè¿waitæ¯«ç§åææ§è¡å½æ°
 * 
 * @param {Function} func è¦æ§è¡çåè°å½æ° 
 * @param {Number} wait å»¶æ¶çæ¶é´
 * @param {Boolean} immediate æ¯å¦ç«å³æ§è¡ 
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
  // æ¸é¤å®æ¶å¨
  if (timeout !== null) clearTimeout(timeout);
  // ç«å³æ§è¡ï¼æ­¤ç±»æåµä¸è¬ç¨ä¸å°
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // è®¾ç½®å®æ¶å¨ï¼å½æåä¸æ¬¡æä½åï¼timeoutä¸ä¼åè¢«æ¸é¤ï¼æä»¥å¨å»¶æ¶waitæ¯«ç§åæ§è¡funcåè°æ¹æ³
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}