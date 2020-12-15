const $check=document.getElementById('checkbox');
const $switch=document.getElementById('switch');

$check.addEventListener('change',()=>{
  document.body.classList.toggle('dark');
  $switch.classList.toggle('on');
})

