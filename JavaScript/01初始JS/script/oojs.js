var person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};
let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;

document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
