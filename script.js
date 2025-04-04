const taskinput = document.getElementById("task-input");
const tasklist = document.getElementById("Tasklist");
const moodselector = document.getElementById("mood");
const quoteDisplay = document.getElementById("quote");


const moodData = {
    happy: {
    color: "#FFD700",
    quote: "Keep smiling, it looks good on you! 😊"
  },
  calm: {
    color: "#98FB98",
    quote: "Breathe in peace, exhale stress 🌿"
  },
  productive: {
    color: "#87CEEB",
    quote: "Let's get things done! 🚀"
  },
  sad: {
    color: "#D3D3D3",
    quote: "It's okay to have a bad day. Tomorrow will be better 😢"
  }
};

function changeMood(){
    const mood = moodselector.value;
    document.body.style.backgroundColor = moodData[mood].color;
    quoteDisplay.textContent = moodData[mood].quote;
};

function addTask() {
    
    const taskText = taskinput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    
    console.log(taskItem);
    taskItem.innerHTML = `
      ${taskText}
      <button onclick="deleteTask(this)">X</button>
    `;
  
    tasklist.appendChild(taskItem);
    taskinput.value = "";
  }
  function deleteTask(button) {
    const taskItem = button.parentElement;
    tasklist.removeChild(taskItem);
  }
  

