(function (global) {
  const SpeakHello = {};

  const speakWord = "Hello";
  SpeakHello.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  global.$SpeakHello = SpeakHello;
})(window);
