const box = document.getElementById("orders");
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if (orders.length === 0) {
  box.innerHTML = "<p>Belum ada order</p>";
}

orders.forEach(o => {
  const div = document.createElement("div");
  div.style.background = "rgba(255,255,255,0.08)";
  div.style.padding = "12px";
  div.style.marginBottom = "10px";
  div.style.borderRadius = "12px";

  div.innerHTML = `
    <b>${o.game}</b><br>
    Paket: ${o.pack}<br>
    ID: ${o.uid}<br>
    Bayar: ${o.payment}<br>
    Status: ${o.status}<br>
    <small>${o.time}</small>
  `;
  box.appendChild(div);
});
