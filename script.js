
// --------bubble creation---------

function makebubble()
{
    var bubbles="";
for(var i=0;i<154;i++)
{
    var randm=Math.floor(Math.random()*10)
    bubbles +=`<div class="bubble"> ${randm} </div>`;
    // this add  i no. of bubbles to bubbles var but dont print 
    // so use inner html to print them on screen
}
document.querySelector("#body").innerHTML=bubbles;
}
makebubble();

// ----timer----

var timer=60;
function runtimer()
{ 
    
    
  var stopinterval =  setInterval(function(){
            if(timer>0)
            {
                timer--;
                document.getElementById("timervalue").textContent=timer;
                // this will stop after 60 sec but setInterval run after this as well so we have to stop it after 
                // if fail so to stop it we store it in a variable so after if fail it will enter in to else 
                // in else we stop this variable
            }
            else
            {
                clearInterval(stopinterval);
                // it is used because even after timer is stoped setinterval is not stopped so 
                // to stop set interval after timer went to 0 we have to use this 
                // it only exixute only when timer condition fsiled
                document.querySelector("#body").innerHTML="<h2>Game Over</h2>";
            }       
    },1000); 
}
runtimer();
var hitvalchg;
function hitchange()
{
     hitvalchg=Math.floor(Math.random()*10);
    //hitvalchang should be declared outside function
    //since we want to use this in outside function
    document.getElementById("hitid").textContent=hitvalchg;
     //console.log(hitvalchg);
     //we get randome number but that number is not 
     //number it is string so we want number
}
hitchange();

var allbubbleselect= document.getElementById("body");
//if youclick any where on body it will increase
//evnent bubbling we have not added event listner to score 
// added to its parent so so when clicked on bubbles
// it will look in to parent body this is called event bubbling 
// we cant add to all bubbles so we use this technique
var score=0;
//outsidde if initialted inside it will not increase
//we can't call if it is declare in function;
function scoreincrease()
{
  score+=10;
  document.getElementById("scoreid").textContent=score;
  
  //which element has trigered an event 
}

function ineventlistr(detailsfound)
{
    //alert("working");
    var clickedno =Number( detailsfound.target.textContent);
    //detailsfound.target.textContent this is string so we have to convert it to nuber using Number()
    if(hitvalchg===clickedno)
    {
       scoreincrease(); 
       makebubble();
       hitchange();
       //even after timer 0 we can still play game
       //so remove all bubble and show end game

    }
    
     // Call the scoreincrease function when the body is clicked
}
allbubbleselect.addEventListener("click",ineventlistr);
//all bubbles select body by clcking on body it call in eventlistner function it will pass evert thig to 
//details found we fet what is is clicked on which bubble by using target target means which element has 
//triggered an event with in that body 
//if we click on body it will return all numbers ,if we click on button it will return only that button content
// by adding nuber if we click on body it will return naN
