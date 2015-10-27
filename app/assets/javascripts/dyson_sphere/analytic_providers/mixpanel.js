// Analytics.Models.AnalyticProviders.Mixpanel = function(options){
  // this.token = options.token;

  // if(!window.mixpanel){
    // (function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
    // for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
  // }

  // this.init = function(){
    // window.mixpanel.init(this.token);
    // if(Analytics){
      // if(Analytics.user){
        // this.userSet({}, Analytics.user);
      // }
      // $(Analytics).on('userSet', this.userSet);
    // }
  // };

  // this.eventFired = function(e){
    // var mixpanelOptions = _.clone(e);
    // delete mixpanelOptions.name;
    // window.mixpanel.track(e.name, mixpanelOptions);
  // };

  // this.userSet = function(e, user){
    // window.mixpanel.identify(user.id);
    // window.mixpanel.people.set(user);
  // };

  // _.bindAll(this, 'userSet', 'eventFired', 'init');
// };
