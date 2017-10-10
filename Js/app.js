function cipher(words) {

    for (var i = 0; words.length; i++) {
        //me de el nuevo codigo de la la letra en ASCII
            var codigoAsciiForWords = words[i].charCodeAt();

           //aplico la formula al codigo ASCII de la letra
            var positionFormula = (((codigoAsciiForWords)- 65 + 33) % 26 +65);

            //imprime la nueva posicion de la letra
            var newPositionLetter = String.fromCharCode(positionFormula);

    }

        return newPositionLetter;

}
var word = cipher(prompt('Ingresa una palabra'));
console.log(word);
