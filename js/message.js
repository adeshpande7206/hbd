const continueBtn = document.querySelector(".continue");
const message = document.querySelector(".messages");
const preview = message.querySelector("img");
const gameContainerSection = document.querySelectorAll(
  ".game-container div section"
);
const gameContainerDiv = document.querySelectorAll(".game-container div");
const messagePopupBox = document.querySelector(".message-popup");
const messageText = document.querySelector(".message-text p");
const messageContinue = document.querySelector(".message-text button");
const complete = document.querySelector(".complete");

all_images = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
  "image9",
  "image10",
  "image11",
  "image12",
  "image13",
  "image14",
  "image15",
  "image16",
];
let wrongCount = 0;
let count = 0;
let rightCount = 0;
let i = 10;
let countdown;
messageArray = [
  "<strong>Happy Birthday to my one and only Favourite Person.</strong> <br /> Teko pta h favourite kyun hai tu. Because ekbaar mera mood bohott kharab tha and tune call kiya. Firr bey baat krne ke baad itna acha laga BC kyon sad tha wahi bhul gya. Aaj bata du jbb bhi mood khrab hota na mera. Tere se baat krke sbb thikk ho jaata. &#x1f60c;&#x1f60c;&#x1f60c;",
  "<strong>Happy Birthday to my Alarm Clock.</strong> <br /> Haha, top Secret- mai teri aawaz sunne teko bolta ki utha de meko. Aur wo jo tu check krti na uthane ke baad ki utha hai ki nae wo sabse best part hai.",
  "<strong>Happy Birthday to MERI MAA.</strong> <br /> Abb isme kya hi likhu. Haan Maa hai tu meri &#x1f648;&#x1f648;&#x1f648;",
  "<strong>Happy Birthday to the one who makes me jealous.</strong> <br /> Kutti Jalaya matt karr. Haan hoti hai jalan haramkhor. &#x1f624;&#x1f624;&#x1f624;",
  "<strong>Happy Birthday to my only motivator.</strong> <br /> Abey haan jbb v mann nae karta na kaam karne ka yaa firr kuch v karne ka BC tu bol deti na 'No baat, No kaam'. 5 min ke andar wapas karne baith jaata mai. Abey abhi jitna saara kiya hun na uska 10% bhi nae padh paata agar tu nae bolti toh. Lekin ThankYou nae bolunga. &#x1f608;&#x1f608;&#x1f608;",
  "<strong>Happy Birthday to the one jisse mai kuch bhi baat kar skta hun yeh jaante hue ki 'I will not be judged'</strong> <br /> Bohott besharam hai bey tu. &#x1f624;&#x1f624;&#x1f624;",
  "<strong>Happy Birthday to the one who gives me hint when she's low</strong><br />Matlab dekho bhai, sad hai wo btana hai lekin kyon hai wo pata karne me jaan nikal do aap apni. Sach bolu acha nae lagta tu aise sad rehti toh. &#x1f62D;&#x1f62D;&#x1f62D;",
  "<strong>Happy Birthday to the important++ person of my life.</strong><br /> Abey tu itni important ho gayi hai na bey ki saala ek dinn message nae karti toh lagta ki kahan hai yaar yeh. &#x1f62d;&#x1f62d;&#x1f62d;",
  "<strong>Happy Birthday to the one who thinks too much shit.</strong><br /> Teko bata dun mai ki tune kuch v kiya ho mai hamesha tere side rhunga jbb tkk wo bohott galat na ho and tu galat karegi nae kyonki mai karne nae dunga. Toh iska matlab mai hu hamesha tere saath.",
  "<strong>Happy Birthday to my greatest star.</strong><br /> Yeh aise hi likh diya kyonki heading achi achi hai baaki ghanta ka star &#x1f602;&#x1f602;&#x1f602;",
  "<strong>Happy Birthday to the one jo sbb cheez number me measure karti hai.</strong><br /> hazar lakh crore saal se icecream nahi khayi hai.",
  "<strong>Happy Birthday to the one sabse badi nautanki I've ever met.</strong><br /> Aur haramkhor meko v waise hi bana di hai. &#x1f602;&#x1f602;&#x1f602;",
  "<strong>Happy Birthday to the one person I missed the most.</strong><br /> Hao miss karta hun teko &#x1f624;&#x1f624;&#x1f624;",
  "<strong>Happy Birthday to the one whom I can trust like for literally anything.</strong><br /> &#x1f60c;&#x1f60c;&#x1f60c;",
  "<strong>Happy Birthday to the one jisko college khulne ke baad sabse pehle dekhna chahta mai.</strong> <br/> Bss itna bolunga ki tu lene aayegi meko kuch v ho. Aur haan tu Chutiya hai.",
  "<strong>Aur kya bolu bey.</strong><br /> Yaar mai express karne me utna acha nae hun lekin smjh jaa bey jitna likha hu utna nae likha kabhi. Aur haramkhor teko toh blessed feel krna chahiye ki mai hun tere paas. &#x1f60e;&#x1f60e;&#x1f60e;",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function setPreviewImage() {
  preview.classList = ["preview"];
  shuffle(all_images);
  preview.src = `./static/${all_images[0]}.jpeg`;
  preview.classList.add(`${all_images[0]}`);
  all_images.shift();
  if (count != 0) {
    gameContainerDiv.forEach((division) => {
      const section = division.querySelector("section");
      if (section.classList[1] == "wrong") {
        section.style.background = "";
        section.classList.remove("wrong");
      }
    });
  }
}

function hideImages() {
  gameContainerSection.forEach((section) => {
    section.classList.add("img-overlay");
  });
}

function gamePlay() {
  gameContainerDiv.forEach((division) => {
    if (messageArray.length == 0) {
      complete.style.opacity = "1";
      complete.style.pointerEvents = "all";
      return;
    }
    division.addEventListener("click", () => {
      const section = division.querySelector("section");
      wrongAnswers();
      if (wrongCount < 5) {
        if (division.classList[0] == preview.classList[1]) {
          section.style.background = "url('./static/right.png') no-repeat";
          section.style.backgroundSize = "100%";
          section.classList.add("right");
          count++;
          messagePopup();
        } else {
          section.style.background = "url('./static/wrong.png') no-repeat";
          section.style.backgroundSize = "100%";
          section.classList.add("wrong");
          count++;
        }
      } else {
        messagePopupBox.style.opacity = 1;
        messagePopupBox.style.pointerEvents = "all";
        messageText.innerHTML = `<strong>5 Wrong Guesses</strong><br/> 1 taareef will be not shown. Jitna galat guess utni taareef kam hoti jaayegi. &#x1f62c;&#x1f62c;&#x1f62c; `;
        messageArray.shift();
        gamePlay();
      }
    });
  });
}

function countDown() {
  const timeInterval = message.querySelector("p");
  if (i <= 0) {
    timeInterval.innerText = "";
    setPreviewImage();
    hideImages();
    gamePlay();
    clearInterval(countdown);
    return;
  }
  timeInterval.innerText = i;
  i = i - 1;
}

function messagePopup() {
  messagePopupBox.style.opacity = 1;
  messagePopupBox.style.pointerEvents = "all";
  messageText.innerHTML = messageArray[0];
}

continueBtn.addEventListener("click", () => {
  const rulesBox = document.querySelector(".rules-wrapper");
  rulesBox.classList.add("rules-click");
  countdown = setInterval(countDown, 1000);
});

messageContinue.addEventListener("click", () => {
  messagePopupBox.style.opacity = 0;
  messagePopupBox.style.pointerEvents = "none";
  messageArray.shift();
  setPreviewImage();
  gamePlay();
});

function wrongAnswers() {
  let j = 0;
  gameContainerDiv.forEach((division) => {
    const section = division.querySelector("section");
    if (section.classList.contains("wrong")) {
      j++;
    }
    wrongCount = j;
  });
}

// let countRight = 0;
// let right = setInterval(() => {
//   if (countRight >= 16) {
//     clearInterval(right);
//   }
//   const section = document.querySelectorAll(".game-container div section");
//   let k = 0;
//   section.forEach((sec) => {
//     if (sec.classList.contains("right")) {
//       k++;
//     }
//   });
//   countRight = k;
//   console.log(countRight);
// }, 1000);
