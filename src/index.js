import { LitElement, html, css } from "lit";

const peaceMessages = [
  {
    language: "English",
    message: "Peace",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Spanish",
    message: "Paz",
    direction: "ltor",
    displayMessage: true,
  },
];

class PeacePanel extends LitElement {
  // These are Class properties that are dynamic for Lit (i.e. it listens to changes in them and updates the
  // DOM automatically if they change). The static keyword only refers to the fact that they're defined
  // in the class as a whole and not in individual object instances of the class.
  // static properties = {
  //     // Will hold the peace language (key) and peace message (value)
  //     messageLanguage:{}
  // };

  static styles = css`
    .message {
      color: green;
    }
    .language {
      color: rebeccapurple;
    }
    p {
      color: black;
      height: 100px;
      width: 300px;
    }
  `;
  constructor(inputObject) {
    super();
    console.log("in constructor");
    console.log(inputObject);
    // Assign the input object passed to the class definition when creating a new Object so it's
    // accessible for correct message/language rendering.
    this.messageDetails = inputObject;
    console.log(this);
  }

  render() {
    console.log("in render");
    console.log(this);
    html`<p>Testing</p>`;
    // html`
    //   <p
    //     class=${this.messageDetails.displayMessage ? "message" : "language"}
    //     @click=${() => this.toggleMessage()}
    //   >
    //     ${this.messageDetails.displayMessage
    //       ? this.messageDetails.message
    //       : this.messageDetails.language}
    //   </p>
    // `;
  }

  // Toggle whether the displayMessage property is set to true/false.
  toggleMessage() {
    console.log("in toggle");
    //console.log(this.messageDetails);
    //this.messageDetails.displayMessage != this.messageDetails.displayMessage;
    //this.requestUpdate();
  }
}

customElements.define("peace-panel", PeacePanel);

peaceMessages.forEach((message) => {
  console.log(message);
  const peacePanel = new PeacePanel(message);
  document.querySelector(".banner-holder").appendChild(peacePanel);
});
