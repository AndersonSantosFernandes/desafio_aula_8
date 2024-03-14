
const executar = () => {

    seleciona = false

    while (seleciona != true) {

        const tipoDeTemperatura = parseInt(prompt("Digite '1' para converter °C para F ou '2' para o inverso "))

        if (tipoDeTemperatura == 2) {
            valorDaTemperatura = parseInt(prompt("Digite o valor em Fahrenheit para converter em Graus Celcius "))

        } else if (tipoDeTemperatura == 1) {
            valorDaTemperatura = parseInt(prompt("Digite o valor em Graus Celcius para converter em Fahrenheit "))

        } else {
            alert("Escolha inválida, digite apenas 1 ou 2")
        }

        class Temperatura {

            constructor(valorTemperatura, tipoTemp) {
                this.valorTemperatura = valorTemperatura
                this.tipoTemp = tipoTemp
            }

            calcular = () => {
                if (this.tipoTemp == 1) {
                    let retornandof = (this.valorTemperatura * 9 / 5) + 32
                    alert(` ${this.valorTemperatura} graus celcius equivalem a ${retornandof.toFixed(1)} fahrenheit `)
                } else if (this.tipoTemp == 2) {
                    let retornandoC = (this.valorTemperatura - 32) * 5 / 9
                    alert(` ${this.valorTemperatura} fahrenheit equivalem a ${retornandoC.toFixed(1)} graus celcius `)
                }
            }

        }

        const convertendo = new Temperatura(valorDaTemperatura, tipoDeTemperatura)

        convertendo.calcular()

        let sair = parseInt(prompt("Digite '0' para encerrar ou Enter para nova conversão"))

        if (sair == 0) {
            seleciona = true
        }
    }

}
const executar2 = () => {

    let promptNome = prompt("Digite seu nome para ecolher um veículo")
    let promptMarca = prompt("Digite a marca")
    let promptModelo = prompt("Digite a modelo")
    let promptCor = prompt("Digite a cor")

        class Carros {

            constructor(seuNome, marca, modelo, cor) {
                this.seuNome = seuNome
                this.marca = marca
                this.modelo = modelo
                this.cor = cor
            }

            retornaAoUsuario = () => {
                alert(`Muito bem ${this.seuNome}, você escolheu o carro da marca ${this.marca}, modelo ${this.modelo} na cor ${this.cor}`)
            }

        }

        const carro = new Carros(promptNome, promptMarca, promptModelo, promptCor)
       
        carro.retornaAoUsuario()

}