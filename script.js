function submitForm() {
  const RawName = document.getElementById("name");
  const RawMessage = document.getElementById("message");
  if (!RawName.value.trim() && !RawMessage.value.trim()) {
    alert("Please fill Name and Message");
    return false;
  }
  if (!RawName.value.trim()) {
    alert("Please fill Name");
    return false;
  }
  if (!RawMessage.value.trim()) {
    alert("Please fill Message");
    return false;
  }

  // open("mailto:mhnd9919@gmail")
  alert("Thanks for the feedback");
  return false;
}

function displayTimeOnload() {
  let p = document.createElement("p");
  let date = new Date().toLocaleString();
  let text = document.createTextNode(`Page loaded on: ${date}`);
  p.style.fontFamily = "system-ui, sans-serif";
  p.style.color = "#425c83";
  p.style.fontSize = "1.5rem";
  p.style.fontWeight = "Bold";

  p.appendChild(text);
  let main = document.getElementById("main");
  main.appendChild(p);
}

function toggleDescription(id) {
  const description = document.getElementById(id);

  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}

let intervalId;

function highlightQuote() {
  const quote = document.getElementById("quoteBox");

  clearInterval(intervalId);

  intervalId = setInterval(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    quote.style.color = `rgb(${r}, ${g}, ${b})`;
  }, 100);
}

function resetQuote() {
  const quote = document.getElementById("quoteBox");

  clearInterval(intervalId);
  quote.style.color = "";
}
