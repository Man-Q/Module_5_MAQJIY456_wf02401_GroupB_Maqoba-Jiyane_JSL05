// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Hip-Hop" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Hip-Hop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Hotel California", artist: "Eagles", genre: "Reggae" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Reggae" },
    { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: "Rock" },
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B" },
    { title: "Boogie Wonderland", artist: "Earth, Wind & Fire", genre: "Hip-Hop" },
    { title: "Thunderstruck", artist: "AC/DC", genre: "Rock" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Reggae" }
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Hip-Hop",
    "Groot": "Reggae"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

    // Use Object.entries to get an array of [key, value] pairs from guardians,
    // then map over each pair to create a playlist for each guardian
    return Object.fromEntries(
        Object.entries(guardians).map(([guardian, genre]) => {
            // Filter songs based on the guardian's preferred genre
            const playlist = songs.filter(song => song.genre === genre);
            // Return an array with the guardian's name as the key
            // and their playlist as the value
            return [guardian, playlist];
        })
    );
}

// Call generatePlaylist and display the playlists for each Guardian
const playList = generatePlaylist(guardians, songs);

const playListElement = document.getElementById("playlists");

// Loop through each guardian
for (const guardian in playList) {
    // Create a div element for each guardian's playlist
    const divElement = document.createElement("div");
    divElement.className = "playlist";

    // Create an h2 element to display the guardian's name
    const h2Element = document.createElement("h2");
    h2Element.innerText = `${guardian}'s Playlist`;

    // Append the h2 element to the div
    divElement.append(h2Element);

    // Append the div to the playListElement
    playListElement.append(divElement);

    // Get the array of songs for the current guardian
    const songs = playList[guardian];

    // Loop through each song in the guardian's playlist
    for (const song of songs) {
        // Create a paragraph element for each song
        const paragraphElement = document.createElement("p");

        // Add HTML content to the paragraph element, including song title and artist
        paragraphElement.innerHTML = `<span class="song song-title">${song.title}</span> by ${song.artist}`;

        // Append the paragraph element to the div
        divElement.append(paragraphElement);
    }
}


