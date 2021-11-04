//This exercies will show you how to use setItem, getItem, and removeItem, with other aspects of JS.
//STEP 1: Open the index in your web browser
//STEP 2: Add text in the first input and click submit
//STEP 3: Open your web dev tools and go to application
//Step 4: Under Storage, click the arrow for Local Storage
//Step 5: You should see the text you entered in your Local Storage
//STEP 6: Refresh page while keeping local storage open. The text you previously entered should remain in Local Storage.
//STEP 7: Enter new text. Click submit. Local Storage should change.
//STEP 8: Click the 'Clear' button. Text should clear from output and Local Storage
//STEP 9: Follow the instructions below to do the same for output2 and output3


//define output1 as a global variable
let output1 = document.querySelector('#output1')
//define output2 as a global variable

//define output3 as a global variable

//code for first input
//input should display in output1 <p> once submit is clicked
//output 1 and local storage should clear when 

document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#btn1').addEventListener('click', function () {
            let input1 = document.querySelector('#input1').value;
            console.log(input1);
            document.querySelector('#firstDiv').style.display = 'none';
            localStorage.setItem('activity', input1);
            let output1Text = localStorage.getItem('activity');

            output1.innerHTML = output1Text;
        });    

    });

//do the same for the second input
document.addEventListener('DOMContentLoaded', function () {
            
    });

//do the same for the third input
document.addEventListener('DOMContentLoaded', function () {

 });
 


//function for the 'Clear' button
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#clearBtn').addEventListener('click', function () {         
        localStorage.removeItem('activity');
        document.querySelector('#firstDiv').style.display = 'block';
        output1.innerHTML = "";

        //remove item from 2nd local storage key

        //remove item from 3rd local storage key

    })
});
