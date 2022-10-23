import "./club-item.js";
class ClubList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
    }
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = "";
        this._clubs.forEach((club) => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this._shadowRoot.appendChild(clubItemElement);
        });
    }
    renderError(message) {
        this._shadowRoot.innerHTML = `
        <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
      `;
        this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define("club-list", ClubList);
