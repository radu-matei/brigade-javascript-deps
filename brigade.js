const { events } = require("brigadier")
const is = require("is-thirteen");


events.on("exec", function (e, p) {
    console.log("is 13 thirteen? " + is(13).thirteen())
})
