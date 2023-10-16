function somaArray(arr)  {
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma;
}


function maiorNumero(arr) {
    let maiorNumeroAtual = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maiorNumeroAtual) {
            maiorNumeroAtual = arr[i]
        }
    }
    return maiorNumeroAtual;
}


function mediaArray(arr) {
    let somaDosNumeros = 0
    
    for (i = 0; i < arr.length ;i++) {
        somaDosNumeros += arr[i]
    }
    
    const media = somaDosNumeros / arr.length
    return media;
}


function contarPropriedades(obj) {
    const numPropriedades = Object.keys(obj).length
    return numPropriedades;
}
    

function juntarObjetos(obj1, obj2) {
    const novoObjeto = { ...obj1, ...obj2}   
    
    return novoObjeto;
}


function encontrarPropriedade(obj, propriedade) {
    const valor = obj[propriedade];
    return valor
}


const delayedPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolvida");
    }, 1000);
});

    
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro na solicitação HTTP: " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}


function gerarNumeroAleatorio() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.random();
            resolve(numeroAleatorio);
        }, 2000);
    });
}


function executarAposTempo(funcao, tempo) {
    setTimeout(() => {
        funcao();
    }, tempo);
}


function cancelarExecucao(timeout) {
    clearTimeout(timeout);
}


function intervaloPersonalizado(funcao, intervalo) {
    return setInterval(funcao, intervalo);
}


let intervalo; 
function contadorInterval() {
    let contador = 1;
    
    intervalo = setInterval(() => {
        console.log(contador);
        contador++;
    }, 1000); 
}


function pararContador() {
    clearInterval(intervalo);
    console.log("Contador interrompido.");
}
setTimeout(pararContador, 10000);


function gerarNumerosAleatorios() {
    const intervalo = setInterval(() => {
        const numeroAleatorio = Math.random();
        console.log(numeroAleatorio);
    }, 500);
}


function primeiroEUltimo(arr) {
    if (arr.length < 2) {
        throw new Error("Tue é doido menó tem que ter pelo menos dois elementos");
    }

    const [primeiro, ...res] = arr;
    const ultimo = res.pop();

    return [primeiro, ultimo];
}


function extrairInfo(arrDeObj) {
    const idades = arrDeObj.map(({ idade }) => idade);
    return idades;
}

function separarArrays(arrDeNum) {
    const pares = [];
    const impares = [];

    for (const numero of arrDeNum) {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }
    return [pares, impares];
}


function infoPessoa({nome, idade, cidade}) {
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

function desestruturarUsuario({id, email}) {
    return {
        id,
        email
    };
}


function informacoesLivro({titulo, autor, ano}) {
    return `O livro ${titulo} foi escrito por ${autor} em ${ano}`;
}


function concatenarArrays(...arrays) {
    return [...arrays.flat()];
}


function mesclarObjetos(...objetos) {
    return objetos.reduce((resultado, objeto) => ({ ...resultado, ...objeto }), {});
}