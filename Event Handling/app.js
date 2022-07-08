console.log('Ready to go!');

// NOTE: Use Arrow function syntax when adding event listeners!

// PRO TIP: A string is nothing more than an array of characters
const main = () => {

  // Exercise 1:
  // Create a page with a blank label and a text area. 

  // making a div
  let firstDiv = document.createElement('div');
  // setting the id of div
  firstDiv.setAttribute('id', 'container');

  // setting div to html
  document.body.append(firstDiv);

  // making a label and textarae
  let label = document.createElement('label');
  let textarea = document.createElement('textarea');

  // setting both label and textarea to the div in the html
  firstDiv.append(label);
  firstDiv.append(textarea);

  // setting the attribute for and textarea for label
  label.setAttribute('for', 'textArea');

  // setting the id for the textare
  textarea.setAttribute('id', 'textArea');
  // setting a name
  textarea.setAttribute('name', 'textArea');
  // giving it placeholder text
  textarea.setAttribute('placeholder', 'Type for Code Crew info!')

  // When someone types into the text area, change the label to show what the person has typed.
  textarea.addEventListener('keydown', () => {
    // writes what ever is wrote in the textarea for the label
    label.textContent = textarea.value;
  });

  //   Exercise 2:
  // Using the exercise above, replace the user's typing with the string below. 
  // Each time they press a key, a letter from the string below should display in the label instead. 
  // There's no need to have the text start over from the beginning.

  // setting the property to the  to the Code School string
  let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED.Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";

  // let codeCrewString = "Code School is a hands-on class
  //  designed to train individuals to be entry-level software developers within a six-month course.
  //   The minimum education requirement is at least a high school diploma or GED.
  //    Students work in a small classroom setting and use real-word technologies 
  //    to learn the fundamentals of coding, app development, the leadership,
  //     and the life skills needed for a successful career and job market competitiveness.

  // splitting the string into one letter some when typed it doesn't paste the whole thing
  let codeTextArray = codeCrewString.split('');

  let newTextArr = [];
  textarea.addEventListener('keydown', (e) => {

    e.preventDefault();

    newTextArr.push(codeTextArray.shift());

    newTextArr.join('');

    textarea.textContent = newTextArr;

    label.textContent = textarea.value
  });
  // Exercise 3:
  // Enhance your solution by creating a reset button that will erase everything from the label
  //  so the user can start over.

  // making a reset button
  let reset = document.createElement('button');

  // appending the reset button to div in html
  firstDiv.append(reset);

  // setting the id, type, and text to reset
  reset.setAttribute('id', 'reset');
  reset.setAttribute('type', 'reset');
  reset.textContent = 'Reset';

  // clear the textarea and label
  cleanReset = () => {
    label.textContent = '';
    textarea.textContent = '';


  }

  // when button is clicked resets the textarea and label
  reset.addEventListener('click', () => {

    cleanReset();
  })


  // Exercise 4: Repeating timer
  // Create a button with the text Start Countdown!.
  //  When the User clicks the button, display a countdown sequence in the browser 
  //  as an <h2> from 10 to LIFTOFF!!. 
  //  Display each number during the countdown each second (1000 ms),
  //   leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.

  
  // making a new div 
  let countDiv = document.createElement('div')

  // setting new div to countdown
  countDiv.setAttribute('id', 'countdown')

  // setting countDiv to html doc
  document.body.append(countDiv);

  // making a button
  let countdown = document.createElement('button');

  // appending it to div in the html doc
  countDiv.append(countdown);

  // giving countdown a id and button text
  countdown.setAttribute('id','countdown');
  countdown.textContent = 'Start CountDown'

  let timer = () => {
    // let timer start from 10
    let timeleft = 10;
    var downloadTimer = setInterval(() => {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        // once timer hits 0 display this
        document.getElementById("countdown").innerHTML = "LIFT OFF";
      } else {
        // display this while countdown goes
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      }
      // minus 1 from time
      timeleft -= 1;
    }, 1000);//refresh time every 1 sec
  }
  // when the button is clicked start countdown
  countdown.addEventListener('click', () => {
    timer();

  })
  //   Challenge 1
  // Create additional strings and load them in an array
  // then randomly select one of the three each time the page is reloaded.




};

main();
