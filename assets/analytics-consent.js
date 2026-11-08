/* Optional Google Analytics: no Google analytics script is loaded before opt-in. */
(function(){
  'use strict';
  var KEY='tpd_analytics_consent_v1', ID='G-XZMNVJH2XX', loaded=false;
  function preference(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function save(value){try{localStorage.setItem(KEY,value);}catch(e){}}
  function startAnalytics(){
    if(loaded)return;loaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){window.dataLayer.push(arguments);};
    window.gtag('js',new Date());
    window.gtag('config',ID,{anonymize_ip:true});
    var s=document.createElement('script');s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(ID);
    document.head.appendChild(s);
  }
  if(preference()==='accepted')startAnalytics();
  function setChoice(choice){
    save(choice);
    var banner=document.getElementById('tpd-consent-banner');
    if(banner)banner.hidden=true;
    if(choice==='accepted')startAnalytics();
    else if(loaded){window.location.reload();} // Stop future collection after opt-out.
  }
  function show(){
    var banner=document.getElementById('tpd-consent-banner');
    if(banner)banner.hidden=false;
  }
  function init(){
    var css=document.createElement('style');
    css.textContent='#tpd-consent-banner{position:fixed;bottom:16px;left:16px;right:16px;z-index:2147483646;max-width:640px;margin:auto;background:#16232c;color:#fff;border:1px solid #b99a66;border-radius:12px;padding:18px;box-shadow:0 8px 32px #0005;font:15px/1.5 Arial,sans-serif}#tpd-consent-banner[hidden]{display:none}#tpd-consent-banner a{color:#ffe1a6;text-decoration:underline}#tpd-consent-banner button{cursor:pointer;border:1px solid #e3c68b;border-radius:6px;padding:9px 15px;font:inherit;margin:10px 10px 0 0;background:#e3c68b;color:#16232c}#tpd-consent-banner button.tpd-reject{background:transparent;color:#fff}#tpd-consent-banner button:focus-visible,.tpd-privacy-settings:focus-visible{outline:3px solid #f3cf7b;outline-offset:3px}.tpd-privacy-settings{cursor:pointer;background:none;border:0;text-decoration:underline;color:inherit;font:inherit}';
    document.head.appendChild(css);
    var banner=document.createElement('section');banner.id='tpd-consent-banner';banner.hidden=true;
    banner.setAttribute('aria-label','Optional analytics preferences');
    banner.innerHTML='<strong>Website analytics preferences</strong><p>We use optional Google Analytics cookies to understand website visits and improve our seller resources. You can accept or reject analytics. Essential site features remain available either way. <a href="/privacy-policy.html">Privacy notice</a>.</p><button type="button" class="tpd-accept">Accept analytics</button><button type="button" class="tpd-reject">Reject analytics</button>';
    document.body.appendChild(banner);
    banner.querySelector('.tpd-accept').addEventListener('click',function(){setChoice('accepted');});
    banner.querySelector('.tpd-reject').addEventListener('click',function(){setChoice('rejected');});
    var footer=document.querySelector('footer')||document.body;
    var controls=document.createElement('p');controls.style.cssText='text-align:center;padding:12px;font-size:14px';
    controls.innerHTML='<a href="/privacy-policy.html">Privacy notice</a> · <button type="button" class="tpd-privacy-settings">Analytics preferences</button>';
    footer.appendChild(controls);
    controls.querySelector('button').addEventListener('click',show);
    if(preference()!=='accepted'&&preference()!=='rejected')show();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
