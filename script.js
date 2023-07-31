const display = document.getElementById('display');
let btns = document.querySelectorAll('.btns');
const clearBtn = document.getElementById('clear');
const solve = document.getElementById('solve');
console.log(btns)
for(i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(e){
    const val = e.target.innerText;
    display.value += val;
  })
}

clearBtn.addEventListener('click', function(){
  display.value = "";
});

solve.addEventListener('click', function() {
  const val1 = display.value;
  const ans = eval(val1);
  display.value = ans;
})


