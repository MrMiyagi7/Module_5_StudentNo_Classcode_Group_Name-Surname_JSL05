// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "SICKO MODE", artist: "Travis Scott", genre: "Rap" },
  { title: "HUMBLE.", artist: "Kendrick Lemar", genre: "Rap" },
  { title: "Blinding Lights", artist: "The Weekend", genre: "Pop" },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
  { title: "Blame It", artist: "Jamie Foxx ft. T-Pain", genre: "R&B" },
  { title: "Titanium", artist: "David Guetta ft. Sia", genre: "EDM" },
  { title: "Wake Me Up", artist: "Avicii", genre: "EDM" },

  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Rap",
  Rocket: "EDM",
  Groot: "R&B",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  const guardianEntries = Object.entries(guardians);

  return guardianEntries.map(([guardian, genre]) => {
    const filteredSongs = songs.filter((song) => song.genre === genre);
    return { guardian, playlist: filteredSongs };
  });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
