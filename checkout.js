const data = JSON.parse(localStorage.getItem("order"));

document.getElementById("summary").innerText =
  `${data.game} - ${data.pack}\nID: ${data.uid}`;

function pay(method) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    game: data.game,
    pack: data.pack,
    uid: data.uid,
    payment: method,
    status: "PAID (SIMULATED)",
    time: new Date().toLocaleString()
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  document.getElementById("status").innerText =
    "Pembayaran berhasil (simulasi). Order masuk ke admin.";
}
