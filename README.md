## Welcome to gospel-gamers.com

This is the website of gospel_gamers. The source code is public under the `MIT License`.
Three of my favorite self-created projects are linked on my coding page:

**Jazz Chord Generator**

Create smooth jazz chords and voicings! Just choose a key, what type of chord and which voicings you would like to hear.
My code will color-code the scale degrees and also play the sound of the chord with an ePiano sound.
Read `jazzKnowledge.md` for the music theory.

**Scale Generator**

Listen to various different types of scales. From the Western `Church modes` to `Pentatonic`, `Exotic` and more... just choose a key, the genre and then a scale and watch my code do the rest!
My code will color-code the scale degrees and also play the scale in ascending order with a grand piano sound.

**Spotify Playlist Generator**

Create a Spotify playlist which makes use of the Spotify Web API to search and save songs. This is still under development as the final step will be actually saving a playlist to a user's personal Spotify account using OAuth 2.0.

**Tech Tips**

The main website files are found under:
`/knabeWebsite/newWebLook.gospel_gamers_new_website/`

The main logic for the jazz chord creator is found under:
`/knabeWebsite/jazzPianoReact/jazzLogic/jazz_chord_generator.js`

The main logic for scales chord creator is found under:
`/knabeWebsite/jazzPianoReact/jazzLogic/scale_gen_inspiration.js`

The logic for the Spotify creator is found in a whole separate repo:
- https://github.com/gospel-gamers/spotify-playlist-website

Required packages found in the `package.json` file. 

If vite is acting weird, try running the following command in the `/gospel-gamers/gospel_gamers.github.io/knabeWebsite/newWebLook/gospel_gamers_new_website` directory: 
- `npm i -D vite @vitejs/plugin-react-refresh`
