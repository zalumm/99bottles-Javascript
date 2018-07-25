class BeerSong {
  verse(numBottles) {
    switch (numBottles) {
      case 2:
        return `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.\n`
            + `Take one down and pass it around, ${numBottles - 1} bottle of beer on the wall.\n`;
      case 1:
        return `${numBottles} bottle of beer on the wall, ${numBottles} bottle of beer.\n`
            + 'Take it down and pass it around, no more bottles of beer on the wall.\n';
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
      default:
        return `${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.\n`
            + `Take one down and pass it around, ${numBottles - 1} bottles of beer on the wall.\n`;
    }
  }

  sing(numBottles, end) {
    const endVerse = end || 0;
    let returnString = '';
    for (let i = numBottles; i >= endVerse; i -= 1) {
      if (i === endVerse) {
        returnString += this.verse(i);
      } else {
        returnString += `${this.verse(i)}\n`;
      }
    }
    return returnString;
  }
}
module.exports = BeerSong;
