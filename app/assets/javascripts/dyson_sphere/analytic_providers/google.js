Analytics.Models.AnalyticProviders.Google = function(options){
  this.token = options.token;
  //google initialization script
  if(!window.ga){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  }

  this.init = function(){
    var opts = {};
    if(Analytics.user){
      opts.userId = Analytics.user.id;
    }
    ga('create', this.token, opts);
    ga('require', 'displayfeatures');
  };


  this.trackPageView = function(){
    ga('send', 'pageview');
  };

  this.eventFired = function(e){
    ga('send', {
      hitType: 'event',
      eventCategory: e.name,
      eventAction: e.action,
      eventLabel: e.label,
      eventValue: e.value
    });
  };

  _.bindAll(this, 'init', 'trackPageView', 'eventFired');

};
