"use strict";
const $=id=>document.getElementById(id);
const STORE='ppj_quiz_v1';let session=null;
const categoryNames={'Podstawy i operatory':'Basics and operators','Warunki, pętle i algorytmy':'Conditions, loops and algorithms','Tablice jednowymiarowe':'One-dimensional arrays'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffled=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(session))}catch(e){}};
function updateResume(){let ok=false;try{const s=JSON.parse(localStorage.getItem(STORE));ok=!!(s&&Array.isArray(s.ids)&&s.ids.length)}catch(e){} $('resume').classList.toggle('hidden',!ok)}
function pool(){return DB.filter(q=>($('bank').value==='all'||q.source===$('bank').value)&&($('category').value==='all'||q.category===$('category').value))}
function refreshSummary(){const p=pool();$('dbsummary').textContent=`Question bank: ${DB.filter(q=>q.source==='canonical').length} canonical and ${DB.filter(q=>q.source==='extra').length} additional. Matching your filters: ${p.length}. Original question IDs are preserved.`}
function start(){let list=pool();if(!list.length){alert('No questions match these filters.');return}if($('shuffle').checked)list=shuffled(list);const count=$('count').value==='all'?list.length:Math.min(Number($('count').value),list.length);session={ids:list.slice(0,count).map(q=>q.id),idx:0,answers:{},checked:{},immediate:$('immediate').checked,finished:false};save();render()}
function resume(){try{const s=JSON.parse(localStorage.getItem(STORE));if(!s||!s.ids?.length)return;s.ids=s.ids.filter(id=>DB.some(q=>q.id===id));if(!s.ids.length)return;s.idx=Math.min(s.idx,s.ids.length-1);session=s;render()}catch(e){alert('Could not load saved progress.')}}
function answer(i){const id=session.ids[session.idx];if(session.checked[id])return;session.answers[id]=i;if(session.immediate)session.checked[id]=true;save();render()}
function check(){const id=session.ids[session.idx];if(session.answers[id]===undefined)return;session.checked[id]=true;save();render()}
function advance(d){session.idx=Math.max(0,Math.min(session.ids.length-1,session.idx+d));save();render()}
function finish(){session.finished=true;save();render()}
function render(){if(!session)return;$('settings').classList.add('hidden');$('quiz').classList.toggle('hidden',session.finished);$('result').classList.toggle('hidden',!session.finished);if(session.finished){showResults();return}const id=session.ids[session.idx],q=DB.find(q=>q.id===id),choice=session.answers[id],checked=session.checked[id],done=session.ids.filter(id=>session.answers[id]!==undefined).length; $('counter').textContent=`Question ${session.idx+1} of ${session.ids.length} · Answered: ${done}`;$('bar').style.width=(done/session.ids.length*100)+'%';document.querySelector('.progress').setAttribute('aria-valuenow',Math.round(done/session.ids.length*100));let out=`<div class="meta"><span class="tag">${esc(q.id)}</span><span class="tag">${q.source==='canonical'?'Canonical':'Additional'}</span><span class="tag">${esc(categoryNames[q.category]||q.category)}</span></div><h2>${esc(q.q)}</h2>${q.code?`<pre>${esc(q.code)}</pre>`:''}<div class="opts">`;q.opts.forEach((o,i)=>{const classes=['opt'];if(i===choice)classes.push('chosen');if(checked&&i===q.a)classes.push('correct');if(checked&&i===choice&&i!==q.a)classes.push('wrong');out+=`<button type="button" class="${classes.join(' ')}" data-answer="${i}" ${checked?'disabled':''}><span class="letter">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`});out+='</div>';if(checked)out+=`<div class="feedback"><b>${choice===q.a?'✓ Correct!':'✗ Incorrect.'}</b> Correct answer: <b>${'ABCD'[q.a]}</b>. ${esc(q.why||'')}</div>`;out+=`<div class="foot"><button id="prev" ${session.idx===0?'disabled':''}>← Previous</button><div class="buttons" style="margin:0">${!checked&&session.immediate===false&&choice!==undefined?'<button id="verify">Check answer</button>':''}${session.idx<session.ids.length-1?'<button class="primary" id="next">Next →</button>':'<button class="primary" id="end">Finish and view results</button>'}</div></div>`;$('question').innerHTML=out;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(Number(b.dataset.answer)));$('prev').onclick=()=>advance(-1);if($('next'))$('next').onclick=()=>advance(1);if($('verify'))$('verify').onclick=check;if($('end'))$('end').onclick=finish}
function showResults(){const all=session.ids.map(id=>({q:DB.find(q=>q.id===id),given:session.answers[id]}));const correct=all.filter(x=>x.given===x.q.a).length;const attempted=all.filter(x=>x.given!==undefined).length;const percent=Math.round(correct/all.length*100);let html=`<h2>Quiz results</h2><div class="stats"><div class="stat"><b>${correct}/${all.length}</b>Correct</div><div class="stat"><b>${percent}%</b>Score</div><div class="stat"><b>${attempted}</b>Answered</div></div><div class="buttons"><button class="primary" id="again">New quiz</button><button id="reviewwrong">Incorrect / skipped only</button><button id="reviewall">Show all answers</button></div><div id="reviews"></div>`;$('result').innerHTML=html;$('again').onclick=()=>{$('result').classList.add('hidden');$('settings').classList.remove('hidden');updateResume();window.scrollTo(0,0)};$('reviewwrong').onclick=()=>reviews(all.filter(x=>x.given!==x.q.a));$('reviewall').onclick=()=>reviews(all);reviews(all.filter(x=>x.given!==x.q.a));window.scrollTo(0,0)}
function reviews(items){$('reviews').innerHTML=`<h2 style="margin-top:22px">Answer review (${items.length})</h2>`+(items.length?items.map(({q,given})=>`<div class="review"><b>${esc(q.id)} · ${esc(q.q)}</b>${q.code?`<pre style="margin-top:10px">${esc(q.code)}</pre>`:''}<p>Your answer: <b>${given===undefined?'Skipped':'ABCD'[given]}</b> ${given===undefined?'':esc(q.opts[given])}</p><p>Correct: <b>${'ABCD'[q.a]}</b> — ${esc(q.opts[q.a])}</p><p class="muted">${esc(q.why||'')}</p></div>`).join(''):'<p>No mistakes. Well done!</p>')}
$('start').onclick=start;$('resume').onclick=resume;$('clear').onclick=()=>{if(confirm('Delete saved progress?')){localStorage.removeItem(STORE);updateResume()}};$('backsettings').onclick=()=>{$('quiz').classList.add('hidden');$('settings').classList.remove('hidden');updateResume()};$('bank').onchange=refreshSummary;$('category').onchange=refreshSummary;refreshSummary();updateResume();

// Motyw zapamiętywany lokalnie, domyślnie według ustawień systemu.
const THEME_STORE='ppj_theme_v1';
const themeButton=document.getElementById('theme-toggle');
function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  themeButton.textContent=theme==='dark'?'☀ Light mode':'☾ Dark mode';
  themeButton.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');
}
let storedTheme;
try { storedTheme=localStorage.getItem(THEME_STORE) } catch(e) {}
applyTheme(storedTheme==='dark'||storedTheme==='light'?storedTheme:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
themeButton.addEventListener('click',()=>{
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  applyTheme(next);
  try {localStorage.setItem(THEME_STORE,next)}catch(e){}
});
