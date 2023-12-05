# Course-Registration
live link : https://courseregistration001.netlify.app/


## 3 features i use in this project

- <h3>State Management</h3>
    State management is one of the most important and major part of an project of React.Js. I manage my all the state by using "useState()" hook. useState() hook is a builtin function that give us the chance to update spacefic update and on this update we can render someting on your html page. In this project I used many useState() hook and manage my states properly. My project json data first I map and then clicked data stored in a hook name "clickedData". For update the values of clickedData i use "setClickedData()" that is a callback function of this useState() hook. actually useState() hook return two things. one is value and another is a callback function. By using this callback function we can update our value that is use in my another state name "totalHour ,totalPrices, remainingHours" states! 
- <h3>Prop and Prop Drilling</h3>
    Props is a major part React.Js. Without this thing we can't think React because of Prop is basic and chaining type state sharing medium of React. But we should know that React have unidirectional or one directninal data flow power. So that it can flow the data in parent to child direction automatically that I use in so many components, for example In the "Body" components and the "RightContainer" components I use it, Here Body is parent and other is child and I pass the reqired value from parent to child. 
    <br>
    <br>

    But the most interesting thing is I can also pass the state from child to parent by using callback funciton! I use it from "LeftContainer" to "Body" component! Here I callect the clicked data i use it. My funciton is state in "Body" components which is my parent component and I through the data from "LeftContainer" which is my child component! So here I pass the funciton by "onClick" event from child to parent that is a unidrectional reverse data passing system!
- <h3>Conditional Rendering</h3>
    Conditional Rendering is my personal favorite thnig in React.Js. Because we can render any thing based on any condion! If there are 3 major features in React.js then Conditonal Rendering is one of it! React allows conditionally render components or elements based on the application's state. This enables dynamic UIs that adapt to changing data and user interactions. I use conditional Rendering for showing alert. I stored setTimeout Function and then update the state and then based on the state I used "Short Circuit" condition for showing alert!




<br>
<br>
<br>
<br>

- <h3>Using "useState()" hook</h3>

    First I create JSON data as a arrray and then I export it from my Data.js file and then I import it into my Body.jsx file and then hold it in a useState() hook and then I map it and send it to RightContainer.jsx file, then distructure it and then I used it for required place!

    We already know that useState() hook is one of the most hook in ReactJs. Also we know that useState() hook is a hook who can set value multiple time and when we want. I used it for my state management. I use useState() for storing my data from another file and then mapping and provide it, then when I stored spacefic clicked data then I used useState() hook and this is not at all. when fetch data from an API then we should store those all the data in a useState() hook. After storing then we can use it for a condition and then use it for conditional rendering. As a begginer level student of React, I feel that useState() is one of the most powerful and important hook in ReactJs!

    
