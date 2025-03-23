document.addEventListener("DOMContentLoaded", function() {
    // 加载 header.html 到 #navbar
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        });

    // 加载 footer.html 到 #footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
