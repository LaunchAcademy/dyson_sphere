describe("Launch Pass analytics manager", function(){
  beforeEach(function(){
    this.manager = new Analytics.Models.Analytics.Manager({});
  });

  it("initializes to a blank set of listeners", function(){
    expect(this.manager.listeners.length).toEqual(0);
  });
});
