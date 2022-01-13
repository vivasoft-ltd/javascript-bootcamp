var langFunc = function () {
  var langName = "JavaScript";
  // displayLangName is a inner function of langFunc
  function displayLangName() {
    console.log(langName);
  }
  return displayLangName;
};

langFunc()();

/*
Output:
JavaScript
*/
