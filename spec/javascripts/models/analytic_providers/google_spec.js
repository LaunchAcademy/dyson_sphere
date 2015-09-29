describe("google analytics provider", function(){
  var gaToken = 'ga-token'

  beforeEach(function(){
    Analytics.setUser({});
    Analytics.init({
      gaToken: '',
      mxToken: '',
      intercomAppId: ''
    });
    this.provider = new Analytics.Models.AnalyticProviders.Google({
      token: gaToken
    });
  });

  afterEach(function(){
    if(window.ga.restore){
      window.ga.restore();
    }
  });


  it("has a token", function(){
    this.provider.init();
    expect(this.provider.token).toEqual(gaToken);
  });

  it("loads the google script", function(){
    expect(window.ga).toBeDefined();
  });

  it("invokes ga 'create'", function(){
    var spy = sinon.spy(window, 'ga');
    this.provider.init();
    expect(spy).toHaveBeenCalled();
    expect(spy.args[0][0]).toEqual('create');
  });

  it("invokes ga 'create' with a userId when relevant", function(){
    var spy = sinon.spy(window, 'ga');
    var user = {id: 1415};
    Analytics.setUser(user);
    this.provider.init();
    expect(spy.args[0][2].userId).toEqual(user.id);
  });

  it("invokes ga 'require'", function(){
    var spy = sinon.spy(window, 'ga');
    this.provider.init();
    expect(spy).toHaveBeenCalledWith('require', 'displayfeatures');
  });

  describe("for multiple domains", function(){
    it("invokes ga 'create' with a allowLinker when relevant", function(){
      var spy = sinon.spy(window, 'ga');
      Analytics.setOtherDomains(['launchacademy.com']);
      this.provider.init();
      expect(spy.args[0][3].allowLinker).toEqual(true);
    });
  });

  describe("tracking a page view", function(){
    it('sends a page view invocation', function(){
      var spy = sinon.spy(window, 'ga');
      this.provider.init();
      this.provider.trackPageView();
      expect(spy).toHaveBeenCalledWith('send', 'pageview');
    });
  });

  describe("tracking an event", function(){
    var event = new Analytics.Models.Analytics.Event({
      name: 'event name',
      action: 'event action',
      label: 'event label',
      value: 2
    });

    beforeEach(function(){
      this.spy = sinon.spy(window, 'ga');
      this.provider.init();
      this.provider.eventFired(event);
      this.eventSendOptions = this.spy.getCall(4).args[1];
    });

    it('sends a hit type of event', function(){
      expect(this.eventSendOptions.hitType).toEqual('event');
    });

    it('sends the events name as the category', function(){
      expect(this.eventSendOptions.eventCategory).toBeDefined();
      expect(this.eventSendOptions.eventCategory).toEqual(event.name);
    });

    it('sends the event action as the action', function(){
      expect(this.eventSendOptions.eventAction).toBeDefined();
      expect(this.eventSendOptions.eventAction).toEqual(event.action);
    });

    it('sends the event label as the label', function(){
      expect(this.eventSendOptions.eventLabel).toBeDefined();
      expect(this.eventSendOptions.eventLabel).toEqual(event.label);
    });

    it('sends the event value as the value', function(){
      expect(this.eventSendOptions.eventValue).toBeDefined();
      expect(this.eventSendOptions.eventValue).toEqual(event.value);
    });
  });

});
