const oz_to_container = (oz) => {
    if(isNaN(oz) || typeof oz != "number") {
        return "ERROR";
    }
    if(oz < 0) {
        return "Dark Matter Storage Unit";
    }
    else if(oz <= 12.0) {
        return "Vial";
    }
    else if(oz <= 24.0) {
        return "Can";
    }
    else if(oz <= 48.0) {
        return "Bottle";
    }
    else if(oz <= 128.0) {
        return "Tankard";
    }
    else {
        return "Keg";
    }
}

$(document).ready(function() {
    const input = $("#soda");
    const output = $("#calculated");
    const submit = $("#soda_submit");

    submit.click(function(evt) {
        evt.preventDefault();
        const ctr = oz_to_container(parseFloat(input.val()));
        output.html(`You are looking for a: <strong>${ctr}</strong>.`)
        output.animate({paddingLeft: "20"}, 100)
              .animate({paddingLeft: "0"}, 100);
    });

});
