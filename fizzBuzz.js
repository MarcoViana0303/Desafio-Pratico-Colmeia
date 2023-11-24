// O parâmetro numbers é um Array<number>. Sua tarefa é percorrer esse array e:

// se for divizivel por 5, print "buzz"

// se for divisivel por 3 e 5, print "fizzBuzz"

// Neste exemplo, guardarei os valores dentro de um novo array e irei retornar conforme acima.
function fizzBuzz(numbers) {
  let arrayNumbers = [];

// Laço de repetição para iterar por cada elemento do array de números
  for (let i = 0; i < numbers.length; i++) {
// Se o elemento da vez for divisível por 3 e 5, guardará no arrayNumbers o valor 'fizzBuzz'
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      arrayNumbers.push('fizzBuzz');
    }
// Se o elemento da vez for divisível apenas por 5, guardará o valor 'buzz'
    else if(numbers[i] % 5 === 0){
      arrayNumbers.push('buzz');
    }
// Nesse caso, apenas irá retornar o número dentro do array
    else {
      arrayNumbers.push(numbers[i]);
    }
}

  return arrayNumbers;
};

// Neste exemplo, não é guardado o retorno em um array.
function fizzBuzz2(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      console.log('fizzBuzz');
    }

    else if(numbers[i] % 5 === 0){
      console.log('buzz');
    }
  }
  return;
}

// Exemplo de input para o exemplo 1:
console.log(fizzBuzz([5, 15, 30, 2]));


// Exemplo de input para o exemplo 2:
fizzBuzz2([5, 15, 30, 2])