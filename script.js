// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let userURL = document.querySelector(".display-image");
let userSong = document.querySelector(".display-song");
let userArtist = document.querySelector(".display-artist");
let userLink = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
//let imageURL =["pics/uzumaki.jpeg", "pics/hype boy.jpeg", "pics/around the fur.webp", "pics/Jus2.jpg", "pics/flutter - julie.jpeg" ];
//let songNameArray = ["うずまき (Uzumaki)","Hype Boy", "Mascara","Focus On Me", "Flutter"];
  //let songLinkArray = ["https://www.youtube.com/watch?v=fYkShnaf454","https://www.youtube.com/watch?v=ghrlZIMDzbM","https://www.youtube.com/watch?v=XhCBruock0E","https://www.youtube.com/watch?v=uf27Hxrglrk", "https://youtu.be/V9VM1SI1uYw"];
  //let artistArray = ["Machine Girl","New Jeans","Deftones","Jus2", "Julie"]



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.

let Uzumaki = {
  imageURL: "pics/uzumaki.jpeg",
  songname: "Uzumaki",
  artist: "Machine Girl",
  songlink: "https://www.youtube.com/watch?v=fYkShnaf454"
};
  let hypeBoy = {
  imageURL: "pics/hype boy.jpeg",
  songname: "Hype Boy",
  artist: "New Jeans",
  songlink: "https://www.youtube.com/watch?v=ghrlZIMDzbM"
  };
let Mascara = {
  imageURL: "pics/around the fur.webp",
  songname: "Mascara",
  artist: "Deftones",
  songlink: "https://www.youtube.com/watch?v=ghrlZIMDzbM"
  };

let FocusOnMe = {
  imageURL: "pics/Jus2.jpg",
  songname: "Focus On Me", 
  artist: "Jus2",
  songlink:"https://www.youtube.com/watch?v=uf27Hxrglrk"
};
let Flutter = {
  imageURL: " pics/flutter - julie.jpeg",
  songname: "Flutter",
  artist: "Julie",
  songlink: "https://youtu.be/V9VM1SI1uYw"
};
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

// task 14: create an array that stores all of the objects.
let Songs = [Uzumaki, hypeBoy, Mascara, FocusOnMe, Flutter];


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.

// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
// let saveUrl = songLinkArray;
// let saveArtist = artistArray;
// let saveImage = imageURL;
// let saveName = songNameArray;

// // task 10: use `.push()` to add each input value to the correct array.
//   songLinkArray.push(saveUrl);
//   artistArray.push(saveArtist);
//   imageURL.push(saveImage);
//   songNameArray.push(saveName);
  
//   console.log(saveArtist)
  let userSong = { 
  imageURL: image.value,
  songname: songName.value,
  artist: artist.value,
  songlink: songLink.value 
};
  Songs.push(userSong);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for (let index = 0; index < Songs.length; index++){
  let song = Songs[index];  
  userLink.insertAdjacentHTML("beforeend",`<a href="${song.songLink}">Listen Here!</a>`);
userSong.insertAdjacentHTML("beforeend",`<p>${song.songname}</p>`);
  userArtist.insertAdjacentHTML("beforeend",`<p>${song.artist}</p>`);
  userURL.insertAdjacentHTML("beforeend",`<img src="${song.imageURL}">`);
}
}
// for (let index = 0; index < addSongInfo.length; index++){
// let album = addSongInfo[index];
//   userURL.insertAdjacentHTML("beforeend", `<img src ="${album}">`);
// }
//   for (let i = 0; i < songNameArray.length; i++){
// let songs = songNameArray[i];
//   userSong.insertAdjacentHTML("beforeend", `<p>${songs}</p>`);
// }
// for (let singer = 0; singer < artistArray.length; singer++){
//  let artist = artistArray[singer];
//   userArtist.insertAdjacentHTML("beforeend",`<p>${artist}</p>`);
// }
// for (let link = 0; link < songLinkArray.length; link++){
//   let song = songLinkArray[link];
//   userLink.insertAdjacentHTML("beforeend",`<a href="${song}">Listen Here!</a>`);






// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  userURL.innerHTML="";
  userSong.innerHTML="";
  userArtist.innerHTML="";
  userLink.innerHTML="";
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();