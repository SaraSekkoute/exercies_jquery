$(document).ready(function () {
    $(".box").click(function () {
        // Animation from first to last box
        $("#ce .box").each(function (i) {
            var $currentBox = $(this);

            // Set a delay for each box
            setTimeout(function () {
                $currentBox.animate({
                    width: '20px',
                    height: '30px'
                }, 600,
                 function () {
                    // Animation complete, set background color to white
                    $currentBox.css({
                        backgroundColor: 'rgb(238, 238, 255)'
                    }).animate({
                        width: '100px',
                        height: '100px'
                    }, 600, function () {
                        // Animation complete, set background color to red
                        $currentBox.css({
                            backgroundColor: '#CCF'
                        });
                    });
                });
            }, i * 250);
        });
    });
});
