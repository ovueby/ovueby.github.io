const qs = (q) => document.querySelector(q);
const qsa = (q) => document.querySelectorAll(q);

document.addEventListener("DOMContentLoaded", (event) => {
    const sections = qsa(".qa");
    sections.forEach(function(section) {
        const triangle = document.createElement("span");
        const q = section.querySelector("h2");
        const a = section.querySelector("p");

        /* set up the default QA state */
        triangle.append("▸ ");
        q.prepend(triangle);
        q.style.cursor = "pointer";

        a.style.display = "none";

        /* toggle when clicked */
        q.addEventListener("click", function(event) {
            if(a.style.display == "none") {
                a.style.display = "";
                triangle.innerHTML = "▾ ";
            } else {
                a.style.display = "none";
                triangle.innerHTML = "▸ ";
            }
        });

    });
});