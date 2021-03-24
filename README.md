# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Daniel Nguyen**

Time spent: **15** hours spent in total

Link to project: https://glitch.com/edit/#!/proud-elegant-dream

## Required Functionality

The following **required** functionality is complete:

* [*] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [*] "Start" button toggles between "Start" and "Stop" when clicked. 
* [*] Game buttons each light up and play a sound when clicked. 
* [*] Computer plays back sequence of clues including sound and visual cue for each button
* [*] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [*] User wins the game after guessing a complete pattern
* [*] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [*] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [*] Buttons use a pitch (frequency) other than the ones in the tutorial
* [*] More than 4 functional game buttons
* [*] Playback speeds up on each turn
* [*] Computer picks a different pattern each time the game is played
* [*] Player only loses after 3 mistakes (instead of on the first mistake)
* [*] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [*] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/decf09a8-c01a-47c4-83cc-9f0fc9577d85%2Flightandsoundgame1.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

www.w3schools.com

www.codeacademy.org

www.stackoverflow.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A lot of difficulty with this challenge is trying to implement new things. I don't have too much background in javascript so I had to look for online resources and spent a lot of time tinkering with different trials (especially when implementing images upon button press and guess count/timer). I also had to spend a very decent amount of time during the logic portion of the code (specifically when creating the overall game logic. However, I managed to overcome that by reviewing the code and making sure I understood all of what was happening, as well as asking for help before making sure all the bugs were ironed by out comparing my code to the one provided by the guide. However, a lot of these challenges made me think outside of the box. One example of this was when implementing images upon flash, I realized I could set the background of the button to the image and adjust, rather than needing to use hidden classes via the html page. Another example was when creating timer, I realized I could just have a counter starting from 10 going down using a setInterval that starts that the same time the internal timer for the 10 seconds the player has left on the game begins and it would simulate having the same time instead of having to display the setInterval timer directly.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A few of the questions I have involving web development include:
What is the best-practice/standard way to handle websites with multiple pages?
How do websites like squarespace and weebly make website creation so simplified and easy?
How long do companies take to design websites and upkeep them?
What are some general good practices that companies and such use to make sure their website is attractive and attention grabbing?
What are more complex problems that arise when clients need more specific details/specific features on their website?
How expensive can websites get as a whole (including development and upkeep costs)?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would likely focus on practicing CSS and style designs on the website to see what one can and cannot do with the current 3 file format. I would also like to add new features such as playing a tone upon win or loss and animated pictures when the button is being held down rather than just a static image. I would also like to try things related to moving the buttons around every turn rather than keeping them static buttons, as well as more things related to dynamic movement within the website.


## License

    Copyright Daniel Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.