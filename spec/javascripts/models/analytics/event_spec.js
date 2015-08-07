describe("Launch Pass events", function(){
  beforeEach(function(){
    Analytics.init();
  });

  describe("properties", function(){
    var eventName = "an-event";
    var eventLabel = "a-label";
    var eventAction = "event-action";
    var eventValue = 1;

    beforeEach(function(){
      this.event = new Analytics.Models.Analytics.Event({
        name: eventName,
        label: eventLabel,
        action: eventAction,
        value: eventValue
      });
    });

    it("has a name", function(){
      expect(this.event.name).toEqual(eventName);
    });

    it("has a label", function(){
      expect(this.event.label).toEqual(eventLabel);
    });

    it("has a action", function(){
      expect(this.event.action).toEqual(eventAction);
    });
  });

  describe("logging", function(){
    it("triggers a fired event", function(){
      var event = new Analytics.Models.Analytics.Event({
        name: 'An event'
      });
      var callback = sinon.spy();
      Analytics.analyticsManager.registerListener(callback);
      event.fire();
      expect(callback).toHaveBeenCalled();
    });
  });
});
