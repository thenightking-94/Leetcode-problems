/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ');
    const output = words.reduce((acc, el) => {
        const hasBroken = Array.from(brokenLetters).some((i) => {
            return el.includes(i)
        }) || false
        if(!hasBroken)
            acc+=1;

        return acc
    }, 0)
 return output
};
