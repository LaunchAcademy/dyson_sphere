Analytics.Models.AnalyticProviders.Intercom = function(options){
  this.appId = options.appId;

  if(!window.Intercom){
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/serxnf8i';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
  };

  this.init = function(){
    var intercomSettings = {
      app_id: this.appId
    };
    if(Analytics.user){
      intercomSettings.email = Analytics.user.email;
      intercomSettings.userId = Analytics.user.id;
      intercomSettings.name = [Analytics.user.first_name, Analytics.user.last_name].join(' ');
    }

    Intercom('boot', intercomSettings);
  };

  this.eventFired = function(e){
    var intercomOpts = _.clone(e)
    delete intercomOpts.name;
    Intercom('trackEvent', e.name, intercomOpts);
  };

  _.bindAll(this, 'eventFired', 'init');
};
