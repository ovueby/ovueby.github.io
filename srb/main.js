const oz_to_container = (oz) => {
    if(isNaN(oz) || typeof oz != "number") {
        return "ERROR";
    }
    if(oz <= 12.0) {
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

const qs = (q) => document.querySelector(q);

const calculate_action = () => {
    const input = qs("#soda");
    const n = parseFloat(input.value);
    const cont = oz_to_container(n);
    const output = qs("#calculated");
    output.innerHTML = `You are looking for a: <strong>${cont}</strong>.`
}
