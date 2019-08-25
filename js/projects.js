(function() {
  const container = document.getElementById("projects-list");

  const renderItem = item =>
    (container.innerHTML += `
      <li class="mdc-grid-tile">
            <div class="mdc-card">
              <div class="mdc-card__primary-action">
                <div
                  class="my-card__media mdc-card__media--16-9 mdc-card__media mdc-card__media--square ${item.class}"
                  onclick="window.open('${item.url}', '_blank');"
                ></div>
              </div>
              <div class="mdc-card__actions">
                <span class="profile-card-title">${item.name}</span>
                <button
                  class="mdc-icon-button mdc-card__action mdc-card__action--icon"
                  aria-pressed="false"
                  aria-label="Add to favorites"
                  title="Add to favorites"
                >
                  <i
                    class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
                    >favorite</i
                  >
                  <i class="material-icons mdc-icon-button__icon"
                    >favorite_border</i
                  >
                </button>
                <button
                  class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                  title="Share"
                >
                  share
                </button>
                <button
                  class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                  title="More options"
                >
                  more_vert
                </button>
              </div>
            </div>
          </li>
    `);

  const projectData = [
    {
      name: "Billy Client",
      class: "billy-client",
      url: "https://github.com/Nickrosendo/billy-web"
    },
    {
      name: "Billy Admin",
      class: "billy-admin",
      url: "https://github.com/Nickrosendo/billy-admin"
    },
    {
      name: "Billy Server",
      class: "billy-server",
      url: "https://github.com/Nickrosendo/billy-server"
    },
    {
      name: "Randch Client",
      class: "randch-client",
      url: "https://github.com/Nickrosendo/randch-client"
    },
    {
      name: "Randch Server",
      class: "randch-server",
      url: "https://github.com/Nickrosendo/randch-server"
    },
    {
      name: "Space Invaders Js",
      class: "space-invaders-js",
      url: "https://github.com/Nickrosendo/space-invaders-js"
    },
    {
      name: "iFaltas",
      class: "ifaltas",
      url: "https://github.com/Nickrosendo/iFaltas"
    },
    {
      name: "Vuejs Game",
      class: "vue-game",
      url: "https://github.com/Nickrosendo/VueJS_Game_Project"
    },
    {
      name: "Solar System",
      class: "solar-system",
      url: "https://github.com/Nickrosendo/SolarSystem"
    },
    {
      name: "Friends Night",
      class: "friends-night",
      url: "https://github.com/Nickrosendo/friends-night"
    },
    {
      name: "API Friends Night",
      class: "api-friends-night",
      url: "https://github.com/Nickrosendo/api-friends-night"
    }
  ];

  // render project data
  projectData.forEach(renderItem);
})();
