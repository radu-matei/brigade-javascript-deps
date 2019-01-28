const { events } = require("brigadier")
const is = require("is-thirteen");
const circle = require("./local-deps/circle.js");

events.on("exec", function (e, p) {
    console.log("is 13 thirteen? " + is(13).thirteen());
    console.log("area of a circle with radius 3 " + circle.area(3));
})
