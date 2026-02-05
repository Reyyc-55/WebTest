const database = {
  ml: {
    name: "Mobile Legends",
    packs: ["86 Diamonds", "172 Diamonds", "257 Diamonds"]
  },
  hok: {
    name: "Honor of Kings",
    packs: ["60 Tokens", "300 Tokens", "980 Tokens"]
  },
  pubg: {
    name: "PUBG Mobile",
    packs: ["60 UC", "325 UC", "660 UC"]
  },
  valo: {
    name: "Valorant",
    packs: ["420 VP", "700 VP", "1375 VP"]
  },
  mc: {
    name: "Minecraft",
    packs: ["Java Edition", "Bedrock Edition"]
  },
  rbx: {
    name: "Roblox",
    packs: ["400 Robux", "800 Robux"]
  },
  steam: {
    name: "Steam Wallet",
    packs: ["IDR 45K", "IDR 90K"]
  },
  gplay: {
    name: "Google Play",
    packs: ["IDR 50K", "IDR 100K"]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("g");
const game = database[key];

if (game) {
  document.getElementById("gameName").innerText = game.name;
  const box = document.getElementById("packs");

  game.packs.forEach(pack => {
    const btn = document.createElement("button");
    btn.innerText = pack;
    btn.onclick = () => order(pack);
    box.appendChild(btn);
  });
}

function order(pack) {
  const uid = document.getElementById("uid").value;
  if (!uid) return alert("Masukkan ID");

  localStorage.setItem("order", JSON.stringify({
    game: game.name,
    pack: pack,
    uid: uid
  }));

  window.location.href = "checkout.html";
}
