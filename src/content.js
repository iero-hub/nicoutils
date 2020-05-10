window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
      const balloon = 'SeekBarStoryboardPremiumLink-balloon-container'
      const thumbnail = 'SeekBarStoryboardPremiumLink-thumbnail-container'
      if (document.getElementsByClassName(balloon)[0] != null) {
        clearInterval(jsInitCheckTimer);
        //要素を取得する処理
        document.getElementsByClassName(balloon)[0].remove()
        document.getElementsByClassName(thumbnail)[0].remove()
        console.log('kidousita')
      };


    }
    console.log('deleted')
}
