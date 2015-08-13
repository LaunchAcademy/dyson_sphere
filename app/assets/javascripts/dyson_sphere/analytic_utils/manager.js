Analytics.Models.Analytics.Manager = function(options){
  this.listeners = [];

  this.registerListener = function(callback){
    this.listeners.push(callback);
  }

  this.registerProvider = function(provider){
    this.listeners.push(provider.eventFired);
  }

  this.eventFired = function(e){
    this.listeners.forEach(function(listener){
      listener(e);
    });
  }
};
