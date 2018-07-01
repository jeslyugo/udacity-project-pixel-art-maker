var height = $("#heightPicker");

var width = $("#widthPicker");



var table = $("#canvas");



// function to make the grid

function makeGrid(height, width) {

    // clear canvas each time you run makeGrid



    table.html('');

    // add the rows of the grid



    // add the rows of the grid



    for (var i = 0; i < height.val(); i++) {



        $("#canvas").append("<tr></tr>");



    };







    // for each row add columns and define the resulting spaces as a 'cell' each



    for (var j = 0; j < width.val(); j++) {



        $("tr").each(function() {



            $(this).append("<td class='cell'></td>");



        });



    };



    // when user clicks on an individual cell, color the cell



    $(".cell").click(function(event) {

        var cellColor = $("#colorPicker").val();

        $(event.target).attr('bgcolor', cellColor);

    });



    // when user double-clicks on an individual cell, color is cleared



    $(".cell").dblclick(function(event) {

        $(event.target).attr('bgcolor', '');

    });

};



$(document).ready(function() {

    // when the form is submited, make the grid and color cells as needed

    $("#dimentionsPicker").submit(function(event) {

        makeGrid(height, width);

        event.preventDefault();

    });

});