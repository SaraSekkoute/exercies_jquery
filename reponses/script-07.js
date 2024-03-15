$(document).ready(function() {
    function positionBox(direction) {
    var box = $(".box");
    var position = box.position();

    switch (direction) {
        case "left":
            box.css("left", position.left - 10);
            break;
        case "up":
            box.css("top", position.top - 10);
            break;
        case "right":
            box.css("left", position.left + 10);
            break;
        case "down":
            box.css("top", position.top + 10);
            break;
     
    }
}

$(document).on("keydown", function(event) {
    if (event.shiftKey) {
        switch (event.keyCode) {
            case 37: 
                positionBox("left");
                break;
            case 38: 
                positionBox("up");
                break;
            case 39:
                positionBox("right");
                break;
            case 40:
                positionBox("down");
                break;
        }
    }
});
});