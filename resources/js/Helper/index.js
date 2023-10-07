export const formatWord = (name) => {
    const splitWords  = name.split('_');
    const newWord = splitWords.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    }).join(' ')
    return newWord;
}   