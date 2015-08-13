describe('mixpanel analytics provider', function(){
  var mxToken = 'mx-token';

  beforeEach(function(){
    Analytics.init();
    this.provider = new Analytics.Models.AnalyticProviders.Mixpanel({
      token: mxToken
    });
    this.provider.init();
  });

  it('defines the mixpanel object', function(){
    expect(window.mixpanel).toBeDefined();
  });

  describe('when an event is fired', function(){
    var event = new Analytics.Models.Analytics.Event({
      name: 'event name',
      action: 'event action',
      label: 'event label',
      value: 2
    });

    beforeEach(function(){
      this.spy = sinon.spy(window.mixpanel, 'track');
    });

    afterEach(function(){
      this.spy.restore();
    });

    it('pushes via mixpanel', function(){
      this.provider.eventFired(event);
      expect(this.spy).toHaveBeenCalled();
    });

    it('sends the name as the first arg', function(){
      this.provider.eventFired(event);
      expect(this.spy.firstCall.args[0]).toEqual(event.name);
    });

    it('does not include the name in the second arg', function(){
      this.provider.eventFired(event);
      expect(this.spy.firstCall.args[1].name).toBeUndefined();
    });
  });

  describe('when a user is set', function(){
    var user = {email: 'user@example.com', id: 8};

    beforeEach(function(){
      this.provider = new Analytics.Models.AnalyticProviders.Mixpanel({
        token: mxToken
      });
      this.spy = sinon.spy(this.provider, 'userSet');
      this.provider.init();
    });

    afterEach(function(){
      this.spy.restore();
    });

    it('bubbles the event', function(){
      Analytics.setUser(user);
      expect(this.spy).toHaveBeenCalled();

    });

    it('invokes mixpanel identify with the users id', function(){
      var spy = sinon.spy(window.mixpanel, 'identify');
      Analytics.setUser(user);
      expect(spy).toHaveBeenCalled();
      expect(spy.args[0][0]).toEqual(user.id);
      spy.restore();
    });

    it('invokes mixpanel people.set', function(){
      var spy = sinon.spy(window.mixpanel.people, 'set');
      Analytics.setUser(user);
      expect(spy).toHaveBeenCalled();
      expect(spy.args[0][0]).toEqual(user);
      spy.restore();
    });
  });
});
