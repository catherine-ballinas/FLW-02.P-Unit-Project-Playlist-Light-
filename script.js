// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let inputImage = document.querySelector(".image");
let inputSongName = document.querySelector(".song-name");
let inputArtist = document.querySelector(".artist");
let inputSongLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let displayImage = document.querySelector(".display-image")
let displaySongName = document.querySelector(".display-song")
let displayArtists = document.querySelector(".display-artist")
let displaySongLink = document.querySelector(".display-song")

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let images = ["https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/0223194511vs.jpg", "https://upload.wikimedia.org/wikipedia/en/c/cd/Garbage-the_world_is_not_enough_cover.jpg", "https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw28fadafa/images/releases/20150807_215617_7549_752895.jpeg", "https://i.scdn.co/image/ab67616d0000b273fbf304074b2b73ec843afad6", "https://images.genius.com/95894373ccc5aa5a6428b521bf793fef.1000x1000x1.jpg"]
// console.log(imgUrls);
let songName = ["Go", "The world is not enough", "Sad but true", "Let it roll", "Electric eye"]
console.log(songName);
let artists = ["Pearl Jam", "Garbage", "Metallica", "Divide the Day", "Judas Priest"]
console.log(artists);
let songLinks = ["https://www.youtube.com/watch?v=2uF4zYXzL_8", "https://www.youtube.com/watch?v=eI7KxEerCYo", "https://www.youtube.com/watch?v=A8MO7fkZc5o", "https://www.youtube.com/watch?v=SabSu_--9Oc", "https://www.youtube.com/watch?v=yMVV_HsHcX0"]
console.log(songLinks);
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.


// let songs = {
//   go: "image", "songName", "artists", "songLink",
//   theWorldIsNotEnough: "image", "songName", "artists", "songLink",
//   sadButTrue: "image", "songName", "artists", "songLink",
//   letItRoll: "image", "songName", "artists", "songLink",
//   electricEye: "image", "songName", "artists", "songLink"
// };

let song1 = {
  image: "https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/0223194511vs.jpg",
  songName: "Go",
  artists: "Pearl Jam",
  songLink: "https://www.youtube.com/watch?v=2uF4zYXzL_8"
}

let song2 = {
  image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Garbage-the_world_is_not_enough_cover.jpg", 
  songName: "The World is not Enough", 
  artists: "Garbage",
  songLink: "https://www.youtube.com/watch?v=eI7KxEerCYo"
}
    let song3 = {
  image: "https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw28fadafa/images/releases/20150807_215617_7549_752895.jpeg", 
  songName: "Sad but True", 
  artists: "Metallica",
  songLink: "https://www.youtube.com/watch?v=A8MO7fkZc5o"
}
let song4 = {
  image: "https://i.scdn.co/image/ab67616d0000b273fbf304074b2b73ec843afad6", 
  songName: "Let it Roll", 
  artists: "Divide the Day",
  songLink: "https://www.youtube.com/watch?v=SabSu_--9Oc"
}
let song5 = {
  image: "https://images.genius.com/95894373ccc5aa5a6428b521bf793fef.1000x1000x1.jpg", 
  songName: "Electric Eye", 
  artists: "Judas Priest",
  songLink: "https://www.youtube.com/watch?v=yMVV_HsHcX0"
}
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
// songs.go[];
// songs.theWorldIsNotEnough[];
// songs.sadButTrue[];
// songs.letItRoll[];
// songs.electricEye[];
// console.log(songObject.image)
// console.log(songObject.)
// console.log()
// console.log()
console.log(song1);
console.log(song2);
console.log(song3);
console.log(song4);
//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let image = display-image;
  let songName = display-song;
  let artists = display-artist;
  let songLink = display-link;
  // task 10: use `.push()` to add each input value to the correct array.
images.push("addImage");
songName.push("addSongName");
artists.push("addArtists");
songLinks.push("addSongLink");
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
  for (let i = 0; i <= images.length; i++) {
    displayImage.insertAdjacentHTML('beforeend', `<img src="${images[i]}" width="100" height="100" />`)
  }
  for (let i = 0; i <= songName.length; i++) {
    displaySongName.insertAdjacentHTML('beforeend', `<div>${songName[i]}</div>`)
  }
  for (let i = 0; i <= artists.length; i++) {
    displayArtists.insertAdjacentHTML('beforeend', `<div>${artists[i]}</div>`)
  }
  for (let i = 0; i <= songLinks.length; i++) {
    displaySongLink.insertAdjacentHTML('beforeend', `<div>${songLinks[i]}</div>`)
  }
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
