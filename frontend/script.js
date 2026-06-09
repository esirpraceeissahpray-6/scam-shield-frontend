// Scam Shield Intelligence Engine (Frontend Simulation Layer)

// ---------- LINK SCANNER ----------
function checkLink() {
    const url = document.getElementById("urlInput").value;
    const resultBox = document.getElementById("result");

    if (!url) {
        resultBox.innerHTML = "⚠️ Please enter a URL";
        return;
    }

    let riskScore = calculateRisk(url);
    let level = "";
    let color = "";

    if (riskScore >= 70) {
        level = "HIGH RISK 🚨";
        color = "red";
    } else if (riskScore >= 40) {
        level = "MEDIUM RISK ⚠️";
        color = "orange";
    } else {
        level = "LOW RISK ✅";
        color = "green";
    }

    resultBox.innerHTML = `
        <div style="padding:15px;border-radius:12px;
        background:${color};color:white;">
            <h3>${level}</h3>
            <p>Risk Score: ${riskScore}/100</p>
            <p>${generateReason(url, riskScore)}</p>
        </div>
    `;
}

// ---------- RISK ENGINE ----------
function calculateRisk(url) {
    let score = 10;

    // Fake phishing indicators
    if (url.includes("login")) score += 25;
    if (url.includes("verify")) score += 20;
    if (url.includes("free")) score += 15;
    if (url.includes("secure")) score += 10;
    if (url.length > 40) score += 10;
    if (url.includes("-")) score += 5;
    if (!url.startsWith("https")) score += 20;

    return Math.min(score, 100);
}

// ---------- REASON GENERATOR ----------
function generateReason(url, score) {
    if (score >= 70) {
        return "Detected multiple phishing patterns and unsafe URL structure.";
    } else if (score >= 40) {
        return "Some suspicious indicators found in URL behavior.";
    } else {
        return "No strong scam patterns detected in analysis.";
    }
}

// ---------- REPORT SYSTEM ----------
function submitReport() {
    const type = document.getElementById("type").value;
    const message = document.getElementById("reportMessage").value;

    if (!type || !message) {
        alert("Please fill all required fields");
        return;
    }

    alert("🚨 Threat Report Submitted Successfully");

    console.log("New Scam Report:", {
        type,
        message,
        time: new Date()
    });

    // Reset form
    document.getElementById("type").value = "";
    document.getElementById("reportMessage").value = "";
}

// ---------- SIMULATED ALERT FEED ----------
function loadFakeAlerts() {
    const alerts = [
        "Fake bank SMS links detected in Kenya",
        "WhatsApp impersonation scam spreading",
        "Crypto investment fraud surge reported",
        "Job offer phishing emails increasing"
    ];

    const container = document.getElementById("alerts");

    if (!container) return;

    container.innerHTML = alerts.map(a =>
        `<li>🚨 ${a}</li>`
    ).join("");
}

// Auto-load alerts on page load
window.onload = function () {
    loadFakeAlerts();
};
// =========================
// CHAT PAGE FUNCTIONS
// =========================

// Switch Between Tabs

function showChatTab(tabId) {

const assistant =
document.getElementById("assistant");

const community =
document.getElementById("community");

if (!assistant || !community) return;

assistant.style.display = "none";
community.style.display = "none";

document.getElementById(tabId).style.display = "block";

}



// Scam Shield Assistant

function sendAssistantMessage() {

const input =
document.getElementById("assistantInput");

const messages =
document.getElementById("assistantMessages");

if (!input || !messages) return;

const question =
input.value.trim();

if (question === "") return;



// User Message

messages.innerHTML += `

<div class="community-message">

👤 ${question}

</div>

`;



let response =
"Stay cautious online and never share sensitive information with unknown sources.";



const q =
question.toLowerCase();



if (q.includes("otp")) {

response =
"Never share OTP codes. Legitimate organizations will not ask for them.";

}

else if (q.includes("bank")) {

response =
"Verify bank communications through official channels before taking action.";

}

else if (q.includes("job")) {

response =
"Be careful of employers requesting upfront payments or personal financial details.";

}

else if (q.includes("crypto")) {

response =
"Research investment opportunities carefully. High guaranteed returns are often a scam warning sign.";

}

else if (q.includes("phishing")) {

response =
"Check links carefully and avoid entering passwords on suspicious websites.";

}



// Assistant Reply

messages.innerHTML += `

<div class="assistant-message">

🛡️ ${response}

</div>

`;



messages.scrollTop =
messages.scrollHeight;



input.value = "";

}



// Community Discussion

function postCommunityMessage() {

const input =
document.getElementById("communityInput");

const messages =
document.getElementById("communityMessages");

if (!input || !messages) return;

const text =
input.value.trim();

if (text === "") return;



messages.innerHTML += `

<div class="community-message">

💬 ${text}

</div>

`;



messages.scrollTop =
messages.scrollHeight;



input.value = "";

}
