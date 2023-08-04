const LOCAL_STORAGE_DATA = [
  {
    title: "Astoria",
    imgSrc: "astoria-river",
    imgAlt: "View of River in Astoria, OR",
    description:
      "Astoria is a port city and the seat of Clatsop County, Oregon, United States. Founded in 1811, Astoria is the oldest city in the state of Oregon and was the first American settlement west of the Rocky Mountains.",
    readMoreUrl: "https://en.wikipedia.org/wiki/Astoria,_Oregon",
  },

  {
    title: "Australia",
    imgSrc: "australia",
    imgAlt: "A majestic view of the Australian coast",
    description:
      "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities, Sydney, Brisbane, Melbourne, Perth, Adelaide, are coastal.",
    readMoreUrl: "https://en.wikipedia.org/wiki/Australia",
  },

  {
    title: "Beach",
    imgSrc: "beach",
    imgAlt: "A beautiful beach with mountains in the background",
    description:
      "A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles.",
    readMoreUrl: "https://en.wikipedia.org/wiki/Beach",
  },

  {
    title: "Bridge",
    imgSrc: "bridge",
    imgAlt: "A bridge in the middle of a forest",
    description:
      "A bridge is a structure built to span a physical obstacle, such as a body of water, valley, or road, without closing the way underneath.",
    readMoreUrl: "https://en.wikipedia.org/wiki/Bridge",
  },

  {
    title: "Crater Lake",
    imgSrc: "crater-lake",
    imgAlt: "A view of Crater Lake in Oregon",
    description:
      "Crater Lake is a crater lake in south-central Oregon in the western United States. It is the main feature of Crater Lake National Park and is famous for its deep blue color and water clarity.",
    readMoreUrl: "https://en.wikipedia.org/wiki/Crater_Lake",
  },
];

function init() {
  storeLocalStorage();

  const loadLocalButton = document.getElementById("load-local");
  loadLocalButton.addEventListener("click", loadLocalStorage);

  const loadRemoteButton = document.getElementById("load-remote");
  loadRemoteButton.addEventListener("click", loadRemoteData);
}

function storeLocalStorage() {
  const data = JSON.stringify(LOCAL_STORAGE_DATA);
  localStorage.setItem("data", data);
}

function loadLocalStorage() {
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);

  let projectGallerySection = document.getElementById("project-gallery");
  projectGallerySection.innerHTML = "";

  parsedData.forEach((projectCard) => {
    const projectCardElement = createProjectCardElement(projectCard);
    projectGallerySection.appendChild(projectCardElement);
  });
}

function loadRemoteData() {
  let projectGallerySection = document.getElementById("project-gallery");
  projectGallerySection.innerHTML = "";

  const url = "https://my-json-server.typicode.com/davidjeong0628/d24/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((projectCard) => {
        const projectCardElement = createProjectCardElement(projectCard);
        projectGallerySection.appendChild(projectCardElement);
      });
    });
}

function createProjectCardElement(projectCardObject) {
  const projectCardElement = document.createElement("project-card");
  projectCardElement.setAttribute("title", projectCardObject.title);
  projectCardElement.setAttribute(
    "img-src",
    `./images/${projectCardObject.imgSrc}.jpeg`
  );
  projectCardElement.setAttribute("img-alt", projectCardObject.imgAlt);
  projectCardElement.setAttribute("description", projectCardObject.description);
  projectCardElement.setAttribute(
    "read-more-url",
    projectCardObject.readMoreUrl
  );

  return projectCardElement;
}

window.addEventListener("DOMContentLoaded", init);
