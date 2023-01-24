const characterName1 = "Kamisato Ayato";
const rarity1 = 5 ;
const vision1 = 5 ;
const region1 = "Inazuma";
const weapon1 = "Sword";
const archor1 = false;
const playable1 = true;
const favorite1 = true ; 
const affiliation1 = ["Yashiro Commission", "Kamisato Clan", "Shuumatsuban"]

const characterName2 = "Zhongli";
const rarity2 = 5 ;
const vision2 = 4 ;
const region2 = "Liyue" ;
const weapon2 = "Spear" ;
const archor2 = true ;
const playable2 = true ;
const favorite2 = true ; 
const affiliation2 = ["Liyue Harbor", "Wangsheng Funeral Parlor", "The Seven", "Adepti"];

const characterName3 = "Tartaglia";
const rarity3 = 5 ;
const vision3 = 5 ;
const region3 = "Snezhnaya" ;
const weapon3 = "Arrow" ;
const archor3 = false ;
const playable3 = true ;
const favorite3 = true ; 
const affiliation3 = ["Fatui", "Eleven Fatui Harbingers",]

const characterName4 = "Dainsleif";
const rarity4 = 0 ;
const vision4 = 0 ;
const region4 = "Khaenri'ah" ;
const weapon4 = "Sword" ;
const archor4 = false ;
const playable4 = false ;
const favorite4 = true ; 
const affiliation4 = ["Eclipse Dynasty"]

const characterName5 = "Il Dottore";
const rarity5 = 0 ;
const vision5 = 0 ;
const region5 = "Snezhnaya" ;
const weapon5 = "Unknown" ;
const archor5 = false ;
const playable5 = false ;
const favorite5 = true ; 
const affiliation5 = ["Fatui", "Eleven Fatui Harbingers","Sumeru Akademiya (formely)"]

const characterName6 = "Alhaitham";
const rarity6 = 5 ;
const vision6 = 7 ;
const region6 = "Sumeru" ;
const weapon6 = "Sword" ;
const archor6 = false ;
const playable6 = false ;
const favorite6 = true ; 
const affiliation6 = ["Haravatat", "Sumeru Akademiya"]

const avarageRarity = (rarity1 + rarity2 + rarity3 + rarity4 + rarity5 + rarity6)/6;
console.log(avarageRarity.toFixed(2));

const avarageVision = (vision1 + vision2 + vision3 + vision4 + vision5 + vision6)/6;
console.log(avarageVision);

const checkPlayable = playable1 
    && playable2 
    && playable3 
    && playable4 
    && playable5 
    && playable6
console.log(checkPlayable);

const checkFavorite = favorite1 
    && favorite2 
    && favorite3
    && favorite4 
    && favorite5 
    && favorite6
console.log(checkFavorite);

        
function report(char,rarity,vision,region,weapon,playable,favorite, affiliation) {
        console.log(`${char.toUpperCase()},
rarity: ${rarity},
vision: ${vision},
region: "${region}",
weapon: "${weapon}",
playable: ${playable},
favorite: ${favorite},
affiliation: ${affiliation.join(", ")}.`)
    }

report(characterName1, rarity1, vision1, region1, weapon1, playable1, favorite1, affiliation1)
report(characterName2, rarity2, vision2, region2, weapon2, playable2, favorite2, affiliation2)
report(characterName3, rarity3, vision3, region3, weapon3, playable3, favorite3, affiliation3)
report(characterName4, rarity4, vision4, region4, weapon4, playable4, favorite4, affiliation4)
report(characterName5, rarity5, vision5, region5, weapon5, playable5, favorite5, affiliation5)
report(characterName6, rarity6, vision6, region6, weapon6, playable6, favorite6, affiliation6)