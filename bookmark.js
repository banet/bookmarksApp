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


