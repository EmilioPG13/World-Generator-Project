// Staring constant for a phrase randomizer
const phraseRandomizer = () => {
    const buildingPhrases = {

        partOne: [
            "I\'ve ", 
            "You have",
            "We\'ve"
        ],

        partTwo: [
            "successfully overcome many challenges",
            "done an excellent job",
            "reached a significant milestone"
        ],

        partThree: [
            "here, take a raise",
            "you get nothing, HURRAY!",
            "for your reward, you will have to fight me"
        ]
    }
    return buildingPhrases
}

const sentence = phraseRandomizer();
