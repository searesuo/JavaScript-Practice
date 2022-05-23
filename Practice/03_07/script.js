/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const Jacket = {
  name: "Summer Jacket",
  size: "small",
  PocketNum: 3,
  color: "black",
  ClothDetils: {
    wide: 80,
    length: 110,
  },
  ZipOpen: false,
  toggleZip: function (ZipOpen) {
    this.ZipOpen = ZipOpen;
  },
};

console.log("The cloth object:", Jacket);
