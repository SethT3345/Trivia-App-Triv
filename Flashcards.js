class Card{
    constructor(player, number){
        this.player = player;
        this.number = number;
    }
}

var card1 = new Card("Tom Brady", "12")
var card2 = new Card("Cal Raleigh", "29")
var card3 = new Card("Steph Curry", "30")
var card4 = new Card("Russel Wilson", "3")
var card5 = new Card("Aaron Judge", "99")
var card6 = new Card("Lebron James", "23")
var card7 = new Card("Cam Skatabo", "44")
var card8 = new Card("Shohei Ohtani", "17")
var card9 = new Card("Paul George", "13")
var card10 = new Card("Fred Warner", "54")
var card11 = new Card("Bobby Witt Jr", "7")
var card12 = new Card("Rudy Gobert", "27")

let card1anw = false;
let card2anw = false;
let card3anw = false;
let card4anw = false;
let card5anw = false;
let card6anw = false;
let card7anw = false;
let card8anw = false;
let card9anw = false;
let card10anw = false;
let card11anw = false;
let card12anw = false;

// Global variable for current quiz question index
let nqi = 0;



function revealanswer(cardnum){
    console.log("Card number:", cardnum);

    let cardVar = window[`card${cardnum}`];
    let answerFlag = window[`card${cardnum}anw`];
    
    console.log("Card object:", cardVar);
    console.log("Answer flag:", answerFlag);
    
    if (answerFlag === true){
        document.getElementById(`box${cardnum}`).innerHTML = `<span class="text-lg font-semibold">${cardVar.player}</span>`;
        window[`card${cardnum}anw`] = false;
    }
    else{
        document.getElementById(`box${cardnum}`).innerHTML = `<span class="text-lg font-semibold">${cardVar.number}</span>`;
        window[`card${cardnum}anw`] = true;
    }
}

function enterQuiz(){

    nqi = 1; // Reset the quiz question index

    document.getElementById("contan").innerHTML = `
        <!-- Top row -->
        <div id="ifc1" onclick="checkforcorrect(1)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box1">
            <span class="text-lg font-semibold">Tom Brady</span>
        </div>
        <div id="ifc2" onclick="checkforcorrect(2)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box2">
            <span class="text-lg font-semibold">Cal Raleigh</span>
        </div>
        <div id="ifc3" onclick="checkforcorrect(3)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box3">
            <span class="text-lg font-semibold">Steph Curry</span>
        </div>
        <div id="ifc4" onclick="checkforcorrect(4)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box4">
            <span class="text-lg font-semibold">Russel Wilson</span>
        </div>
        
        <!-- Second row -->
        <div id="ifc5" onclick="checkforcorrect(5)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box5">
            <span class="text-lg font-semibold">Aaron Judge</span>
        </div>
        <!-- Middle large box (spans 2x2) -->
        <div class="bg-blue-500 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center col-span-2 row-span-2">
            <span class="text-2xl font-bold">Quiz Mode!</span>
            <span id="pqb" class="text-4xl mt-5 mb-5 text-white font-bold">Fnd Player Who Wears ${playernums[nqi]}</span>
            <button class="mt-4 bg-blue-200 hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-600">
                Practice Mode
            </button>
        </div>
        <div id="ifc6" onclick="checkforcorrect(6)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box6">
            <span class="text-lg font-semibold">Lebron James</span>
        </div>
        
        <!-- Third row -->
        <div id="ifc7" onclick="checkforcorrect(7)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box7">
            <span class="text-lg font-semibold">Cam Skatabo</span>
        </div>
        <!-- Middle box continues here (row-span-2) -->
        <div id="ifc8" onclick="checkforcorrect(8)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box8">
            <span class="text-lg font-semibold">Shohei Ohtani</span>
        </div>
        
        <!-- Bottom row -->
        <div id="ifc9" onclick="checkforcorrect(9)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box9">
            <span class="text-lg font-semibold">Paul George</span>
        </div>
        <div id="ifc10" onclick="checkforcorrect(10)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box10">
            <span class="text-lg font-semibold">Fred Warner</span>
        </div>
        <div id="ifc11" onclick="checkforcorrect(11)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box11">
            <span class="text-lg font-semibold">Bobby Witt Jr</span>
        </div>
        <div id="ifc12" onclick="checkforcorrect(12)" class="bg-blue-200 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300" id="box12">
            <span class="text-lg font-semibold">Rudy Gobert</span>
        </div>
    `
}


    let playernums = [
        0,
        card2.number,
        card5.number,
        card11.number,
        card12.number,
        card8.number,
        card6.number,
        card7.number,
        card9.number,
        card1.number,
        card3.number,
        card4.number,
        card10.number
    ];

function checkforcorrect(cardnum){

    let cardVar = window[`card${cardnum}`];
    let answerFlag = window[`card${cardnum}anw`];

    if(cardVar.number === playernums[nqi]){
        let boxElement = document.getElementById(`ifc${cardnum}`);
        let promptelement = document.getElementById("pqb");

        boxElement.className = boxElement.className.replace('bg-blue-200', 'bg-green-200');
        boxElement.className = boxElement.className.replace('hover:bg-blue-300', '');
        nqi += 1;

        promptelement.innerHTML = `<span id="pqb" class="text-4xl mt-5 mb-5 text-white font-bold">Fnd Player Who Wears ${playernums[nqi]}</span>`

    }
    else{
        console.log("no");
    }
}