const SpeakHello = (function () {
  const speakWord = "Hello";

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  return {
    speak: speak,
  };
})();
