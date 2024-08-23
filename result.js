let quizuser=JSON.parse(localStorage.getItem("quiz_user"))
let userResult=quizuser.quiz
console.log(quizuser);

let main=document.querySelector("main")
let score=0;
userResult.forEach((e) => {
    // main.innerHTML += `<p>${e.question}</p>
    // <h3>Your Answer: ${e.userAnswer}</h3>            //todo Easy way
    // <h2>Correct Answer: ${e.crctAnswer}</h2>`


    let div=document.createElement("div");
    main.append(div);
    if(e.userAnswer == e.crctAnswer){
        div.className="crct";
        score++;
    }
    else{
        div.className="wrong";
    }

    let p=document.createElement("p")
    p.innerHTML=e.question
    let h3=document.createElement("h3");
    h3.innerHTML=`Your Answer: ${e.userAnswer}`;
    let h2=document.createElement("h2");
    h2.innerHTML=`Correct Answer: ${e.crctAnswer}`;

    div.append(p,h3,h2)


});


let username=document.querySelector("#name")
let userscore=document.querySelector("#score")
let innerDiv=document.querySelector("#innerDiv")
// let outerDiv=document.querySelector("#outerDiv")
let width=0;

let marks=document.querySelector("#marks")

username.innerHTML=quizuser.first;
userscore.innerHTML=`${score}/${userResult.length}`

let interval=setInterval(()=>{
    width++;
    innerDiv.style.width=`${width}%`
    if(width>(score/userResult.length)*100){
        clearInterval(interval);
        marks.innerHTML=`${((score/userResult.length)*100).toFixed(2)} %`;
        marks.style.display="block"
    }
},20)





