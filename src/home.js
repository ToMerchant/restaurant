function home() {
let container = document.getElementById('content');
container.innerHTML = '';

let header =document.createElement('h1');
header.textContent = "⭐⭐⭐⭐⭐";
container.appendChild(header);

let review = document.createElement('p');
review.setAttribute("id", "review");
review.textContent = "The Restaurant at the End of the Universe is one of the most extraordinary ventures in the entire history of catering.\r\n\r\n\
It is built on the fragmented remains of an eventually ruined planet which is (wioll haven be) enclosed in a vast time bubble and projected forward in time to the precise moment of the End of the Universe.\r\n\r\n\
This is, many would say, impossible.\r\n\r\n\
In it, guests take (willan on-take) their places at table and eat (willan on eat) sumptuous meals while watching (willing watchen) the whole of creation explode around them.\r\n\r\n\
This, many would say, is equally impossible.\r\n\r\n\
You can arrive (mayan arrivan on-when) for any sitting you like without prior (late fore-when) reservation because you can book retrospectively, as it were, when you return to your own time (you can have on-book haventa forewhen presooning returningwenta retrohome).\r\n\r\n\
This is, many would now insist, absolutely impossible.\r\n\r\n\
At the Restaurant you can meet and dine with (mayan meetan con with dinan on when) a fascinating cross-section of the entire population of space and time.\r\n\r\n\
This, it can be explained patiently, is also impossible.\r\n\r\n\
";
container.appendChild(review);
};

export default home;