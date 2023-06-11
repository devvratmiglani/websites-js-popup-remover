javascript:(function k()
{
    if(document.querySelector('div#signupPopupWrapper'))
    {
      document.querySelector('div#signupPopupWrapper').remove();
    }
  	else
    {
    	setTimeout(k,300);
    }
})();