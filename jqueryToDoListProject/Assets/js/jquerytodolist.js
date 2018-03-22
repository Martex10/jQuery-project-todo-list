//check off specific todos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
})
// adding todo to list
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li>" + "<span>X</span> " + todoText + "</li>");
    }
});