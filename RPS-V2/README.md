RPS V2
March 30/2021

CONSIDER:
----------
Store score as global variable
It may be better to create a separate function for each button
- EX. if rock clicked, test rock vs CPU choice
    - Increase global score of winner

HTML
----------
- Basic HTML framework built
- Basic Header built

TO-DO:
----------
- Game scores
- Player portrait
- CPU portait
- "VS" logo
- Create user score
- Create CPU score
- Add Centered "Round x" counter

JS
----------
- Code functions as expected
    - Shows correct winner in console
    - Shows ties in console
    - Shows losses in console
- Event Listeners created on all buttons
    - On click:
        - Player's choice is saved
        - CPU choice generated
        - Choices compared
        - Winner determined
        - Console output

TO-DO:
----------
- Keep score once game has started
- Update scores dynamically
- End game after Player or CPU score === 5
- Display loser portrait in black/white
- Show choice as image in portrait

CSS
----------
- Header created
- Rock, Paper, Scissors buttons relocated

TO-DO:
----------
- Create and align user portrait
- Create and align CPU portrait
- Align R/P/S buttons with user portrait
- Highlight R/P/S when selected by user