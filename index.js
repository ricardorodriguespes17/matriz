Matriz = require('./Matriz')

function start(){
    matriz = new Matriz(3, 3)
    matrizTranspost = Matriz.transposition(matriz)

    // matriz.print()
    matriz.printTable()
    matrizTranspost.printTable()
    // matriz.printLine()
}

start()