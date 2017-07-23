function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($("body").width() < 496) {
        $("#for-center").addClass('center-block');
    }
    else {
        if (!init) {
            $("#for-center").removeClass('center-block');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});

