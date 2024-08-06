// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('.hidden');
mimicServerCall()
  .then(function()  {
    const emptyHeart = document.querySelector(modal);
    emptyHeart.classList.remove('activate-heart');
    emptyHeart.classList.remove('like-glyph');
    emptyHeart.classList.add('activate-heart');
    emptyHeart.innerText = FULL_HEART;
    emptyHeart.classList.add('activate-heart');
})
  .catch((error) => {
    const errorModal = document.querySelector('error-modal');
    const errorMessage = document.querySelector('error-message');

    errorMessage.textContent = error.message;
    errorModal.classList.remove('hidden');

    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
    
  })

  const emptyHeart = document.querySelector(modal);
  emptyHeart.addEventListener('click', function() {
    if (emptyHeart.innerText === FULL_HEART) {
      emptyHeart.innerText = EMPTY_HEART;
      emptyHeart.classList.remove('activate-heart');
    }
  })
  




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
