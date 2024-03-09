const folded_icon = "▸ ";
const unfolded_icon = "▾ ";

// use `function()` over `() =>` because it binds `this`
$(document).ready(function() {
    $(".qa").each(function () {
        // Fragile if format for qa is changed, but should be fine
        const question = $(this).children().first();
        const answer = $(question).next();

        // We don't want to do this in HTML in case the user does not have JavaScript enabled
        answer.hide(0);
        question.css("cursor", "pointer");
        question.prepend(`<span>${folded_icon}</span>`);

        // Use this instead of jQuery's toggle to ensure state is consistent
        let folded = true;

        question.click(function(evt) {
            const icon = $(this).children().first();
            if(folded) {
                // `stop()` the animation beforehand because jQuery queues animations
                answer.stop().slideDown({
                    duration: 150,
                    easing: "swing"
                });
                icon.text(unfolded_icon);
                folded = false;
            } else {
                answer.stop().slideUp({
                    duration: 150,
                    easing: "swing"
                });
                icon.text(folded_icon);
                folded = true;
            }
        });
    });
});