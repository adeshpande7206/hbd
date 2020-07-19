const text = document.querySelector(".texts");
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
});

typewriter
  .typeString("<h2>ThankYou for Everything.</h2>")
  .pauseFor(1500)
  .deleteAll()
  .typeString("<h2 class='miss'>I miss You </h2>")
  .typeString("<h2>and</h2>")
  .typeString("<h2 class='love'>I Love You </h2>")
  .typeString("<h2>wo bhi bohott saara </h2>")
  .typeString(
    "<h1>&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;&#x1f62d;</h1>"
  )
  .start();
