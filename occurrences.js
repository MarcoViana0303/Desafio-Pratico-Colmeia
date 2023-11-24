// Temos uma variável book. Ela é uma string e contem apenas letras minúsculas sem acento e espaços.

// Sua tarefa é percorrer a variável book e contar a quantidade de ocorrências de cada letra E o número de palavras.

// EXEMPLO DE OUTPUT: 12333 palavras;  a: 1032, b:129, c: 1111 etc..
const book = 'este e o conteudo apenas com palavras minusculas e espacos';

function occurrences(book) {
    const words = book.split(' ');
    const letters = {};
    // Objeto final com a contagem de palavras e a ocorrência de cada letra
    const result = {
        palavras: words.length,
    };

    // Loop para percorrer cada palavra
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        // Loop para percorrer cada letra da palavra
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];

            // Verificar se a letra já foi encontrada anteriormente
            if (!letters[letter]) {
                // Inicializar a contagem da letra se ainda não foi encontrada
                letters[letter] = 0;
            }
            // Incrementar a contagem da letra
            letters[letter]++;
        }
    }

    // Converter o objeto de letras para uma array de arrays e ordenar alfabeticamente
    const objectLetters = Object.entries(letters)
    const sorted = objectLetters.sort((a, b) => a[0].localeCompare(b[0]));

    // Adicionar a contagem de cada letra ao objeto result
    for (const [letter, count] of sorted) {
        result[letter] = count;
    }
    return result;
}

// Exemplo de input para o desafio: 
console.log(occurrences(book));