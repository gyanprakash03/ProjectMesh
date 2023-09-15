
// **************** for changing image *****************
var currentImageNo = 4;
var currentZIndex = -1;

var changeZIndexForwardBtn = document.getElementById('changeZforward');
var changeZIndexBackwardBtn = document.getElementById('changeZbackward');

changeZIndexForwardBtn.addEventListener('click', () => {
    if (currentImageNo > 1) {
        var currentImage = document.getElementById(`rohit${currentImageNo}`);
        currentImage.style.zIndex = currentZIndex;
        currentZIndex--;
        currentImageNo--;
    } 
    else {
        console.log('No more images forward.');
    }
});

changeZIndexBackwardBtn.addEventListener('click', () => {
    if (currentImageNo < 4) {
        var nextImageNo = currentImageNo + 1;
        var nextImage = document.getElementById(`rohit${nextImageNo}`);
        nextImage.style.zIndex = 0;
        currentImageNo++;
    } 
    else {
        console.log('No more images backward.');
    }
});

// ********************* for log out **********************
var logOutButton = document.getElementById('log-out-btn');
var logOutScreen = document.getElementById('log-out-screen');
var logOutNoButton = document.getElementById('log-out-no-btn');

logOutButton.addEventListener('click', () => {

    logOutScreen.style.display = 'flex';
})

logOutNoButton.addEventListener('click', () => {

    logOutScreen.style.display = 'none';
})

// ****************** for textarea input *******************
const textarea = document.getElementById("project-desc");
const charCount = document.getElementById("char-count");
const maxLength = 800;

textarea.addEventListener("input", function () {

    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength} / ${maxLength}`;

    if (currentLength > maxLength) {
        textarea.value = textarea.value.substring(0, maxLength);
    }
});

// ***************** for file input ********************
const fileInput = document.getElementById("project-file-ipt");
const maxFiles = 8;

fileInput.addEventListener("change", function () {

    if (fileInput.files.length > maxFiles) {
        alert(`You can upload a maximum of ${maxFiles} files.`);
        fileInput.value = "";
    }
});

// ****************** for tags input *********************
const tagsContainer = document.getElementById("tags-container");
const tagInput = document.getElementById("tag-input");

tagInput.addEventListener("keydown", function (event) {
    
    if (event.key === "Enter" && tagInput.value.trim() !== "") {
        event.preventDefault();
        tagsContainer.style.display = 'flex';
        
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = tagInput.value.trim();

        const tagClose = document.createElement("span");
        tagClose.className = "tag-close";
        tagClose.innerHTML = "X";

        tagClose.addEventListener("click", function () {
            tagsContainer.removeChild(tag);
        });

        tag.appendChild(tagClose);
        tagsContainer.appendChild(tag);
        tagInput.value = "";
    }
});

// ************** for reset button ******************
const resetTagsButton = document.getElementById("reset-tags");

resetTagsButton.addEventListener("click", function () {

    tagsContainer.innerHTML = "";
    tagsContainer.style.display = 'none';
});

// ************** for project submission screen **************
const newProjectButton = document.getElementById('new-project-btn');
const projectSubScreen = document.getElementById('project-submission-screen');
const projectScreenCloseButton = document.getElementById('new-project-close-btn');

newProjectButton.addEventListener('click', () => {

    projectSubScreen.style.display = 'flex';
})

projectScreenCloseButton.addEventListener('click', () => {

    projectSubScreen.style.display = 'none';
})