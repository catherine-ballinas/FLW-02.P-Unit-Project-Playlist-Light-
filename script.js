// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let image = document.querySelector(".image")
let songName = document.querySelector(".song-name")
let artist = document.querySelector(".artist")
let songLink = document.querySelector(".song-link")

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = ["https://downloads-pearljam-com.s3.amazonaws.com/img/album-art/0223194511vs.jpg", "https://upload.wikimedia.org/wikipedia/en/c/cd/Garbage-the_world_is_not_enough_cover.jpg", "https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw28fadafa/images/releases/20150807_215617_7549_752895.jpeg", "https://i.scdn.co/image/ab67616d0000b273fbf304074b2b73ec843afad6", "https://images.genius.com/95894373ccc5aa5a6428b521bf793fef.1000x1000x1.jpg"]
console.log(imgUrls);
let songName = ["Go", "The world is not enough", "Sad but true", "Let it roll", "Electric eye"]
console.log(songName);
let artists = ["Pearl Jam", "Garbage", "Metallica", "Divide the Day", "Judas Priest"]
console.log(artists);
let songLinks = ["https://www.youtube.com/watch?v=2uF4zYXzL_8", "https://www.youtube.com/watch?v=eI7KxEerCYo", "https://www.youtube.com/watch?v=A8MO7fkZc5o", "https://www.youtube.com/watch?v=SabSu_--9Oc", "https://www.youtube.com/watch?v=yMVV_HsHcX0"]
console.log(songLink);
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  // task 10: use `.push()` to add each input value to the correct array.

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



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
