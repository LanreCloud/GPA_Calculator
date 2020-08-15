const score = document.getElementById("score");
const point = document.getElementById("point");
const grade = document.getElementById("grade");
console.log(score);
score.addEventListener("onchange", ()=> {
    console.log(score.value);
    if(score.value == "70"){
        console.log("YES");
    }
})
