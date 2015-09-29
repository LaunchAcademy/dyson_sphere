window.Analytics = {
  Models: {},
  Views: {},
  reload: function(){
    location.reload();
  },
  redirect: function(path){
    window.location.href = path
  },
  alert: function(text){
    window.alert(text);
  },
  init: function(options){
    if(!options){
      options = {};
    }
    // cbpFixedScrollLayout.init();
    if(!this.analyticsManager){
      this.analyticsManager = new Analytics.Models.Analytics.Manager();

      var goog = new Analytics.Models.AnalyticProviders.Google({
        token: options.gaToken
      });
      goog.init();
      goog.trackPageView();
      this.analyticsManager.registerProvider(goog);

      var mx = new Analytics.Models.AnalyticProviders.Mixpanel({
        token: options.mxToken
      });
      mx.init();

      this.analyticsManager.registerProvider(mx);

      var ic = new Analytics.Models.AnalyticProviders.Intercom({
        appId: options.intercomAppId
      });
      ic.init();
      this.analyticsManager.registerProvider(ic);
    }
  },
  setUser: function(user){
    if(user){
      Analytics.user = user;
      $(Analytics).trigger('userSet', user);
    }
  },
  fireEvent: function(eventJson){
    var event = new Analytics.Models.Analytics.Event(eventJson);
    event.fire();
  },
  setOtherDomains: function(domains){
    if(domains){
      Analytics.otherDomains = domains;
    }
  }
}
