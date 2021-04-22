var elem1 = document.querySelector("#box1");
var elem2 = document.querySelector("#box2");
var elem3 = document.querySelector("#box3");
elem1.animate(
  [
    { transform: "translate(0,0)" },
    { transform: "translate(300px,400px)" },
    { transform: "translate(600px,0)" },
    { transform: "translate(900px,400px)" },
    { transform: "translate(1200px,0)" },
  ],
  {
    duration: 1500,
    iterations: Infinity,
    direction: "alternate",
  }
);

elem2.animate(
    [
      { transform: "translate(0,0)" },
      { transform: "translate(500px,500px)" },
      { transform: "translate(800px,0)" },
      { transform: "translate(900px,400px)" },
      { transform: "translate(1200px,0)" },
    ],
    {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
    }
  );

  elem3.animate(
    [
      { transform: "translate(0,0)" },
      { transform: "translate(200px,300px)" },
      { transform: "translate(500px,0)" },
      { transform: "translate(700px,500px)" },
      { transform: "translate(1200px,0)" },
    ],
    {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
    }
  );
  