function replaceString(data) {
    let replacedStr = data.replace(/stun/g, 'stump');
    return replacedStr;
}

console.log(replaceString('A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk'))