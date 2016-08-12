describe("Button generates text", function() {
  it("text should congratulate", function() {
    expect(getText()).toBe('<h2>Congratulations, you won!</h2>');
  });
});