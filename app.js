"use strict";
const $=id=>document.getElementById(id);
const STORE='ppj_quiz_v1';let session=null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffled=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(session))}catch(e){}};
function updateResume(){let ok=false;try{const s=JSON.parse(localStorage.getItem(STORE));ok=!!(s&&Array.isArray(s.ids)&&s.ids.length)}catch(e){} $('resume').classList.toggle('hidden',!ok)}
function pool(){return DB.filter(q=>($('bank').value==='all'||q.source===$('bank').value)&&($('category').value==='all'||q.category===$('category').value))}
function refreshSummary(){const p=pool();$('dbsummary').textContent=`W bazie: ${DB.filter(q=>q.source==='canonical').length} kanoniczne oraz ${DB.filter(q=>q.source==='extra').length} dodatkowych. W wybranym zakresie: ${p.length}. Numery Q zachowano z oryginałów; brakujące screeny nie zostały dopisane jako kanoniczne.`}
function start(){let list=pool();if(!list.length){alert('Brak pytań dla tych filtrów.');return}if($('shuffle').checked)list=shuffled(list);const count=$('count').value==='all'?list.length:Math.min(Number($('count').value),list.length);session={ids:list.slice(0,count).map(q=>q.id),idx:0,answers:{},checked:{},immediate:$('immediate').checked,finished:false};save();render()}
function resume(){try{const s=JSON.parse(localStorage.getItem(STORE));if(!s||!s.ids?.length)return;session=s;render()}catch(e){alert('Nie można odczytać postępu.')}}
function answer(i){const id=session.ids[session.idx];if(session.checked[id])return;session.answers[id]=i;if(session.immediate)session.checked[id]=true;save();render()}
function check(){const id=session.ids[session.idx];if(session.answers[id]===undefined)return;session.checked[id]=true;save();render()}
function advance(d){session.idx=Math.max(0,Math.min(session.ids.length-1,session.idx+d));save();render()}
function finish(){session.finished=true;save();render()}
function render(){if(!session)return;$('settings').classList.add('hidden');$('quiz').classList.toggle('hidden',session.finished);$('result').classList.toggle('hidden',!session.finished);if(session.finished){showResults();return}const id=session.ids[session.idx],q=DB.find(q=>q.id===id),choice=session.answers[id],checked=session.checked[id],done=session.ids.filter(id=>session.answers[id]!==undefined).length; $('counter').textContent=`Pytanie ${session.idx+1} z ${session.ids.length} · Zaznaczono: ${done}`;$('bar').style.width=(done/session.ids.length*100)+'%';let out=`<div class="meta"><span class="tag">${esc(q.id)}</span><span class="tag">${q.source==='canonical'?'Kanoniczne':'Dodatkowe'}</span><span class="tag">${esc(q.category)}</span></div><h2>${esc(q.q)}</h2>${q.code?`<pre>${esc(q.code)}</pre>`:''}<div class="opts">`;q.opts.forEach((o,i)=>{const classes=['opt'];if(i===choice)classes.push('chosen');if(checked&&i===q.a)classes.push('correct');if(checked&&i===choice&&i!==q.a)classes.push('wrong');out+=`<button type="button" class="${classes.join(' ')}" data-answer="${i}" ${checked?'disabled':''}><span class="letter">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`});out+='</div>';if(checked)out+=`<div class="feedback"><b>${choice===q.a?'✓ Poprawnie!':'✗ Niepoprawnie.'}</b> Prawidłowa odpowiedź: <b>${'ABCD'[q.a]}</b>. ${esc(q.why||'')}</div>`;out+=`<div class="foot"><button id="prev" ${session.idx===0?'disabled':''}>← Poprzednie</button><div class="buttons" style="margin:0">${!checked&&session.immediate===false&&choice!==undefined?'<button id="verify">Sprawdź pytanie</button>':''}${session.idx<session.ids.length-1?'<button class="primary" id="next">Następne →</button>':'<button class="primary" id="end">Zakończ i zobacz wynik</button>'}</div></div>`;$('question').innerHTML=out;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(Number(b.dataset.answer)));$('prev').onclick=()=>advance(-1);if($('next'))$('next').onclick=()=>advance(1);if($('verify'))$('verify').onclick=check;if($('end'))$('end').onclick=finish}
function showResults(){const all=session.ids.map(id=>({q:DB.find(q=>q.id===id),given:session.answers[id]}));const correct=all.filter(x=>x.given===x.q.a).length;const attempted=all.filter(x=>x.given!==undefined).length;const percent=Math.round(correct/all.length*100);let html=`<h2>Wynik testu</h2><div class="stats"><div class="stat"><b>${correct}/${all.length}</b>Poprawne</div><div class="stat"><b>${percent}%</b>Wynik</div><div class="stat"><b>${attempted}</b>Odpowiedziano</div></div><div class="buttons"><button class="primary" id="again">Nowy test</button><button id="reviewwrong">Tylko błędy / pominięte</button><button id="reviewall">Pokaż wszystkie</button></div><div id="reviews"></div>`;$('result').innerHTML=html;$('again').onclick=()=>{$('result').classList.add('hidden');$('settings').classList.remove('hidden');updateResume();window.scrollTo(0,0)};$('reviewwrong').onclick=()=>reviews(all.filter(x=>x.given!==x.q.a));$('reviewall').onclick=()=>reviews(all);reviews(all.filter(x=>x.given!==x.q.a));window.scrollTo(0,0)}
function reviews(items){$('reviews').innerHTML=`<h2 style="margin-top:22px">Przegląd odpowiedzi (${items.length})</h2>`+(items.length?items.map(({q,given})=>`<div class="review"><b>${esc(q.id)} · ${esc(q.q)}</b>${q.code?`<pre style="margin-top:10px">${esc(q.code)}</pre>`:''}<p>Twoja: <b>${given===undefined?'Brak':'ABCD'[given]}</b> ${given===undefined?'':esc(q.opts[given])}</p><p>Prawidłowa: <b>${'ABCD'[q.a]}</b> — ${esc(q.opts[q.a])}</p><p class="muted">${esc(q.why||'')}</p></div>`).join(''):'<p>Brak błędów. Brawo!</p>')}
$('start').onclick=start;$('resume').onclick=resume;$('clear').onclick=()=>{if(confirm('Usunąć zapisany postęp?')){localStorage.removeItem(STORE);updateResume()}};$('backsettings').onclick=()=>{$('quiz').classList.add('hidden');$('settings').classList.remove('hidden');updateResume()};$('bank').onchange=refreshSummary;$('category').onchange=refreshSummary;refreshSummary();updateResume();

// Motyw zapamiętywany lokalnie, domyślnie według ustawień systemu.
const THEME_STORE='ppj_theme_v1';
const themeButton=document.getElementById('theme-toggle');
function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  themeButton.textContent=theme==='dark'?'☀ Jasny motyw':'☾ Ciemny motyw';
  themeButton.setAttribute('aria-label',theme==='dark'?'Włącz jasny motyw':'Włącz ciemny motyw');
}
let storedTheme;
try { storedTheme=localStorage.getItem(THEME_STORE) } catch(e) {}
applyTheme(storedTheme==='dark'||storedTheme==='light'?storedTheme:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
themeButton.addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  applyTheme(next);
  try {localStorage.setItem(THEME_STORE,next)}catch(e){}
});
