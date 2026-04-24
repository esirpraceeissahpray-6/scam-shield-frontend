function showPage(page) {

document.getElementById("home").style.display = "none";
document.getElementById("checker").style.display = "none";
document.getElementById("report").style.display = "none";

document.getElementById(page).style.display = "block";

}

function checkMessage() {

let message = document.getElementById("message").value;

let score = 0;

// basic scam logic (we will replace with your backend AI later)
if (message.toLowerCase().includes("otp")) score += 40;
if (message.toLowerCase().includes("urgent")) score += 20;
if (message.toLowerCase().includes("click")) score += 20;
if (message.toLowerCase().includes("bank")) score += 10;

let result = "";

if (score >= 60)
result = "🚨 HIGH RISK SCAM (Sentinel Alert)";
else if (score >= 30)
result = "⚠️ POSSIBLE SCAM";
else
result = "✅ LOW RISK";

document.getElementById("result").innerText = result;

}

function submitReport() {

let type = document.getElementById("type").value;
let message = document.getElementById("reportMessage").value;

// Later this will send to your backend (FME layer)
console.log("Reported:", type, message);

alert("Report sent to Scam Shield system (MVP mode)");

}
