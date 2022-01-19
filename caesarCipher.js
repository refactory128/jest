export function caesarCipher(str, shift) {
  //replace all string characters with shifted characters
  return str.replace(/[a-zA-Z]/g, (char) => {
    // shift each character
    const charCode = char.charCodeAt();

    //change characters back to string
    return String.fromCharCode(
      //if shifted characters are beyond end of alphabet wrap back around
      charCode <= 90
        ? charCode + shift <= 90
          ? charCode + shift
          : ((charCode + shift) % 90) + 64
        : charCode + shift <= 122
        ? charCode + shift
        : ((charCode + shift) % 122) + 96
    );
  });
}
