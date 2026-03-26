const QUESTIONS = [
{ q:“What is the capital city of Eritrea?”, opts:[“Massawa”,“Asmara”,“Keren”,“Mendefera”], ans:1, fact:“Asmara, known as ‘Little Rome,’ is famous for its Italian colonial Modernist architecture and was declared a UNESCO World Heritage Site in 2017.” },
{ q:“In which year did Eritrea officially gain independence?”, opts:[“1989”,“1991”,“1993”,“1998”], ans:2, fact:“Eritrea became independent on May 24, 1993, after a referendum in which 99.83% of voters chose independence from Ethiopia.” },
{ q:“What is the official currency of Eritrea?”, opts:[“Birr”,“Nakfa”,“Shilling”,“Dinar”], ans:1, fact:“The Nakfa (ERN) has been Eritrea’s currency since 1997, named after the town of Nakfa — a symbol of the independence struggle.” },
{ q:“Which body of water borders Eritrea to the east?”, opts:[“Indian Ocean”,“Gulf of Aden”,“Red Sea”,“Arabian Sea”], ans:2, fact:“Eritrea has over 2,000 km of Red Sea coastline, including the Dahlak Archipelago with more than 200 islands.” },
{ q:“What is Eritrea’s main seaport city?”, opts:[“Keren”,“Assab”,“Massawa”,“Dekemhare”], ans:2, fact:“Massawa (Mitsiwa) is Eritrea’s main port, once called the ‘Pearl of the Red Sea,’ with rich Ottoman and Egyptian heritage.” },
{ q:“How many ethnic groups are officially recognized in Eritrea?”, opts:[“6”,“7”,“9”,“12”], ans:2, fact:“The 9 groups are: Tigrinya, Tigre, Saho, Afar, Bilen, Kunama, Nara, Rashaida, and Hedareb.” },
{ q:“Which language is most widely spoken in Eritrea?”, opts:[“Arabic”,“Amharic”,“Tigrinya”,“Afar”], ans:2, fact:“Tigrinya is spoken by about 55% of the population. Arabic and English are also used in government and education.” },
{ q:“What is the highest mountain peak in Eritrea?”, opts:[“Emba Soira”,“Mount Kohen”,“Mount Alid”,“Emba Derho”], ans:0, fact:“Emba Soira rises to 3,018 metres and is the highest point in Eritrea, located in the central highlands.” },
{ q:“Which country does NOT share a land border with Eritrea?”, opts:[“Sudan”,“Ethiopia”,“Djibouti”,“Somalia”], ans:3, fact:“Eritrea borders Sudan (northwest), Ethiopia (south), and Djibouti (southeast). Somalia shares no border with Eritrea.” },
{ q:“What is the name of the liberation front that led Eritrea’s independence struggle?”, opts:[“TPLF”,“EPLF”,“OLF”,“ONLF”], ans:1, fact:“The Eritrean People’s Liberation Front (EPLF) won the independence war and later became the ruling PFDJ party.” },
{ q:“On what date is Eritrea’s Independence Day celebrated?”, opts:[“May 1”,“May 24”,“June 1”,“July 4”], ans:1, fact:“May 24th marks Eritrea’s Independence Day, commemorating liberation from Ethiopian rule in 1991 and the 1993 referendum.” },
{ q:“The Dahlak Archipelago belongs to Eritrea and lies in which sea?”, opts:[“Mediterranean Sea”,“Arabian Sea”,“Red Sea”,“Gulf of Aden”], ans:2, fact:“The Dahlak Archipelago has over 200 coral islands in the Red Sea and is famous for pristine diving and marine life.” },
{ q:“What is the name of Eritrea’s national airline?”, opts:[“Eritrean Air”,“Horn Air”,“Eritrea Airlines”,“Red Sea Airlines”], ans:2, fact:“Eritrea Airlines is the national carrier, operating from Asmara International Airport to African and Middle Eastern destinations.” },
{ q:“What architectural style made Asmara a UNESCO World Heritage Site?”, opts:[“Baroque”,“Modernist / Futurist”,“Gothic”,“Byzantine”], ans:1, fact:“Asmara holds one of the world’s best-preserved collections of Modernist and Futurist buildings from the Italian colonial era (1890–1941).” },
{ q:“What is the name of the ancient Aksumite port city near Zula in Eritrea?”, opts:[“Adulis”,“Axum”,“Meroe”,“Zeila”], ans:0, fact:“Adulis was a vital Red Sea trading port of the Aksumite Empire and is now a major archaeological site.” },
{ q:“Which faith is practised by approximately half of Eritrea’s population?”, opts:[“Islam”,“Orthodox Christianity”,“Catholicism”,“Protestantism”], ans:1, fact:“About 50% of Eritreans belong to the Eritrean Orthodox Tewahdo Church; roughly 48% are Muslim. The faiths coexist peacefully.” },
{ q:“What is the name of the spongy Eritrean flatbread made from teff?”, opts:[“Ugali”,“Injera”,“Chapati”,“Kisra”], ans:1, fact:“Injera is the staple food of Eritrea — a sourdough flatbread used both as a plate and as a utensil to scoop stews (tsebhi).” },
{ q:“Which region of Eritrea includes parts of the scorching Danakil Depression?”, opts:[“Eastern coast”,“Northern highlands”,“Southeastern lowlands”,“Central plateau”], ans:2, fact:“The southeastern lowlands bordering the Afar Triangle include part of the Danakil Depression, one of Earth’s hottest places.” },
{ q:“What is Eritrea’s traditional three-round coffee ceremony called?”, opts:[“Tej ceremony”,“Bun ceremony”,“Jebena Buna”,“Qahwa”], ans:2, fact:“Jebena Buna involves brewing coffee in a clay jebena pot and serving three rounds — Abol, Tona, and Baraka — as a social ritual.” },
{ q:“Which city became a symbol of Eritrean resistance after surviving relentless bombing during the independence war?”, opts:[“Asmara”,“Massawa”,“Nakfa”,“Keren”], ans:2, fact:“Nakfa was bombed but never captured. Its resilience inspired Eritreans and gave its name to the national currency.” },
{ q:“What is the approximate total length of Eritrea’s Red Sea coastline?”, opts:[“500 km”,“1,000 km”,“2,000 km”,“3,500 km”], ans:2, fact:“Eritrea’s coastline stretches over 2,000 km, one of the longest in the region, providing rich fishing and trade opportunities.” },
{ q:“What is the name of Eritrea’s ruling political party?”, opts:[“EPLF”,“PFDJ”,“EDP”,“EPDP”], ans:1, fact:“The People’s Front for Democracy and Justice (PFDJ) is Eritrea’s sole ruling party, established in 1994 from the EPLF.” },
{ q:“Which colonial power ruled Eritrea from 1890 to 1941?”, opts:[“Britain”,“France”,“Italy”,“Turkey”], ans:2, fact:“Italy colonised Eritrea from 1890 to 1941, leaving behind a legacy of architecture, infrastructure, and the name ‘Eritrea’ itself.” },
{ q:“After Italy, which country administered Eritrea from 1941 to 1952?”, opts:[“France”,“Britain”,“USA”,“Egypt”], ans:1, fact:“Britain administered Eritrea as a UN trust territory from 1941 until 1952, when Eritrea was federated with Ethiopia.” },
{ q:“In which year was Eritrea federated with Ethiopia against the wishes of many Eritreans?”, opts:[“1948”,“1950”,“1952”,“1960”], ans:2, fact:“In 1952, the UN federated Eritrea with Ethiopia. Ethiopia later annexed Eritrea outright in 1962, triggering the independence war.” },
{ q:“How long did Eritrea’s armed independence struggle last?”, opts:[“10 years”,“20 years”,“30 years”,“40 years”], ans:2, fact:“The Eritrean War of Independence lasted 30 years (1961–1991), making it one of Africa’s longest liberation struggles.” },
{ q:“What is the name of the grain mainly used to make Eritrean injera?”, opts:[“Wheat”,“Barley”,“Teff”,“Sorghum”], ans:2, fact:“Teff is a tiny, nutrient-rich grain native to the Horn of Africa. It gives injera its distinctive sour taste and spongy texture.” },
{ q:“Which city is the second largest in Eritrea and an important trading hub?”, opts:[“Assab”,“Keren”,“Mendefera”,“Dekemhare”], ans:1, fact:“Keren is Eritrea’s second largest city, known for its colourful market, camel trade, and the historic Battle of Keren (WWII).” },
{ q:“What is the name of the spiced butter used in Eritrean cooking?”, opts:[“Ghee”,“Tesmi”,“Niter kibbeh”,“Smen”], ans:1, fact:“Tesmi is clarified spiced butter used widely in Eritrean cuisine to cook stews and flavour dishes.” },
{ q:“What is the Eritrean name for a traditional meat stew, often served on injera?”, opts:[“Zigni”,“Tsebhi”,“Alicha”,“Kitfo”], ans:1, fact:“Tsebhi (also zigni for the spicy version) is a slow-cooked meat stew seasoned with berbere spice mix, a staple of Eritrean meals.” },
{ q:“What ancient writing script is used for the Tigrinya language?”, opts:[“Arabic script”,“Latin alphabet”,“Ge’ez (Fidel)”,“Sabean script”], ans:2, fact:“Tigrinya is written in Ge’ez script (called Fidel), an ancient Semitic alphabet also used for Amharic and other Ethiopian languages.” },
{ q:“Which Eritrean city was severely damaged in the 1990 Battle of Massawa during the independence war?”, opts:[“Keren”,“Asmara”,“Massawa”,“Assab”], ans:2, fact:“Massawa was heavily shelled in the 1990 Battle of Massawa when EPLF forces captured it from Ethiopia. Many Ottoman-era buildings were destroyed.” },
{ q:“What is the name of the spice blend central to Eritrean cooking?”, opts:[“Ras el hanout”,“Berbere”,“Dukkah”,“Harissa”], ans:1, fact:“Berbere is a fiery blend of chilli peppers, fenugreek, coriander, and other spices used in tsebhi and many Eritrean dishes.” },
{ q:“What is Eritrea’s approximate population as of the 2020s?”, opts:[“1–2 million”,“3–4 million”,“5–6 million”,“10–12 million”], ans:2, fact:“Eritrea’s population is estimated at around 3.5–6 million (estimates vary due to limited census data and emigration).” },
{ q:“What is the name of the Eritrean traditional dress worn by women?”, opts:[“Habesha kemis”,“Zuria”,“Netela”,“Direh”], ans:0, fact:“The Habesha kemis is a traditional white cotton dress with embroidered borders, worn by Eritrean and Ethiopian women for ceremonies.” },
{ q:“Which sea strait near Eritrea connects the Red Sea to the Gulf of Aden?”, opts:[“Strait of Hormuz”,“Bab-el-Mandeb”,“Strait of Malacca”,“Gulf of Suez”], ans:1, fact:“The Bab-el-Mandeb strait, near Djibouti, is a critical chokepoint for global shipping between the Red Sea and Indian Ocean.” },
{ q:“What is the name of Eritrea’s most famous cycling race?”, opts:[“Tour de Eritrea”,“Tour of Eritrea”,“Eritrea Grand Prix”,“Red Sea Ride”], ans:1, fact:“The Tour of Eritrea is a prestigious multi-stage cycling race. Eritrea has produced world-class cyclists including Daniel Teklehaimanot and Biniam Girmay.” },
{ q:“Biniam Girmay became famous in 2022 for winning a stage of which major cycling race?”, opts:[“Tour de France”,“Giro d’Italia”,“Vuelta a España”,“Paris-Roubaix”], ans:1, fact:“Biniam Girmay won Stage 10 of the 2022 Giro d’Italia, becoming the first Black African to win a Grand Tour stage.” },
{ q:“What is the name of the semi-nomadic ethnic group living in Eritrea’s western lowlands?”, opts:[“Afar”,“Rashaida”,“Kunama”,“Nara”], ans:2, fact:“The Kunama are one of Eritrea’s oldest ethnic groups, living in the western lowlands near the Gash River and practising farming and pastoralism.” },
{ q:“What is the name of Eritrea’s main international airport?”, opts:[“Massawa International Airport”,“Assab International Airport”,“Asmara International Airport”,“Keren Airport”], ans:2, fact:“Asmara International Airport (ASM) is Eritrea’s main gateway, located just a few kilometres from the city centre.” },
{ q:“Which ancient empire had Eritrea as part of its territory?”, opts:[“Roman Empire”,“Aksumite Empire”,“Ptolemaic Kingdom”,“Ottoman Empire”], ans:1, fact:“The Aksumite Empire (c. 100–940 AD), centred in modern Ethiopia and Eritrea, was one of the greatest trading civilisations of the ancient world.” },
{ q:“What is the name of the Eritrean dish made from ground chickpea flour and spices?”, opts:[“Ful”,“Addes”,“Hamli”,“Shiro”], ans:3, fact:“Shiro is a thick stew made from ground chickpea or bean flour, heavily spiced with berbere. It is a beloved staple across Eritrea.” },
{ q:“What is the climate of Eritrea’s central highland plateau like?”, opts:[“Hot and humid”,“Temperate and mild”,“Arctic”,“Tropical rainforest”], ans:1, fact:“The central highlands around Asmara have a temperate climate with average temperatures of 16–17°C, making it one of Africa’s most pleasant capitals.” },
{ q:“What percentage voted for independence in Eritrea’s 1993 referendum?”, opts:[“78%”,“89%”,“99.83%”,“95%”], ans:2, fact:“An overwhelming 99.83% of Eritreans voted for independence in the April 1993 referendum, one of the highest independence votes in history.” },
{ q:“Which Eritrean musical instrument is a traditional six-stringed bowl lyre?”, opts:[“Krar”,“Masinqo”,“Washint”,“Begena”], ans:0, fact:“The krar is a six-stringed bowl lyre popular in Eritrea and Ethiopia. It is used in both traditional folk music and modern Eritrean pop.” },
{ q:“What is the name of the Eritrean honey wine similar to Ethiopian tej?”, opts:[“Suwa”,“Mes”,“Siwa”,“Tella”], ans:1, fact:“Mes is a traditional Eritrean honey wine (mead) drunk at celebrations. Suwa and tella are grain-based beers also brewed locally.” },
{ q:“What is Eritrea’s national sport?”, opts:[“Football”,“Cycling”,“Athletics”,“Basketball”], ans:1, fact:“Cycling is Eritrea’s de facto national sport. The country has produced internationally acclaimed cyclists who compete at the Tour de France and Giro d’Italia.” },
{ q:“The town of Senafe in Eritrea is close to which famous ancient ruined city?”, opts:[“Meroe”,“Yeha”,“Qohaito”,“Adulis”], ans:2, fact:“Qohaito (Koloe) is an ancient ruined city near Senafe with temples, rock art, and massive stone-carved reservoirs dating back over 2,000 years.” },
{ q:“Which Eritrean city has the second largest port and is near the border with Djibouti?”, opts:[“Massawa”,“Keren”,“Assab”,“Mendefera”], ans:2, fact:“Assab is Eritrea’s southern port city, strategically located near the Bab-el-Mandeb strait and historically used by landlocked Ethiopia for trade.” },
{ q:“What is the name of the liberation fighter who became the first President of Eritrea?”, opts:[“Meles Zenawi”,“Isaias Afwerki”,“Hamid Idris Awate”,“Woldeab Woldemariam”], ans:1, fact:“Isaias Afwerki, a former EPLF commander, became Eritrea’s first and only President in 1993 and has governed the country ever since.” }
];

let userName = ‘’;
let current = 0;
let score = 0;
let userAnswers = [];
let answered = false;

function startQuiz() {
const n = document.getElementById(‘nameInput’).value.trim();
userName = n || ‘Quiz Taker’;
document.getElementById(‘introScreen’).style.display = ‘none’;
document.getElementById(‘quizScreen’).style.display = ‘block’;
loadQuestion();
}

function loadQuestion() {
answered = false;
const q = QUESTIONS[current];
document.getElementById(‘qNum’).textContent = current + 1;
document.getElementById(‘qNumLabel’).textContent = `QUESTION ${current + 1}`;
document.getElementById(‘qText’).textContent = q.q;
document.getElementById(‘liveScore’).textContent = score;
document.getElementById(‘progressFill’).style.width = `${((current) / 50) * 100}%`;

const grid = document.getElementById(‘optionsGrid’);
const labels = [‘A’, ‘B’, ‘C’, ‘D’];
grid.innerHTML = q.opts.map((opt, i) => `<button class="opt-btn" onclick="selectAnswer(${i})" id="opt-${i}"> <span class="opt-label">${labels[i]}</span>${opt} </button>`).join(’’);

document.getElementById(‘feedbackPanel’).className = ‘feedback-panel’;
document.getElementById(‘btnNext’).className = ‘btn-next’;
document.getElementById(‘btnNext’).textContent = current === 49 ? ‘See My Results 🏆’ : ‘Next Question →’;
}

function selectAnswer(idx) {
if (answered) return;
answered = true;
const q = QUESTIONS[current];
const isCorrect = idx === q.ans;
if (isCorrect) score++;
userAnswers.push({ qIdx: current, chosen: idx, correct: isCorrect });

const opts = document.querySelectorAll(’.opt-btn’);
opts.forEach((btn, i) => {
btn.disabled = true;
if (i === q.ans) btn.classList.add(‘correct’);
else if (i === idx && !isCorrect) btn.classList.add(‘wrong’);
});

const panel = document.getElementById(‘feedbackPanel’);
const icon = document.getElementById(‘fbIcon’);
const title = document.getElementById(‘fbTitle’);
const detail = document.getElementById(‘fbDetail’);

if (isCorrect) {
panel.className = ‘feedback-panel correct-fb show’;
icon.textContent = ‘✅’;
title.className = ‘fb-title c’;
title.innerHTML = `<span class="fb-name">${userName}</span>, that's correct! Well done!`;
detail.textContent = `💡 ${q.fact}`;
} else {
panel.className = ‘feedback-panel wrong-fb show’;
icon.textContent = ‘❌’;
title.className = ‘fb-title w’;
title.innerHTML = `<span class="fb-name">${userName}</span>, not quite! The correct answer was: <strong>${q.opts[q.ans]}</strong>`;
detail.textContent = `💡 ${q.fact}`;
}

document.getElementById(‘liveScore’).textContent = score;
document.getElementById(‘btnNext’).className = ‘btn-next show’;
}

function nextQuestion() {
current++;
if (current >= 50) showResults();
else loadQuestion();
}

function showResults() {
document.getElementById(‘quizScreen’).style.display = ‘none’;
document.getElementById(‘resultScreen’).style.display = ‘block’;

const pct = Math.round((score / 50) * 100);
let grade, gradeColor, trophy;
if (pct >= 90) { grade = ‘🌟 Outstanding!’; gradeColor = ‘#d4a843’; trophy = ‘🏆’; }
else if (pct >= 75) { grade = ‘🎉 Excellent!’; gradeColor = ‘#2ecc71’; trophy = ‘🥇’; }
else if (pct >= 60) { grade = ‘👍 Good Job!’; gradeColor = ‘#3498db’; trophy = ‘🥈’; }
else if (pct >= 40) { grade = ‘📚 Keep Learning!’; gradeColor = ‘#e67e22’; trophy = ‘🥉’; }
else { grade = ‘💪 Try Again!’; gradeColor = ‘#e74c3c’; trophy = ‘📖’; }

document.getElementById(‘trophyEmoji’).textContent = trophy;
document.getElementById(‘resultName’).textContent = userName;
document.getElementById(‘resultBig’).textContent = score;
document.getElementById(‘correctCount’).textContent = score;
document.getElementById(‘wrongCount’).textContent = 50 - score;
document.getElementById(‘pctCount’).textContent = pct + ‘%’;
document.getElementById(‘resultGrade’).textContent = grade;
document.getElementById(‘resultGrade’).style.cssText = `background: ${gradeColor}22; color: ${gradeColor}; border: 1px solid ${gradeColor}55; border-radius: 30px; padding: 8px 24px; font-weight:700; font-size: 1rem;`;

const reviewHtml = QUESTIONS.map((q, i) => {
const ua = userAnswers.find(a => a.qIdx === i);
if (!ua) return ‘’;
return `<div class="review-item"> <div class="review-icon">${ua.correct ? '✅' : '❌'}</div> <div> <div class="review-q">Q${i+1}. ${q.q}</div> <div class="review-ans"> ${ua.correct ?`<span class="ca">Your answer: ${q.opts[ua.chosen]} ✓</span>`:`<span class="wa">You chose: ${q.opts[ua.chosen]}</span>  |  <span class="ca">Correct: ${q.opts[q.ans]}</span>` } </div> </div> </div>`;
}).join(’’);
document.getElementById(‘reviewList’).innerHTML = reviewHtml;

const msg = buildShareText(score, pct, grade);
document.getElementById(‘sharePreview’).textContent = msg;
}

function buildShareText(score, pct, grade) {
const stars = ‘⭐’.repeat(Math.min(5, Math.ceil(score / 10)));
return `🇪🇷 Eritrea General Knowledge Quiz Results 🇪🇷

👤 Name: ${userName}
📊 Score: ${score} / 50 (${pct}%)
${stars}
🏅 Grade: ${grade.replace(/[🌟🎉👍📚💪]/g, ‘’).trim()}

Top 3 things I learned:
📍 Asmara is a UNESCO World Heritage City
📍 Eritrea has 9 recognized ethnic groups
📍 Nakfa is both a city and the national currency

Think you can beat my score? Take the 50-question Eritrea General Knowledge Quiz! 🔥

#Eritrea #EritreaQuiz #EritreaCulture #GeneralKnowledge #Africa`;
}

function toggleReview() {
const list = document.getElementById(‘reviewList’);
const btn = document.getElementById(‘reviewToggleBtn’);
if (list.style.display === ‘none’) {
list.style.display = ‘block’;
btn.textContent = ‘📋 Hide Answers ▲’;
} else {
list.style.display = ‘none’;
btn.textContent = ‘📋 Review All Answers ▼’;
}
}

function shareToFacebook() {
const text = document.getElementById(‘sharePreview’).textContent;
const encoded = encodeURIComponent(text);
const url = `https://www.facebook.com/sharer/sharer.php?quote=${encoded}&u=https://eritreaquiz.com`;
window.open(url, ‘_blank’, ‘width=600,height=500’);
showToast(‘🚀 Opening Facebook share dialog…’);
}

function copyResult() {
const text = document.getElementById(‘sharePreview’).textContent;
navigator.clipboard.writeText(text).then(() => showToast(‘✅ Copied to clipboard!’)).catch(() => {
const ta = document.createElement(‘textarea’);
ta.value = text; document.body.appendChild(ta);
ta.select(); document.execCommand(‘copy’); document.body.removeChild(ta);
showToast(‘✅ Copied!’);
});
}

function restartQuiz() {
current = 0; score = 0; userAnswers = []; answered = false;
document.getElementById(‘resultScreen’).style.display = ‘none’;
document.getElementById(‘introScreen’).style.display = ‘block’;
}

function showToast(msg) {
const t = document.getElementById(‘toast’);
t.textContent = msg;
t.classList.add(‘show’);
clearTimeout(t._t);
t._t = setTimeout(() => t.classList.remove(‘show’), 2800);
}