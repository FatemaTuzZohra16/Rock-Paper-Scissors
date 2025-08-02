let button = document.querySelectorAll(".button")
let result = document.querySelector(".result")
let score = document.querySelector(".score")
let main = document.querySelector(".main")

let userscore = 0;
let computerscore = 0;
let computerOption = ["rock", "paper","scissors"]

button.forEach((item)=>{
    item.addEventListener("click", function(){
        let userChoise = item.getAttribute("data-buttonName").toLowerCase();
        let computerChoise = computerOption[Math.floor(Math.random()*computerOption.length)]

        let winner = oparetion(userChoise,computerChoise)
        result.innerHTML = `Your choise is ${userChoise}-Computer choise is ${computerChoise}  -${winner}`
        score.innerHTML = `Score: You <b><span class="text-red-600">${userscore}</span></b> - <b><span class="text-red-600">${computerscore}</span></b> Computer`
        if(userscore>=5){
            main.innerHTML = 
            `
                <div>
                     <p class="text-red-600 font-bold text-3xl">Game Over</p>
                     <p class="mt-5 mb-3 text-2xl text-green-700">Score: You <b>${userscore}</b> - <b>${computerscore}</b> Computer</p>
                     <p class="text-green-700 font-bold text-3xl">You won the game</p>
                     <form action="">
                        <button class="button bg-red-900 text-white px-7 py-1 font-bold rounded-md mt-7 block mx-auto" type="submit">Play again</button>
                    </form> 
                </div>
            ` 
        }
        if(computerscore>=5){
            main.innerHTML = 
            `
                <div>
                     <p class="text-red-600 font-bold text-3xl">Game Over</p>
                     <p class="mt-5 mb-3 text-2xl text-green-700">Score: You <b>${userscore}</b> - <b>${computerscore}</b> Computer</p>
                     <p class="text-green-700 font-bold text-3xl">Computer won the game</p>
                </div>
                 <form class="text-center" action="">
                    <button class="button bg-red-900 text-white px-4 py-1 font-bold rounded-md mt-7 block mx-auto" type="submit">Play again</button>
                </form>
            ` 
        }
    })
})
function oparetion(user, computer){
    if(user === computer){
        return "Draw the match"
    }else if (
        user == "rock" && computer == "scissors" ||
        user == "paper" && computer == "rock" ||
        user == "scissors" && computer == "paper"
    ) {
        userscore ++
        return "You win"  
    }else{
        computerscore ++
        return "Computer win"
    }

}