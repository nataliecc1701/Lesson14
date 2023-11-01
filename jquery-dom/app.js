$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!");
});
/*
$("article img").addClass("imageCenter");
$("article p:last-of-type").remove();
$("h1").css("fontSize", Math.ceil(Math.random()*100) + "px")
$("ol").append($("<li>").text("Whatever you want!"))
$("aside").empty().append($("<p>").text(
    "I'm sorry, that list was silly. It has been removed. Please forgive me"))
*/
$("input.form-control").on("change", function() {
    const red = $("input.form-control")[0].value;
    const blue = $("input.form-control")[1].value;
    const green = $("input.form-control")[2].value;
    $("body").css("backgroundColor", `rgba(${red}, ${green}, ${blue})`)
})