
$(document).ready(function () {
    $('ul.clicker li').on('click', function() {
        console.log ("Hello");
        $(this).text("Clicked!");
    });

});

