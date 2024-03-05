(function () {
  let names = [
    "Bill",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Steven",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  console.log("************************************************");
  console.log("If name starts with J - Good Bye. Else - Hello");
  console.log("************************************************");
  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().charAt(0) === "j") {
      $SpeakGoodBye.speak(names[i]);
    } else {
      $SpeakHello.speak(names[i]);
    }
  }
  console.log(
    "***************************************************************************************************************"
  );

  console.log(
    'Another "original" way of of separating names. If the letter in the name is repeated more than once - Good Bye '
  );
  console.log(
    "***************************************************************************************************************"
  );

  const regex = /([a-zA-Z]).*?\1/;
  for (let i = 0; i < names.length; i++) {
    if (regex.test(names[i])) {
      $SpeakGoodBye.speak(names[i]);
    } else {
      $SpeakHello.speak(names[i]);
    }
  }
})();
