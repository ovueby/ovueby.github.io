$(document).ready(function() {
    let pie = new DraggablePiechart({
        canvas: document.getElementById("piechart"),
        radius: 0.9,
        data: [
            {angle: -2, format: {color: "#2665da", label: 'Canada Dry'}, collapsed: false},
            {angle: -1.5, format: {color: "#6dd020", label: '7-Up'}, collapsed: false},
            {angle: -0.5, format: {color: "#f9df18", label: 'Water'}, collapsed: false},
            {angle: 0.3, format: {color: "#d42a00", label: 'Mtn. Dew'}, collapsed: false},
            {angle: 2, format: {color: "#e96400", label: 'Coca-Cola'}, collapsed: false}],
    })
});