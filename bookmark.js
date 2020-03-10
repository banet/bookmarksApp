const body = document.body;
// We are selecting input cause we want to click in input field at self first
const input = document.querySelector('input[type=text]');

// We all need to clic event on overlay

const overlay = document.querySelector('.overlay');


function showFloater() {
    
    body.classList.add('show-floater');
    
}

function closeFloater() {
    // Let' say that eventlisten should fire only if opacity exist
    if(body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}

// Event listeners
// We use focus here instead for click cause 'focus' is more presisioned than click
input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater); 




//* ==============Bookmarks functinality =================*/

// 1. The best way to generate bookmars list is to Add Form tag and then Submit form !!! 
// Grab bookmarks list

const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');

// Access to function
function createBookmark(e) {
    e.preventDefault();
    const title = bookmarkInput.value;
    const bookmark = document.createElement('a');
    bookmark.className = 'bookmark';
    bookmark.innerText = title;
    bookmark.href = "#";
    bookmark.target = '_blank';
    console.log(bookmark); 


    bookmarksList.appendChild(bookmark);

    // Reset bookmark
    bookmarkForm.reset();
    // console.log('procede');
}
// Add eventlistener 'submit' = When you click the form you are submit -confirm new bookmark-post! 
bookmarkForm.addEventListener('submit', createBookmark);

// How we know that this form is submited? First lets add form tag over the floater.


