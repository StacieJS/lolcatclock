
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var timeEvent = document.getElementById ("timeEvent");
var message = document.getElementById ("timeEvent");
var lolcat = document.getElementById('lolcat');
var image = "https://cattreeuk-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Cat-Waking-Me-Up.jpg";
var image = "http://petslady.com/sites/default/files/inline-images/a%20frees%207.jpg";
var image = "http://sleepboston.com/wp-content/uploads/2018/03/Cat-Sleeping-in-Keyboard-300x200.jpg";
var image = "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg";	
var image = "https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_960_720.jpg";   
var image = "https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_960_720.jpg";
var image = "https://cdn.pixabay.com/photo/2014/09/13/05/06/cat-443604_960_720.jpg";    
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeupTimeSelector =  document.getElementById("wakeupTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

			   
										   
if (time == partyTime){
	image = "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg";	
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
    image = "http://sleepboston.com/wp-content/uploads/2018/03/Cat-Sleeping-in-Keyboard-300x200.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "http://petslady.com/sites/default/files/inline-images/a%20frees%207.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://cattreeuk-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Cat-Waking-Me-Up.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_960_720.jpg"; 
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_960_720.jpg"; 
    messageText = "Good Evening!";
} else {
	image = "https://cdn.pixabay.com/photo/2014/09/13/05/06/cat-443604_960_720.jpg"; 
    messageText = "Good afternoon!";
}

timeEvent.innerText = messageText;
lolcat.src = image;



var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

var noon = 12;
var evening = 18; // 6PM
 
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchtime + 2; // 2PM
var time = new Date().getHours();

var updateClock = function ()
{
	
	if (time == partyTime){
	image = "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg";	
   	 messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
    	image = "http://sleepboston.com/wp-content/uploads/2018/03/Cat-Sleeping-in-Keyboard-300x200.jpg";
    	messageText = "IZ NAP TIME…";
	} else if (time == lunchTime) {
	image = "http://petslady.com/sites/default/files/inline-images/a%20frees%207.jpg";
   	 messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
	image = "https://cattreeuk-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Cat-Waking-Me-Up.jpg";
    	messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
	image = "https://cdn.pixabay.com/photo/2016/04/25/10/57/cat-1351612_960_720.jpg"; 
   	 messageText = "Good morning!";
	} else if (time > evening) {
	image = "https://cdn.pixabay.com/photo/2018/01/19/15/29/cat-3092650_960_720.jpg"; 
   	 messageText = "Good Evening!";
	} else {
	image = "https://cdn.pixabay.com/photo/2014/09/13/05/06/cat-443604_960_720.jpg"; 
    	messageText = "Good Afternoon!";
}
	
showCurrentTime();

}
 
updateClock();

var oneSecond = 1000; 
	
setInterval( updateClock, oneSecond);




// set isPartyTime to false
var isPartyTime = false;
 
var partyEvent = function() {
   
   //check isPartyTime
   if (isPartyTime === false){ 
        // if isPartyTime is false, change it to true 
        //so we know the button has been clicked
        isPartyTime = true; 
        // set time to partyTime so the lolCat clock 
        //image and message update to the partyTime image and message
        time = partyTime; 
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#222";
    } else { 
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false; 
        // set time back to the current time
        time = new Date().getHours(); 
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
 
};

var wakeupEvent = function() {
    wakeupTime = wakeupTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};



partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeupTimeSelector.addEventListener('change', wakeupEvent);
