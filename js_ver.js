// Obtendo o botão e o parágrafo através do DOM
const button = document.getElementById('actionButton');
const message = document.getElementById('message');

// Adicionando um evento de clique ao botão
button.addEventListener('click', executeLogic);

// Função que implementa a lógica de programação avançada
function executeLogic() {
    // Operações Matemáticas: utilizando operadores básicos
    let x = 8; // Variável declarada com "let" tem escopo de bloco
    const y = 4; // Variável declarada com "const" tem valor constante (não pode ser reassinada)
    var z = 15; // Variável declarada com "var" tem escopo de função ou global
    
    let addition = x + y; // Soma
    let subtraction = x - y; // Subtração
    let multiplication = x * y; // Multiplicação
    let division = x / y; // Divisão
    let exponentiation = x ** y; // Exponenciação

    // Operações de Atribuição: modificando e atribuindo novos valores às variáveis
    x += 2; // Equivalente a x = x + 2
    z *= 3; // Equivalente a z = z * 3

    // Laços de Repetição: for loop para iterar através de uma série de números
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i; // Somando os números de 1 a 5
    }

    // Arrays 2D e 3D: criando e manipulando arrays multidimensionais
    let array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    // Acessando elementos em um array 2D
    let element2D = array2D[1][2]; // Acessa o elemento da segunda linha, terceira coluna (valor 6)

    let array3D = [
        [
            [1, 2], [3, 4]
        ],
        [
            [5, 6], [7, 8]
        ]
    ];

    // Acessando elementos em um array 3D
    let element3D = array3D[1][0][1]; // Acessa o elemento no segundo grupo, primeira submatriz, segundo elemento (valor 6)

    // Exibindo os resultados na página
    message.innerHTML = `
        <strong>Operações Matemáticas:</strong><br>
        Soma: ${addition} <br>
        Subtração: ${subtraction} <br>
        Multiplicação: ${multiplication} <br>
        Divisão: ${division} <br>
        Exponenciação: ${exponentiation} <br><br>
        
        <strong>Operações de Atribuição:</strong><br>
        Novo valor de x após x += 2: ${x} <br>
        Novo valor de z após z *= 3: ${z} <br><br>
        
        <strong>Laço de Repetição (Soma de 1 a 5):</strong> <br>
        Soma total: ${sum} <br><br>

        <strong>Arrays 2D:</strong><br>
        Elemento na posição [1][2] do array 2D: ${element2D} <br><br>

        <strong>Arrays 3D:</strong><br>
        Elemento na posição [1][0][1] do array 3D: ${element3D} <br><br>
        
        <strong>Diferença entre var, let e const:</strong><br>
        <strong>var:</strong> Declarada com escopo de função ou global, pode ser redeclarada e reassinada.<br>
        <strong>let:</strong> Declarada com escopo de bloco, pode ser reassinada, mas não redeclarada no mesmo escopo.<br>
        <strong>const:</strong> Declarada com escopo de bloco, não pode ser reassinada ou redeclarada.
    `;
}
