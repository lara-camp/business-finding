export const formatWord = (name) => {
    const splitWords  = name.split('_');
    const newWord = splitWords.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1)
    }).join(' ')
    return newWord;
}   

export const textCapitalize = (word) =>  {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const  formatNumber = (number) => {
    var formatNumber =  parseInt(number).toLocaleString('en-US', { maximumFractionDigits: 3 })
    return formatNumber;
 }

export const strLimit = (str, max_length) => {
    if(str.length > max_length) {
        return str.slice(0, max_length) + '...';
    }

    return str;
}
