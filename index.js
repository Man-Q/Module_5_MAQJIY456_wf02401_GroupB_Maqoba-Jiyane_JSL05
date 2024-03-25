// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Five additional songs
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Sweet Caroline", artist: "Neil Diamond", genre: "Pop" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" }
    // Add more songs as needed
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Metal",
    "Rocket": "Hip-Hop",
    "Groot": "Reggae"
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    return Object.keys(guardians).map(guardian => {
        const preference = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preference);
        return { [guardian]: playlist };
    });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlist = generatePlaylist(guardians, songs);
console.log(playlist);
const divElement = document.getElementById("playlists");

/*for(let i = 0; i < playlist.length; i++){

    // create a new element
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.className = "playlist";
    h2.innerText = `${Object.keys(playlist[i]).toString()}'s Playlist`

    div.append(h2);
    divElement.append(div);
    // Iterate over each key in the object
    for (const key in playlist[i]) {
        const span = document.createElement("span");
        span.className = "song-title";
        span.innerText = key;
        div.append(span);
        console.log(span);
    }
}
*/
// Iterate over each character's playlist
for (const character of playlist) {
    
    // create a new element
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.className = "playlist";
    //h2.innerText = `${Object.keys(playlist[i]).toString()}'s Playlist`;
    console.log(character[Object.keys(character)[0]]);

    div.append(h2);
    divElement.append(div);

    // Access the array of songs for the current character
    const songs = character[Object.keys(character)[0]]; // Get the first (and only) key of the character object
    
    // Iterate over each song in the current character's playlist
    for (const song of songs) {
        console.log(song.title); // Print the title of the song
    }
}