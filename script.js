document.addEventListener("DOMContentLoaded", function () {
  // 加载 header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      initRouting(); // 等 header 加载完再启动路由
    });

  // 加载 footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

// 监听 hash 变化，动态加载页面
function initRouting() {
  window.addEventListener("hashchange", loadPage);
  loadPage(); // 初始化加载当前页面
}

function loadPage() {
  const hash = location.hash.slice(1) || "home";
  fetch(`pages/${hash}.html`)
    .then(res => {
      if (!res.ok) throw new Error("页面不存在");
      return res.text();
    })
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<p>页面加载失败</p>";
    });
}
