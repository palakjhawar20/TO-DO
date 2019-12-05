$(function() {
    $("#username").val("Mayank");
    $("mayank").html("<p>Mayank Tag this is</p>");
    $("p").click(function() {
        $(this).hide("slow", function() {
            alert("Hoide ho gaya dosto");
        });
    });
    // $("p").dblclick(function() {
    //     $(this).fadeOut(1000);
    // }).mouseenter(function() {
    //     alert("Mouse entered");
    // }).mouseleave(function() {
    //     alert("Mouse leave");
    // });
    $("button").click(function() {
        // var a = $("#username").val();
        alert($("mayank").attr("data-rollno"));

    });
});