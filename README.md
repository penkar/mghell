# MGHell - MetalGear Hell!!!

React-Redux application made to display the game script from **_Metal Gear Solid_** (Thanks to [IGN](http://www.ign.com/faqs/2004/metal-gear-solid-game-script-506035) and [ElGreco](Elgreco@gmail.com))

In the future if I get the time I will be adding the latter Metal Gear games as well. React-Router will be included at that point to allow navigation between the scripts. 

There is minimal support for filtering term, phrases, and showing dialog only by certain character.

## **The script is just something to render** 

The point of this project is the rendering itself. If you inspect elements within application you will never see more than a hundredish Dialog components rendered at any one time. The application will keep track of your offset from the top of the screen, and based on that render dialog at different indexs to accomadate your reading. 

Note: This isn't perfect. A much better approach would have been a slightly more circular. Adding properties to each dialog node of height, measuring that height in the componentDidMount event, then passing that into the dialog height property through redux and calculating how many more elements needed to be rendered based off that. However, I personally do not feel this is the correct way, but it is entirely possible.

A ruby parser was built to change the Script into a JSON file. That parser can be found in `src/js/script` along with the JSON file, and a text file of the original script. I'll leave them there for reference. 
