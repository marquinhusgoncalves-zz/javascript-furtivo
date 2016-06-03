Valores, tipos e operadores

Tipos de dados
  Valores
    Primitivos - number, string, boolean, tipos especiais(null e undefined)
    Objetos - arrays, funções, Date, RegExp, Error

/*verificaçãodetiposprimitivos*/
typeof 13//tiponumber
//->"number"
typeof "javascriptfurtivo"//tipostring
//->"string"
typeof true//tipoboolean
//->"boolean"

/*tiposprimitivosespeciais*/
var semValor = null;//tiponull
typeof semValor
//->"object"
var semAtribuir;//tipoundefined
typeof semAtribuir
//->"undefined"

/*TiposdeObjeto*/
//objetodotipoarray(vetor)
var guitarras =['ibanez','musicman','suhr'];
typeof guitarras;//->"object"

//objetodotipofunction
var soma = function(valor1,valor2){returnvalor1+valor2;}
typeof soma;//->"function"

//objetodotipoDate
var agora = newDate();
typeof agora;//->"object"

//objetodotipoRegExp
var minhaRegExp = /padrao/;
typeof minhaRegExp;//->"object"
