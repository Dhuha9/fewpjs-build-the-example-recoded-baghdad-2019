// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

function handleHeartClick() {
  let errorDiv = document.getElementById("modal")
  let ul = document.getElementsByTagName("ul")
  for (let i = 0; i < ul.length; i++) {
    let span = ul[i].getElementsByTagName("li")[0].getElementsByTagName("span")[0]
    let li = ul[i].getElementsByTagName("li")[0]
    li.onclick = function () {
      if (span.innerHTML === EMPTY_HEART) {
        mimicServerCall().then(res => {
          span.innerHTML = FULL_HEART
          span.className = "activated-heart"
        }).catch(err => {
          errorDiv.classList.remove("hidden")
          let h2 = errorDiv.getElementsByTagName("h2")[0]
          h2.innerText = err
          setTimeout(() => {
            errorDiv.className = "hidden"
          }, 5000);
        })
      } else {
        span.classList.remove("activated-heart")
        span.innerHTML = EMPTY_HEART
      }
    }
  }
}
handleHeartClick()
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
