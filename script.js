const ANEMO = 1;
const CRYO = 2;
const ELECTRO = 3;
const GEO = 4;
const HYDRO = 5;
const PYRO = 6;
const DENDRO = 7;
const ENTER_KEY = 13

let arrayOfCharacters = [
{   characterName:"Kamisato Ayato",
    rarity: 5,
    vision: HYDRO,
    region: "Inazuma",
    weapon: "Sword",
    playable: true,
    favorite: true,
    affiliation: ["Yashiro Commission", "Kamisato Clan", "Shuumatsuban"]
},


{   characterName:"Tartaglia",
    rarity: 5,
    vision: HYDRO,
    region: "Snezhnaya",
    weapon: "Bow",
    playable: true,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers"]
},


{    characterName:"Zhongli",
    rarity: 5,
    vision: GEO,
    region: "Liyue",
    weapon: "Polearm",
    playable: true,
    favorite: true,
    affiliation: ["Liyue Harbor", "Wangsheng Funeral Parlor", "The Seven", "Adepti"]

},


{   characterName:"Dainsleif",
    rarity: 5,
    vision: 0,
    region: "Khaenri'ah",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Eclipse Dynasty"]
},

{   characterName: "Il Dottore",
    rarity: 5,
    vision: 0,
    region: "Snezhnaya",
    weapon: "Unknown",
    playable: false,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers", "Sumeru Akademiya (formely)"]
},

{   characterName:"Alhaitham",
    rarity: 5,
    vision: DENDRO,
    region: "Sumeru",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Haravatat", "Sumeru Akademiya"]
},


{   characterName:"Bennett",
    rarity: 4,
    vision: PYRO, 
    region: "Mondstadt",
    weapon: "Sword",
    playable: true,
    favorite: true,
    affiliation: ["Adventurers' Guild", "Benny's Adventure Team"]
},


{   characterName:"Mona",
    rarity: 5,
    vision: HYDRO,
    region: "Mondstadt",
    weapon: "Catalyst",
    playable: true,
    favorite: false,
    affiliation: ["Hexenzirkel", "The Steambird"]
},


{   characterName:"Yae Miko",
    rarity: 5,
    vision: ELECTRO,
    region: "Inazuma",
    weapon: "Catalyst",
    playable: true,
    favorite: false,
    affiliation: ["Grand Narukami Shrine", "Yae Publishing House", "Youkai"]
},


{   characterName:"Ganyu",
    rarity: 5,
    vision: CRYO,
    region: "Liyue",
    weapon: "Bow",
    playable: true,
    favorite: true,
    affiliation: ["Yuehai Pavilion", "Liyue Qixing Employees", "Adepti"]
},


{   characterName:"Arataki Itto",
    rarity: 5,
    vision: GEO,
    region: "Inazuma",
    weapon: "Claymore",
    playable: true,
    favorite: false,
    affiliation: ["Arataki Gang", "Oni", "Youkai"]
}
]

// SEMANA III
// 1.
// Option: Fuction to format the property in Array to String. 

let affiliationString ;

const arrayToString = (affiliation) => {
  affiliationString = "";
  for (i = 0; i < affiliation.length; i++) {
    if (i !== affiliation.length - 1) {
      affiliationString += affiliation[i] + ", ";
    } else {
      affiliationString += affiliation[i] + ".";
    }
  }
  return affiliationString;
};


// 2.

let character7 = { 
    characterName:"Wanderer",
    rarity: 5,
    vision: 1,
    region: "Sumeru",
    weapon: "Catalyst",
    playable: true,
    favorite: false,
    affiliation: ["None"]
}

arrayOfCharacters.push(character7)

const objectData = (character) => {
    for (property in character) {
        if (isPropertyCharacterName(property)) {
            console.log(character["characterName"].toUpperCase());
        } else if (isPropertyAffiliation(property)) {
            console.log(`${property}: ` + arrayToString(character[property]));
        } else {
            console.log(`${property}: ` + character[property]);
        }
    }
} 

for (character of arrayOfCharacters) {
    objectData(character)
    console.log("\n \n");
}

function isPropertyCharacterName(property) {
    return property === "characterName" ? true : false
}

function isPropertyAffiliation(property) {
    return property === "affiliation" ? true : false
}

const isPlayable = (characterPlayable) => {
    return characterPlayable? "playable" : "notPlayable"
}



// 3.

const objectReport = (character) => {
    objectData(character)
}

objectReport(character7)



const createCard = (character, content) => {
    for (property in character) {
        content = 
        `<div class="card">
            <img src="./assets/${isPlayable(character.playable)}.png" class = "isPlayable"> 
            <img src="./assets/characters/character${character.characterName}.png" alt="${character.characterName} profile picture" class = "img">
                                        
            <div class="content">
                <div class="title">
                    <h3>${character.characterName}</h3>
                    <img src="./assets/icon${character.vision}.png" alt = "Vision Symbol" class="type" id="${character.vision}">
                </div>
                <img src="./assets/${character.rarity}star.png" class = "rarity" alt = "Five Stars">                                                 
                <p class = "details"> 
                    <b>Region:</b> ${character.region} <br>
                    <b>Weapon:</b> ${character.weapon} <br>
                    <b>Affiliation:</b><span> ${arrayToString(character.affiliation)}</span></p>                             
            </div>
        </div>`
    }
    return content
}

const createCharacterListCards = (array) => {
    array.sort(function (a,b){
        let out
        if (a.characterName > b.characterName) {
            out = 1
        }
        if (b.characterName > a.characterName) {
            out = -1            
        }
        return out
    })
    const listOfCards = document.getElementById("cardsContainer")
    let content
    listOfCards.innerHTML = ""
    for (character of array) {
        content = createCard(character, content)
        listOfCards.innerHTML += content
    }   
}


function isSearchBarEmpty(userInput) {
    if (userInput == "" || userInput == undefined) {
        alert(`Please enter a valid value at the search.`)
    }
}

function writtenSearch(event) {
    let userInput = document.getElementById("searchingInput").value
    userInput = userInput.toLowerCase().trim()
    
    isSearchBarEmpty(userInput)

    let result

    result = arrayOfCharacters.filter(character => character.characterName.toLowerCase().includes(userInput))
    arrayOfCharacters.filter(character => character.region.toLowerCase().includes(userInput)).forEach(element => { result.push(element)});
    arrayOfCharacters.filter(character => character.weapon.toLowerCase().includes(userInput)).forEach(element => { result.push(element)});
    arrayOfCharacters.filter(character => character.rarity.toString().toLowerCase().includes(userInput)).forEach(element => { result.push(element)});
    arrayOfCharacters.filter(character => arrayToString(character.affiliation).toLowerCase().includes(userInput)).forEach(element => { result.push(element)});
    result = [...new Set(result)]

    createCharacterListCards(result)
}

function writtenSearchEnter(event) {

    if (event.keyCode === ENTER_KEY) {
        writtenSearch(event)
    }    
}


function elementSearch(event) {
    
    let element = event.target.id
    let result
    result = arrayOfCharacters.filter(character => character.vision.toString().includes(element))
    
    createCharacterListCards(result)
}

function onInit() {
    createCharacterListCards(arrayOfCharacters)
}

onInit()