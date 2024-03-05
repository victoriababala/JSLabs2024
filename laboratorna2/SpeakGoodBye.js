(function (global) {
  const SpeakGoodBye = {};

  const speakWord = "Good Bye";
  SpeakGoodBye.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  global.$SpeakGoodBye = SpeakGoodBye;
})(window);
