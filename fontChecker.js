console.clear();
var elems = document.body.getElementsByTagName("*");
var fontList = {};
var totalFontCount = 0;
var listOfFonts = [];


getFontsList(elems, fontList);

function getFontsList(elems, fontList) {
    for (var k in elems) {
        if (elems.hasOwnProperty(k)) {
            if (elems[k]) {
                var f = document.defaultView.getComputedStyle(elems[k], null).getPropertyValue("font-family");
                if (fontList[f]) {
                    var tempArr = fontList[f];
                    tempArr.push(elems[k]);
                    fontList[f] = tempArr;
                } else {
                    fontList[f] = [elems[k]];
                    listOfFonts.push(f);
                    totalFontCount++;
                }
            }
        }
    }
}


console.log("Total distinct font(s) used : " + totalFontCount);
console.log("List of fonts used : " + "[" + listOfFonts.join(" ][ ") + "]");
console.log(fontList);
