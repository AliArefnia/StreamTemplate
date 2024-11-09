"use strict";

const videoStreams = [
  "mov_bbb.mp4",
  "mov_bbb_1.mp4",
  "mov_bbb_2.mp4",
  "mov_bbb_3.mp4",
];
const btnChangeView = document.querySelector(".btnChangeView");
const videoSection = document.querySelector("#hearing-5");
let videoStreamsArray = [];
console.log("start");
videoSection.innerHTML = " ";

btnChangeView.addEventListener("click", function (e) {
  //e.preventDefault()
  /*
  switch (i) {
    case 1:
      gridContainer.innerHTML += `<div class="grid-item grid-item_1">1</div>`;

      break;
    case 2:
      gridContainer.innerHTML += `<div class="grid-item grid-item_2">2</div>`;
      break;
    case 3:
      gridContainer.innerHTML += `<div class="grid-item grid-item_3">3</div>`;
      break;
    case 4:
      gridContainer.innerHTML += `<div class="grid-item grid-item_4">4</div>`;
      break;
    case 5:
      gridContainer.innerHTML += `<div class="grid-item grid-item_5">5</div>`;
      break;
    case 6:
      gridContainer.innerHTML += `<div class="grid-item grid-item_6">6</div>`;
      break;
    case 7:
      gridContainer.innerHTML += `<div class="grid-item grid-item_7">7</div>`;
      break;
    case 8:
      gridContainer.innerHTML += `<div class="grid-item grid-item_8">8</div>`;
      break;
    case 9:
      gridContainer.innerHTML += `<div class="grid-item grid-item_9">9</div>`;
      break;
    case 10:
      gridContainer.innerHTML += `<div class="grid-item grid-item_10">10</div>`;
      break;
    case 11:
      gridContainer.innerHTML += `<div class="grid-item grid-item_11">11</div>`;
      break;
    case 12:
      gridContainer.innerHTML += `<div class="grid-item grid-item_12">12</div>`;
      break;
  }
*/

  switch (videoStreamsArray.length / 2) {
    case 1:
      videoSection.innerHTML = `
      <!--begin::داشبورد-->
      <!--begin::Row-->
      <div
        class="row justify-content-center align-items-center text-center"
        style="height: 100%"
      >
        <div class="col-6 streamVideosEachSection-2">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>

            <video id="localVideo" srcObject="${videoStreamsArray[0]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div
          style="
            background-color: rgb(170, 170, 170);
            height: 20%;
            padding-top: 1%;
          "
          class="col-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis beatae iusto cumque maiores error amet possimus tempora
          rerum qui excepturi, nihil obcaecati temporibus deserunt, inventore
          eius illo assumenda et? Id maiores explicabo, ea, nisi quas autem
          voluptatem porro fugit itaque nihil provident distinctio dignissimos
          aut nemo adipisci omnis tenetur.
        </div>
      </div>

      <!--end::Row-->
      <!--end::داشبورد-->
    `;
      break;
    case 2:
      videoSection.innerHTML = ` 
      <!--begin::داشبورد-->
      <!--begin::Row-->
      <div
        class="row justify-content-center align-items-center text-center"
        style="height: 100%"
      >
        <div class="col-6 streamVideosEachSection-3">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video id="localVideo" srcObject="${videoStreamsArray[0]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-3">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>

            <video srcObject="${videoStreamsArray[2]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div
          style="
            background-color: rgb(170, 170, 170);
            height: 20%;
            padding-top: 1%;
          "
          class="col-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis beatae iusto cumque maiores error amet possimus tempora
          rerum qui excepturi, nihil obcaecati temporibus deserunt, inventore
          eius illo assumenda et? Id maiores explicabo, ea, nisi quas autem
          voluptatem porro fugit itaque nihil provident distinctio dignissimos
          aut nemo adipisci omnis tenetur.
        </div>
      </div>

      <!--end::Row-->
      <!--end::داشبورد-->
    `;

      break;
    case 3:
      videoSection.innerHTML = `
      <!--begin::داشبورد-->
      <!--begin::Row-->
      <div
        class="row justify-content-center align-items-center text-center"
        style="height: 100%"
      >
        <div class="col-6 streamVideosEachSection-4">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video id="localVideo" srcObject="${videoStreamsArray[0]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-4">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>

            <video srcObject=""${videoStreamsArray[2]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-4">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video srcObject="${videoStreamsArray[4]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>

        <div
          style="background-color: rgb(170, 170, 170); padding: 1%"
          class="col-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis beatae iusto cumque maiores error amet possimus tempora
          rerum qui excepturi, nihil obcaecati temporibus deserunt, inventore
          eius illo assumenda et? Id maiores explicabo, ea, nisi quas autem
          voluptatem porro fugit itaque nihil provident distinctio dignissimos
          aut nemo adipisci omnis tenetur.
        </div>
      </div>

      <!--end::Row-->
      <!--end::داشبورد-->
    
    `;

      break;
    case 4:
      videoSection.innerHTML = `
      <!--begin::داشبورد-->
      <!--begin::Row-->
      <div
        class="row justify-content-center align-items-center text-center"
        style="height: 100%"
      >
        <div class="col-6 streamVideosEachSection-5">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video id="localVideo" srcObject="${videoStreamsArray[0]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-5">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>

            <video srcObject="${videoStreamsArray[2]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-5">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video srcObject="${videoStreamsArray[4]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>
        <div class="col-6 streamVideosEachSection-5">
          <!--begin::Card-->
          <div class="streamVideosSection">
            <ul class="ul-button">
              <li>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-expand"></i>
                </button>

                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt-slash"></i>
                </button>
                <button type="button" class="btn btn-primary icons">
                  <i class="icon-xl fas fa-microphone-alt vid5"></i>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="btn btn-warning icons"
                  style="margin: 0 10px"
                >
                  <i class="icon-xl fas fa-minus-circle"></i>
                </button>
              </li>
              <li>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-camera"></i>
                </button>
                <button type="button" class="btn btn-success icons">
                  <i class="icon-xl fas fa-video"></i>
                </button>
              </li>
            </ul>
            <video srcObject="${videoStreamsArray[6]}" autoplay class="streamVideos"></video>

            <!--end::Card-->
          </div>
        </div>

        <div
          style="
            background-color: rgb(170, 170, 170);
            height: 20%;
            padding-top: 1%;
          "
          class="col-12"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          veritatis beatae iusto cumque maiores error amet possimus tempora
          rerum qui excepturi, nihil obcaecati temporibus deserunt, inventore
          eius illo assumenda et? Id maiores explicabo, ea, nisi quas autem
          voluptatem porro fugit itaque nihil provident distinctio dignissimos
          aut nemo adipisci omnis tenetur.
        </div>
      </div>

      <!--end::Row-->
      <!--end::داشبورد-->
    `;

      break;
  }
  console.log(i);
  if (i === 12) i = 0;
});
