//main.js
$(document).ready(function() {
    
    
    //tooltip
    $('[data-toggle="tooltip"]').tooltip();   
    
    //click to show/hide articles in following div tag
    $("#slide").click(function(){
        //alert(this.innerHTML);
        $(this).next().slideToggle();
    });

});

