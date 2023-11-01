$(document).ready(function() {
    console.log("Document ready")
    $("#movieForm").submit(function(evt){
        evt.preventDefault();

        // collect our movie data
        const title = $("#titleInput").val();
        if(title.length < 2) {return alert("title must be at least 2 characters")}
        let rating = $("#ratingInput").val();
        if(rating > 10 || rating < 0) {return alert("rating must be from 0 to 10")}
        if(rating == "") {rating = 10}
        
        // add the submitted movie to the list
        $("<li>").text(` ${title}: ${rating}/10`)
            .prepend($("<input type=button>").val("X").addClass("removeButton"))
            .appendTo($("#movieList"))
        
        // clear the inputs
        $("#titleInput").val("");
        $("#ratingInput").val("");
    })

    $("#movieList").on("click",".removeButton",function(evt){
        evt.target.parentElement.remove();
    })
})
