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

// Count up the number of LTOR messages
const sumLTORMessages = peaceMessages.reduce((total, current) => {
  // console.log(current);
  if (current.direction === "ltor") {
    console.log("yes");
    console.log(total);
    total += 1;
  }
  return total;
}, 0);

console.log({ sumLTORMessages });

// Number of messages to keep out of the ltor pool, not including english
let numLTORMessagesToKeep = 9;

// Find the index number of the english entry (map converts the language entries in the objects to an array, then searches
// for the index of the english entry)
const indexOfEnglishEntry = peaceMessages
  .map((object) => {
    return object.language;
  })
  .indexOf("English");

//console.log({ indexOfEnglishEntry });

// There are more messages in ltor than will fix well on a screen. Randomly downsample them here,
// but keep all of the rtol and ttob messages. Randomly select 7 messages, and always include English for context.
function downsampleMessages(numLTORMessages, numToKeep) {
  let downsampleIndexes = [];
  // Start by adding the index of the english entry
  downsampleIndexes.push(indexOfEnglishEntry);
  for (let counter = 0; counter < numToKeep; counter++) {
    // keeps the entry in the range [0,numLTORMessages]
    let currEntry = Math.floor(Math.random() * numLTORMessages);
    console.log({ currEntry });
    // Ensure there are no duplicate index picks (re-randomize as needed to ensure this is the case)
    if (downsampleIndexes.includes(currEntry)) {
      while (downsampleIndexes.includes(currEntry)) {
        console.log("in while");
        currEntry = Math.floor(Math.random() * numLTORMessages);
      }
    }
    downsampleIndexes.push(currEntry);
  }

  console.log({ downsampleIndexes });
  let sampledMessageHolder = [];
  let ltorCounter = 0;
  for (message of peaceMessages) {
    //console.log(message);
    if (message.direction === "rtol" || message.direction === "ttob") {
      sampledMessageHolder.push(message);
    } else if (message.direction === "ltor") {
      if (downsampleIndexes.includes(ltorCounter)) {
        sampledMessageHolder.push(message);
      }
      ltorCounter += 1;
    }
  }
  return sampledMessageHolder;
}

const sampledMessages = downsampleMessages(
  sumLTORMessages,
  numLTORMessagesToKeep
);

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

sampledMessages.forEach((message) => {
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
// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;
let windowWidth = window.visualViewport.width;
let windowHeight = window.visualViewport.height;

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

// Initialize to undefined
let rtolSVG, ltorSVG, ttobSVG;

function renderSVG_full(renderLtor, renderRtol, renderTtob) {
  //Get the window dimensions to work with
  windowWidth = window.visualViewport.width;
  windowHeight = window.visualViewport.height;

  if (renderRtol) {
    if (rtolSVG != undefined) {
      rtolSVG.remove();
    }
    rtolSVG = fullContainer
      .polygon(
        `0,0 0,${windowHeight} ${windowWidth / 2},${windowHeight / 2} ${
          windowWidth / 2
        },0 0,0`
      )
      .attr({ fill: "#0f0", class: `rtol-svg max` });
    // Set the click event handler to change the class to 'min' and render to the side when clicked
    rtolSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move(-(3 / 10) * windowWidth, 0);
      // this.node.classList[1] = min;
      renderSVG_side(false, true, false);
    });
  }

  if (renderTtob) {
    if (ttobSVG != undefined) {
      ttobSVG.remove();
    }
    ttobSVG = fullContainer
      .polygon(
        `0,${windowHeight} ${windowWidth},${windowHeight} ${windowWidth / 2},${
          windowHeight / 2
        }`
      )
      .attr({ fill: "#f00", class: `ttob-svg max` });

    ttobSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move(0, (8 / 10) * windowHeight);
      renderSVG_side(false, false, true);
    });
  }
  if (renderLtor) {
    if (ltorSVG != undefined) {
      ltorSVG.remove();
    }
    ltorSVG = fullContainer
      .polygon(
        `${windowWidth},0 ${windowWidth},${windowHeight} ${windowWidth / 2},${
          windowHeight / 2
        } ${windowWidth / 2},0`
      )
      .attr({
        fill: "#00f",
        class: `ltor-svg max`,
      });
    console.log(ltorSVG);

    // Add the click event handlers
    ltorSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move((8 / 10) * windowWidth, 0);
      console.log(this);
      renderSVG_side(true, false, false);
    });
  }
}

function renderSVG_side(renderLtor, renderRtol, renderTtob) {
  //Get the window dimensions to work with
  windowWidth = window.visualViewport.width;
  windowHeight = window.visualViewport.height;
  if (renderRtol) {
    if (rtolSVG != undefined) {
      rtolSVG.remove();
    }
    rtolSVG = fullContainer
      .polygon(
        `${(-3 / 10) * windowWidth},0 ${
          (-3 / 10) * windowWidth
        },${windowHeight} ${windowWidth / 2 - (3 / 10) * windowWidth},${
          windowHeight / 2
        } ${windowWidth / 2 - (3 / 10) * windowWidth},0 0,0`
      )
      .attr({ fill: "#0f0", class: `rtol-svg min` });
    // Set the click event handler to change the class to 'min' and render to the side when clicked
    rtolSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move(0, 0);
      // this.node.classList[1] = min;
      renderSVG_full(false, true, false);
    });
  }

  if (renderTtob) {
    if (ttobSVG != undefined) {
      ttobSVG.remove();
    }
    ttobSVG = fullContainer
      .polygon(
        `0,${windowHeight + (1 / 10) * windowHeight} ${windowWidth},${
          windowHeight + (1 / 10) * windowHeight
        } ${windowWidth / 2},${(6 / 10) * windowHeight}`
      )
      .attr({ fill: "#f00", class: `ttob-svg min` });

    ttobSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move(0, (8 / 10) * windowHeight);
      renderSVG_full(false, false, true);
    });
  }
  if (renderLtor) {
    if (ltorSVG != undefined) {
      ltorSVG.remove();
    }
    ltorSVG = fullContainer
      .polygon(
        `${(13 / 10) * windowWidth},0 ${
          (13 / 10) * windowWidth
        },${windowHeight} ${windowWidth / 2 + (3 / 10) * windowWidth},${
          windowHeight / 2
        } ${windowWidth / 2 + (3 / 10) * windowWidth},0 ${
          (13 / 10) * windowWidth
        },0`
      )
      .attr({
        fill: "#00f",
        class: `ltor-svg min`,
      });
    console.log(ltorSVG);

    // Add the click event handlers
    ltorSVG.click(function () {
      console.log("fired");
      this.fill({ color: "blue" });
      this.animate().move((8 / 10) * windowWidth, 0);
      console.log(this);
      renderSVG_full(true, false, false);
    });
  }
}

// Scales the SVG along with the window size.
function updateSVGSize(event) {
  console.log({ event });
  let resized = false;
  if (event != "") {
    resized = true;
  }

  // Remove the previous rectangle and re-render with the new width/height dimensions
  // rect.remove();
  // rect = testSVG
  //   .rect(windowWidth / 10, windowHeight / 10)
  //   .attr({ fill: "#0f0", class: "svg" });
  // The background color panels are min/maxed based on their second class value.
  // Updating them with window size destroys the previous panels and their class state, so
  // need to capture their current class state here before removing them, and pass that to the
  // renderSVG function so that when they're re-sized, they keep their same min/max appearance.
  const currLTORSVG = document.querySelector(".ltor-svg");
  const currRTOLSVG = document.querySelector(".rtol-svg");
  const currTTOBSVG = document.querySelector(".ttob-svg");

  const currLTORClass = currLTORSVG.classList[1];
  const currRTOLClass = currRTOLSVG.classList[1];
  const currTTOBClass = currTTOBSVG.classList[1];

  // ltorSVG.remove();
  // ttobSVG.remove();
  // rtolSVG.remove();

  renderSVG_full(
    currLTORClass === "max" ? true : false,
    currRTOLClass === "max" ? true : false,
    currTTOBClass === "max" ? true : false
  );

  renderSVG_side(
    currLTORClass === "min" ? true : false,
    currRTOLClass === "min" ? true : false,
    currTTOBClass === "min" ? true : false
  );
}
// Initial SVG render of the background areas
renderSVG_full(windowHeight, windowWidth, true, true, true);
// If the window size changes, re-calculate and re-render the background areas so they still fit correctly
// based on the new screen size.
window.addEventListener("resize", updateSVGSize);

// // Can't use anonymous arrow functions for this callback (likely because it's not passing the correct value of 'this')
// rect.click(function () {
//   this.fill({ color: "blue" });
//   this.animate().move(150, 150);
// });

// document.querySelector(".svg").addEventListener("click", function () {
//   console.log("Clicked!");
// });
