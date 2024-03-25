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

// Call generatePlaylist and store the playlists
const playlists = generatePlaylist(guardians, songs);

// Function to display playlists for each guardian in the HTML document
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');

    playlists.forEach(playlist => {
        const guardian = Object.keys(playlist)[0];
        const songs = playlist[guardian];

        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        const heading = document.createElement('h2');
        heading.textContent = `${guardian}'s Playlist:`;

        const playlistList = document.createElement('ul');
        songs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = `${song.title} - ${song.artist}`;
            playlistList.appendChild(listItem);
        });

        guardianDiv.appendChild(heading);
        guardianDiv.appendChild(playlistList);
        playlistsContainer.appendChild(guardianDiv);
    });
}

// Call the displayPlaylists function to render the playlists in the HTML document
displayPlaylists(playlists);

// Log the playlists array to the console
console.log(playlists);
