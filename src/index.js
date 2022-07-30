import { LitElement, html, css } from "lit";

// Need to add shuffler of order of objects within the array.
const peaceMessages = [
  {
    language: "English",
    message: "May peace prevail on earth",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Spanish",
    message: "Que la paz prevalezca en la tierra",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Japanese",
    message: "世界人類が平和でありますように",
    direction: "ttob",
    displayMessage: true,
  },
  {
    language: "Arabic",
    message: "السلام للعالم أجمع",
    direction: "rtol",
    displayMessage: true,
  },
  {
    language: "Danish",
    message: "Må fred herske på jorden",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Chinese",
    message: "我們祈禱世界人類的和平",
    direction: "ttob",
    displayMessage: true,
  },
  {
    language: "Korean",
    message: "세계인류의 평화가 이룩되도록",
    direction: "ttob",
    displayMessage: true,
  },
  {
    language: "Persian",
    message: " برقرار باد صلح در سراسر جهان",
    direction: "rtol",
    displayMessage: true,
  },
  {
    language: "Hebrew",
    message: " ישרה שלום עלי אדמות",
    direction: "rtol",
    displayMessage: true,
  },
  {
    language: "Ukrainian",
    message: "Хай буде мир людству у всьому світі",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Russian",
    message: "Да будет мир человечеству во всём мире",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Tamil",
    message: "உலகில் அமைதி நிலவட்டும்",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Serbo-Croatian",
    message: "Neka mirzavlada na zemliji",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Romansch",
    message: "Possia la pasch reger en il mund",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Hawaiian",
    message: "E Ho'omaluhia Me Ka Honua",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Icelandic",
    message: "Megi friður ríkja á jörð",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Kikuyu",
    message: "Thayú v́iyv́re thiine wa thi yothe",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Yoruba",
    message: "Alàáfíà fún gbogbo àgbáyé",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Vietnamese",
    message: "Nguyện xin hòa bình đến với toàn thể nhân loại trên thế giới",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Hopi",
    message: "Tuwa kwatsi es looma eyesni",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Afrikaans",
    message: "Mag Vrede Seëvier Op Aarde",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Algonquin",
    message: "Quenohteau Ohke woh aquené omskauau",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Cherokee",
    message: "ᎡᎶᎯᏃ ᏙᎯᏱ ᎨᏎᏍᏗ",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Urdu",
    message: "دنیا میں امن قائم رہے",
    direction: "rtol",
    displayMessage: true,
  },
  {
    language: "Filipino",
    message: "Sana'y Manatili ang Kapayapáan sa Mundo",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "French",
    message: "Puisse la paix régner dans le monde",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Hmong",
    message: "Kom kev thaj yeeb mauj rau ntiaj teb no",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Maori",
    message: "He maungārongo ki runga i te whenua",
    direction: "ltor",
    displayMessage: true,
  },
  {
    language: "Quechua",
    message: "Kusi kausay kachun kay pachapi",
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
  static properties = {
    // This reads in object attached by JS to the HTML element, which contains the
    // information for the current peace panel.
    messageDetails: { type: Object },
    tester: { type: String },
  };
  static styles = css`
    .message {
      color: green;
    }
    .language {
      color: rebeccapurple;
    }
    p {
      background-color: hotpink;
      text-align: center;
    }
  `;
  //   constructor() {
  //     super();
  //     console.log("in constructor");
  //     console.log(this.messageDetails);
  //     // Assign the input object passed to the class definition when creating a new Object so it's
  //     // accessible for correct message/language rendering.
  //     //this.messageDetails = inputObject;
  //     console.log(this);
  //   }

  render() {
    console.log("in render");
    console.log(this.messageDetails.language);
    console.log(this.tester);
    // Make each peace-panel element have 2 classes: 1 for what is being shown, and the other for the text direction
    // which is needed to style them for correct text direction using the main CSS file. Easiest to define as
    // a variable before using in the template string construction.
    let classList = `${
      this.messageDetails.displayMessage ? "message" : "language"
    }`;
    classList = classList + " " + this.messageDetails.direction;
    //return html`<p>Testing</p>`;
    return html`
      <p class=${classList} @click=${() => this.toggleMessage()}>
        ${this.messageDetails.displayMessage
          ? this.messageDetails.message
          : this.messageDetails.language}
      </p>
    `;
  }

  // Toggle whether the displayMessage property is set to true/false.
  toggleMessage() {
    console.log("in toggle");
    //console.log(this.messageDetails);
    // Toggle the boolean and re-assign

    this.messageDetails.displayMessage = !this.messageDetails.displayMessage;
    console.log(this.messageDetails.displayMessage);
    this.requestUpdate();
  }
}

customElements.define("peace-panel", PeacePanel);

// class TesterTester extends LitElement {
//   render() {
//     html`<p>TESTING here</p>`;
//   }
// }

// customElements.define("tester-tester", TesterTester);

// export class SimpleGreeting extends LitElement {
//   static styles = css`
//     p {
//       color: blue;
//     }
//   `;

//   static properties = {
//     name: { type: String },
//   };

//   constructor() {
//     super();

//     this.name = "Somebody";
//   }

//   render() {
//     return html`<p>Hello, ${this.name}!</p>`;
//   }
// }

// customElements.define("simple-greeting", SimpleGreeting);

// peaceMessages.forEach((message) => {
//   const newElement = document.createElement("simple-greeting");
//   document.querySelector(".banner-holder").appendChild(newElement);
// });

peaceMessages.forEach((message) => {
  console.log(message);
  const newPeacePanel = document.createElement("peace-panel");
  // The name of this property added to the HTML node has to exactly match the name expected
  // in the static properties area of the PeacePanels class definition (this seems to be how it
  // can process multiple pieces of input information attached to the HTML and correctly assign them.)

  // These are named 'slots' that newPeacePanel is expecting based on our definition in the static properties
  // section. Can attach any other properties that I want to the peace-panel elements, but only the
  // ones with the names matching those expected from the properties definition of the class will
  // be available for use with the Lit web component.
  newPeacePanel.messageDetails = message;
  newPeacePanel.tester = "Gussy!";
  console.log("in setting up");
  console.log(newPeacePanel.messageDetails);
  if (message.direction === "ttob") {
    document.querySelector(".banner-ttob").appendChild(newPeacePanel);
  }
  if (message.direction === "rtol") {
    document.querySelector(".banner-rtol").appendChild(newPeacePanel);
  }
  if (message.direction === "ltor") {
    document.querySelector(".banner-ltor").appendChild(newPeacePanel);
  }
});
