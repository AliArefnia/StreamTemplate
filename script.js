"use strict";

const btnChangeView = document.querySelector(".btnChangeView");
const btnChangeViewDecrease = document.querySelector(".btnChangeView-decrease");
const gridContainer = document.querySelector(".grid-container");
let volumeValues = {};
let muteStates = {};
let gridItems = [null];
let streamVideos;

let numberOfPresentPeopleInStream = 1;

function initializeVideoExpandButton() {
  const videos = document.querySelectorAll(".streamVideo");
  const videoExpandButtons = document.querySelectorAll(".vidExpand--button");

  videoExpandButtons.forEach((videoExpandButton, index) => {
    const video = videos[index];
    const videoPlayer = video.closest(".video-Player");

    videoExpandButton.addEventListener("click", () => {
      if (document.fullscreenElement) {
        // Exit full-screen mode
        videoExpandButton.innerHTML = `<i class="icon-xl fas fa-expand icons"></i>`;
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          // Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          // IE11
          document.msExitFullscreen();
        }
      } else {
        // Enter full-screen mode
        videoExpandButton.innerHTML =
          '<i class="bi bi-fullscreen-exit icons"></i>';
        if (videoPlayer.requestFullscreen) {
          videoPlayer.requestFullscreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
          // Safari
          videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) {
          // IE11
          videoPlayer.msRequestFullscreen();
        }
      }
    });
  });
}

function handleVideoButtonClick(videoButton) {
  let mute = videoButton.dataset.videoMute === "true";
  videoButton.innerHTML = mute
    ? `<i class="bi bi-camera-video-fill icons"></i>`
    : `<i class="bi bi-camera-video-off-fill icons"></i>`;
  videoButton.dataset.videoMute = !mute;
  console.log(videoButton.dataset.videoMute);
}

function initializeVideoButton() {
  const videoButtons = document.querySelectorAll(".vid--button");
  if (videoButtons) {
    videoButtons.forEach((videoButton) => {
      videoButton.dataset.videoMute = "false";
      videoButton.addEventListener("click", () =>
        handleVideoButtonClick(videoButton)
      );
    });
  }
}

function handleMicButtonClick(micButton) {
  let mute = micButton.dataset.mute === "true";

  micButton.innerHTML = mute
    ? ` <i class="icon-xl fas fa-microphone-alt icons"></i>`
    : ` <i class="icon-xl fas fa-microphone-alt-slash icons"></i>`;
  micButton.dataset.mute = !mute;
  console.log(micButton.dataset.mute);
}

function initializeMicButton() {
  const micButtons = document.querySelectorAll(".mic--button");
  if (micButtons) {
    micButtons.forEach((micButton) => {
      micButton.dataset.mute = "false";
      micButton.addEventListener("click", () =>
        handleMicButtonClick(micButton)
      );
    });
  }
}

function setGridItems(index) {
  for (let i = 1; i <= index; i++) {
    gridItems[i - 1] = document.querySelector(`.grid-item-${i}`);
    if (i > 4) {
      gridContainer.style.gridTemplateColumns = "auto auto auto";
    }
  }
}

btnChangeView.addEventListener("click", function () {
  numberOfPresentPeopleInStream++;

  if (numberOfPresentPeopleInStream < 2 || numberOfPresentPeopleInStream > 11) {
    return;
  }

  const gridItemHTML = `<div class="grid-item grid-item-${numberOfPresentPeopleInStream}">
                            <!--begin::Card-->
          <div class="streamVideosSection">
            
            <div class="video-Player">
        
               <video src="mov_bbb.mp4" autoplay class="streamVideo" id="video-${numberOfPresentPeopleInStream}" ></video>
               <div class="controls controls-${numberOfPresentPeopleInStream}">
                    <ul class="ul-button">
                      <li>
                        <button type="button" class="btn btn-primary icons-buttons vidExpand--button">
                          <i class="icon-xl fas fa-expand icons"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary icons-buttons mic--button"
                        >
                          <i class="icon-xl fas fa-microphone-alt icons"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="btn btn-warning icons-buttons icon--kick-button"
                        >
                          <i class="icon-xl fas fa-minus-circle icons"></i>
                        </button>
                      </li>
                      <li>
                        <button type="button" class="btn btn-success icons-buttons">
                          <i class="icon-xl fas fa-camera icons"></i>
                        </button>
                        <button type="button" class="btn btn-success icons-buttons vid--button">
                          <i class="bi bi-camera-video-fill icons"></i>
                        </button>
                        
                      </li>
                    </ul>
               </div>
                 
            </div>
               
            <!--end::Card-->
               </div></video>
               </div>`;

  gridContainer.innerHTML += gridItemHTML;
  setGridItems(numberOfPresentPeopleInStream);

  for (let j = 1; j <= numberOfPresentPeopleInStream; j++) {
    if (gridItems[j - 1]) {
      for (let n = 1; n <= 12; n++) {
        gridItems[j - 1].classList.remove(`grid-item-${j}-${n}`);
      }
      gridItems[j - 1].classList.add(
        `grid-item-${j}-${numberOfPresentPeopleInStream}`
      );
    }
  }
  streamVideos = document.querySelectorAll(".streamVideo");
  console.log(streamVideos);
  console.log(numberOfPresentPeopleInStream);

  initializeVideoButton();
  initializeMicButton();
  initializeVideoExpandButton();
});

let removedElement = 2;
btnChangeViewDecrease.addEventListener("click", function () {
  let deletedElement = document.querySelector(`.grid-item-${removedElement}`);
  deletedElement.remove();
  numberOfPresentPeopleInStream--;
  if (numberOfPresentPeopleInStream <= 4)
    gridContainer.style.gridTemplateColumns = "auto auto";

  for (let j = 1; j <= numberOfPresentPeopleInStream + 1; j++) {
    if (gridItems[j - 1]) {
      for (let n = 1; n <= 12; n++) {
        gridItems[j - 1].classList.remove(`grid-item-${j}-${n}`);
      }

      if (j > removedElement) {
        gridItems[j - 1].classList.add(`grid-item-${[j - 1]}`);

        gridItems[j - 1].classList.add(
          `grid-item-${j - 1}-${numberOfPresentPeopleInStream}`
        );
        gridItems[j - 1].classList.remove(`grid-item-${[j]}`);
      } else
        gridItems[j - 1].classList.add(
          `grid-item-${j}-${numberOfPresentPeopleInStream}`
        );
    }
  }
  console.log(numberOfPresentPeopleInStream);
});

document.addEventListener("fullscreenchange", () => {
  /////show and hide controls in fullscreen mode
  const activeVideo = document.fullscreenElement;
  console.log(activeVideo);

  if (activeVideo && activeVideo.classList.contains("streamVideo")) {
    const controls = activeVideo.nextElementSibling; // Get the corresponding controls

    console.log(controls);
    controls.style.display = "flex"; // Show controls
  } else {
    // Hide controls when exiting full-screen

    streamVideos.forEach((streamVideo) => {
      console.log(streamVideo);
      const controls = streamVideo.nextElementSibling; // Get the corresponding controls
      controls.style.display = "flex"; // Hide controls
      console.log(controls);
    });
  }

  /////show control buttons in fullscreen mode

  const buttons = document.querySelectorAll("ul *");
  if (document.fullscreenElement) {
    buttons.forEach((btn) => (btn.style.display = "inline-block"));
  } else {
    buttons.forEach((btn) => (btn.style.display = "")); // Reset to default
  }
});
