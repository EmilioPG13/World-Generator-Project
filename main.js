// Staring constant for a phrase randomizer
const phraseRandomizer = () => {
    const buildingPhrases = {

        partOne: [
            "I\'ve ", 
            "You have",
            "We\'ve"
        ],

        partTwo: [
            "successfully overcome many challenges,",
            "done an excellent job,",
            "reached a significant milestone,"
        ],

        partThree: [
            "here, take a raise.",
            "you get nothing, HURRAY!",
            "as for your reward, you will have to fight me to death!."
        ]
    };
    
    //Building the phrase logic
    const randomPhrase = {
        partOne: buildingPhrases.partOne[Math.floor(Math.random() * buildingPhrases.partOne.length)],
        partTwo: buildingPhrases.partTwo[Math.floor(Math.random() * buildingPhrases.partTwo.length)],
        partThree: buildingPhrases.partThree[Math.floor(Math.random() * buildingPhrases.partThree.length)]
    };
    return randomPhrase;
}

const generatePhrase = phraseRandomizer();
console.log(`${generatePhrase.partOne} ${generatePhrase.partTwo} ${generatePhrase.partThree}`);