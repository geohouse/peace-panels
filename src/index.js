import { LitElement, html, css } from "lit";
import {
  SVG,
  extend as SVGextend,
  Element as SVGElement,
  create,
} from "@svgdotjs/svg.js";
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
    //console.log("in render");
    //console.log(this.messageDetails.language);
    //console.log(this.tester);
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
    //console.log("in toggle");
    //console.log(this.messageDetails);
    // Toggle the boolean and re-assign

    this.messageDetails.displayMessage = !this.messageDetails.displayMessage;
    //console.log(this.messageDetails.displayMessage);
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
  //console.log(message);
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
  //console.log("in setting up");
  //console.log(newPeacePanel.messageDetails);
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

//Get the window width and height every time it's resized (this is a workaround to set the
// window dimensions using percentages of the window size when the input size only accepts pixels)
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// const testSVG = SVG()
//   .addTo("body")
//   .size(windowWidth / 2, windowHeight);

// let rect = testSVG
//   .polygon(`0,0 100,100 150,150, 150,0 0,0`)
//   .attr({ fill: "#0f0", class: "svg" });

// function makeSVGContainer(width, height, className) {
//   return (svgContainer = SVG()
//     .addTo("body")
//     .size(width, height)
//     .addClass(className));
// }

const fullContainer = SVG()
  .addTo(".banner-holder")
  .size(windowWidth, windowHeight)
  .addClass("full-container");

// const ttobContainer = SVG()
//   .addTo(".banner-ttob")
//   .size(windowWidth, windowHeight)
//   .addClass("ttob-container");

// const rtolContainer = SVG()
//   .addTo(".banner-rtol")
//   .size(windowWidth, windowHeight)
//   .addClass("rtol-container");

// let rect = fullContainer
//   .polygon(`0,0 100,100 150,150, 150,0 0,0`)
//   .attr({ fill: "#0f0", class: "svg" });

// const ttobSVGContainer = makeSVGContainer(
//   windowWidth,
//   windowHeight / 2,
//   "ttob-svg-container"
// );

// const ltorSVGContainer = makeSVGContainer(
//   windowWidth / 2,
//   windowHeight,
//   "ltor-svg-container"
// );

// let rtolSVG, ttobSVG, ltorSVG;

function renderSVG(windowHeight, windowWidth) {
  rtolSVG = fullContainer
    .polygon(
      `0,0 0,${windowHeight} ${windowWidth / 2},${windowHeight / 2} ${
        windowWidth / 2
      },0 0,0`
    )
    .attr({ fill: "#0f0", class: "rtol-svg" });

  ttobSVG = fullContainer
    .polygon(
      `0,${windowHeight} ${windowWidth},${windowHeight} ${windowWidth / 2},${
        windowHeight / 2
      }`
    )
    .attr({ fill: "#f00", class: "ttob-svg" });

  ltorSVG = fullContainer
    .polygon(
      `${windowWidth},0 ${windowWidth},${windowHeight} ${windowWidth / 2},${
        windowHeight / 2
      } ${windowWidth / 2},0`
    )
    .attr({ fill: "#00f", class: "rtol-svg", top: 0, left: windowWidth / 2 });
  console.log(ltorSVG);
}

// Scales the SVG along with the window size.
function updateSVGSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  // Remove the previous rectangle and re-render with the new width/height dimensions
  // rect.remove();
  // rect = testSVG
  //   .rect(windowWidth / 10, windowHeight / 10)
  //   .attr({ fill: "#0f0", class: "svg" });

  ltorSVG.remove();
  ttobSVG.remove();
  rtolSVG.remove();
  renderSVG(windowHeight, windowWidth);
}
// Initial SVG render of the background areas
renderSVG(windowHeight, windowWidth);
// If the window size changes, re-calculate and re-render the background areas so they still fit correctly
// based on the new screen size.
window.addEventListener("resize", updateSVGSize);

// // Can't use anonymous arrow functions for this callback (likely because it's not passing the correct value of 'this')
// rect.click(function () {
//   this.fill({ color: "blue" });
//   this.animate().move(150, 150);
// });

ltorSVG.click(function () {
  console.log("fired");
  this.fill({ color: "blue" });
  this.animate().move(150, 150);
  document.querySelector(".banner-holder-rtol").click();
});

rtolSVG.click(function () {
  console.log("fired");
  this.fill({ color: "blue" });
  this.animate().move(150, 150);
});

ttobSVG.click(function () {
  console.log("fired");
  this.fill({ color: "blue" });
  this.animate().move(150, 150);
});

// document.querySelector(".svg").addEventListener("click", function () {
//   console.log("Clicked!");
// });
