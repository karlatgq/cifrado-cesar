function cipher(str) {
  var string = [prompt('Ingresa una palabra')];
        for(var i = 0; i < string.length; i++) {

//Obtener el codigo ASCII de las letras que se han dado
            var newString = (((string.charCodeAt(i) - 65) + 33) % 26 +65);
            var otherString = String.fromCharCode(newString);
        }
     return otherString;
}
var output = cipher(string);
console.log(output);
