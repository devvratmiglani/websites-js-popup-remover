//works for quora.com
javascript: (function() {
    function F1(elem) {
        document.querySelector('div[class="q-flex qu-alignItems--center qu-justifyContent--center qu-overflow--hidden qu-zIndex--blocking_wall"]').remove();
        document.querySelector('div[style="box-sizing: border-box; filter: blur(3px);"]').setAttribute("style", "box-sizing: border-box; filter: blur(0px);");
        var bodystyle = document.querySelector('body').getAttribute('style');
        bodystyle = bodystyle.replaceAll(" ", "");
        bodystyle = bodystyle.replace("overflow:hidden", "");
        document.querySelector('body').setAttribute("style", bodystyle);
    }
    F1(1);
})();
