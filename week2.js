let character1 = {
    characterName:"Kamisato Ayato",
    rarity: 5,
    vision: 5,
    region: "Inazuma",
    weapon: "Sword",
    playable: true,
    favorite: true,
    affiliation: ["Yashiro Commission", "Kamisato Clan", "Shuumatsuban"]
}

let character2 = { 
    characterName:"Zhongli",
    rarity: 5,
    vision: 4,
    region: "Liyue",
    weapon: "Spear",
    playable: true,
    favorite: true,
    affiliation: ["Liyue Harbor", "Wangsheng Funeral Parlor", "The Seven", "Adepti"]

}

let character3 = {
    characterName:"Tartaglia",
    rarity: 5,
    vision: 5,
    region: "Snezhnaya",
    weapon: "Arrow",
    playable: true,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers"]
}

let character4 = {
    characterName:"Dainsleif",
    rarity: 0,
    vision: 0,
    region: "Khaenri'ah",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Eclipse Dynasty"]
}

let character5 = { 
    characterName: "Il Dottore",
    rarity: 0,
    vision: 0,
    region: "Snezhnaya",
    weapon: "Unknown",
    playable: false,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers", "Sumeru Akademiya (formely)"]
}

let character6 = {
    characterName:"Alhaitham",
    rarity: 5,
    vision: 7,
    region: "Sumeru",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Haravatat", "Sumeru Akademiya"]
}

// console.log(character1);
// console.log(character2);
// console.log(character3);
// console.log(character4);
// console.log(character5);
// console.log(character6);

//SEMANA II

const arrayOfCharacters = []

arrayOfCharacters.push(character1, character2, character3, character4, character5, character6);


// console.log(arrayOfCharacters);

const arrayOfPlayableCharacters = []

const checkBoolean = (char) => {
    for (characterTest of char) {
        
    if (characterTest.playable === true){
        arrayOfPlayableCharacters.push(characterTest)
    } else {
        alert(`${characterTest.characterName} is still not playable, so it won't be added to the array`)
    }
}
}
checkBoolean(arrayOfCharacters)
console.log(arrayOfCharacters);
console.log(arrayOfPlayableCharacters);



