let myShart = document.querySelector('.shart');
let myMohtawa = document.querySelector('.mohtawa');
let myMoht = document.querySelector('.moht');
myMoht.classList.remove('mohtawa');


console.log(myShart);
console.log(myMohtawa);

myShart.addEventListener('click',function(){
    myMoht.classList.toggle('mohtawa');
})