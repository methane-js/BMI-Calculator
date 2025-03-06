// Prothome shobgula jinish ke variable e store kori
let Height = document.getElementById('Height');
let Weight = document.getElementById('Weight');
let Button = document.querySelector('button');
let Form = document.querySelector('form');
let Result = document.querySelector('.results');
let Score = document.getElementById('score');
let Comment = document.getElementById('comment');

// ekhn function create kora jak
Button.addEventListener('click', function (){
    // shudhu Height use korle hobe na karon oita raw HTML code return kore
    // amra chacchi je user oi input field e jei number ta dibe sheita niye kaj korte tai ekhane amdr use korte hobe value
    let heightValue = parseFloat(Height.value);
    let weightValue = parseFloat(Weight.value);
    // default vabe egula string akare thake tai amader ke number e convert korte hobe, jehetu ekhane user doshomik number o boshate pare tai ekhane amader ke use korechi parseFloat, ar jodi doshomik er proyojon na hoy tahole parseInt use korlei hobe
    
    heightValue = (heightValue / 100) ** 2; // Height er value ta ke meter e convert kore eta ke square kora hoise
    let BMI = weightValue / heightValue;
    // doshomik er por onek gula ghor ashbe eivabe BMI hishab korle, kintu amra chai doshomik er por dui ghor tai use korte hobe toFixed method;
    let finalBMI = BMI.toFixed(2); // kaj shesh
    Result.style.display = 'block';
    Score.textContent = finalBMI;
    if (Score.textContent <= 18.5){
        Score.style.backgroundColor = '#ffa502';
        Comment.textContent = 'You need to eat more and gain weight';
    }
    else if(Score.textContent <= 24.9){
        Score.style.backgroundColor = '#2ed573';
        Comment.textContent = 'Your Body Is Perfect';
    }
    else{
        Score.style.backgroundColor = '#ff6b81';
        Comment.textContent = 'Your Weight is too much. You must do exercise regularly and lose weight';
    }
})

// ekhane arekta problem ase sheta holo amra jokhoni button ta click kori tokhoni website ta refresh hoye jay (karon eta form ar etai form er default behaviour), ar amaderke ei default behaviour tai change korte hobe
Form.addEventListener('submit', function(e){
    e.preventDefault(); // successfully kaj koreche :)
});