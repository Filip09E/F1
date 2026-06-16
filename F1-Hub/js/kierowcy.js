
const data=[
['Max Verstappen','Red Bull'],
['Lewis Hamilton','Ferrari'],
['Charles Leclerc','Ferrari'],
['Lando Norris','McLaren'],
['Oscar Piastri','McLaren']
];
const tbody=document.getElementById('drivers');
function render(list){
tbody.innerHTML='';
list.forEach(d=>tbody.innerHTML+=`<tr><td>${d[0]}</td><td>${d[1]}</td></tr>`);
}
render(data);
document.getElementById('search').addEventListener('input',e=>{
render(data.filter(d=>d[0].toLowerCase().includes(e.target.value.toLowerCase())));
});
