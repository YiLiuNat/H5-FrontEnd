(function (doc, win) {

    function isMobile(){
        var ua = navigator.userAgent;
        var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];    
        for(var i=0; i<agent.length; i++){
            if(ua.indexOf(agent[i])>0){
                return true;
            }
        }
    }
    var isM = isMobile();
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    if (isM) {
        win.addEventListener(resizeEvt, recalc, false);
    }
    doc.addEventListener('DOMContentLoaded', recalc, false);

    
    if (typeof(WeixinJSBridge) == "undefined") {
        document.addEventListener("WeixinJSBridgeReady", function (e) {
            setTimeout(function(){
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
                    // alert(JSON.stringify(res));
                })
            }, 0)
        });
    }else{  
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
                // alert(JSON.stringify(res));
            })
        }, 0)   
    }
})(document, window);
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body);
//     }, false);
// }