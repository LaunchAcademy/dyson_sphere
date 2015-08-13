describe('intercom analytics provider', function(){
  beforeEach(function(){
    this.provider =
      new Analytics.Models.AnalyticProviders.Intercom({appId: 'foo'});
    this.provider.init();
  });

  it('creates an Intercom object', function(){
    expect(Intercom).toBeDefined();
  });

  describe('when an event fires', function(){
    var event = new Analytics.Models.Analytics.Event({
      name: 'event name',
      action: 'event action',
      label: 'event label',
      value: 2
    });

    beforeEach(function(){
      this.spy = sinon.spy(window, 'Intercom');
      this.provider.eventFired(event);
      this.lastArgs = this.spy.args[0];
    });

    afterEach(function(){
      if(window.Intercom.restore){
        window.Intercom.restore();
      };
    });

    it('sends a trackEvent signal to intercom', function(){
      expect(this.spy).toHaveBeenCalled();
      expect(this.lastArgs[0]).toEqual('trackEvent');
    });

    it('sends the event name as the second argument', function(){
      expect(this.lastArgs[1]).toEqual(event.name);
    });

    it('does not send the event name in the options', function(){
      expect(this.lastArgs[2].name).toBeUndefined();
    });
  });
});
