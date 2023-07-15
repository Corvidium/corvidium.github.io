/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/* Image swap*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OracleStrafe.png") {
    myImage.setAttribute("src", "images/BPO.jpg");
  } else {
    myImage.setAttribute("src", "images/OracleStrafe.png");
  }
};

/* button */
let myButton = document.getElementById("userreset")
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please fill the database:");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }

myButton.onclick = () => {
    setUserName();
  };