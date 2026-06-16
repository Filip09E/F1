
const race=new Date('2026-08-01');
const days=Math.ceil((race-new Date())/(1000*60*60*24));
document.getElementById('countdown').textContent=`Do wyścigu zostało ${days} dni.`;
