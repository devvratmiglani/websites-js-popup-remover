//works for geegksforgeeks.com
javascript:(function k()
{
    if(document.querySelector('div.login-modal-div'))
    {
      document.querySelector('div.spinner-loading-overlay').remove();
      document.querySelector('div.login-modal-div').remove();
      console.log("GfgTaskDone");
    }
  	else
    {
      setTimeout(k, 300);
    }
})();
