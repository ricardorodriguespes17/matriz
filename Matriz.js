module.exports = class Matriz{
    
    constructor(rows, columns){
        this.rows = rows
		this.columns = columns
		this.data = []

		for (let i = 0; i < rows; i++) {
			let array = []
			for (let j = 0; j <	columns; j++) {
				array.push(Math.floor(Math.random() * 10))
			}
			this.data.push(array)
		}
    }

    //Prints

    print(){
        console.log(this.data)
    }

    printTable(){
        console.table(this.data)
    }

    printLine(){
        var print = "["
        for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j <	this.columns; j++) {
                print += this.data[i][j]

                if(i + 1 !== this.rows || j + 1 !== this.columns){
                    print += ", "
                }
            }
        }
        print += "]"

        console.log(print)
    }

    //Process

    inversion(){

    }

    static transposition(matrizA){
        var matriz = new Matriz(matrizA.columns, matrizA.rows)

        matriz.map((element, i, j) => {
            return matrizA.data[j][i]
        })
        
        return matriz
    }
    
    cofactors(){
        
    }

    adjunct(){

    }

    //Other

    map(func){
		this.data = this.data.map((array, i) => {
			return array.map((num, j) => {
				return func(num, i, j)
			})
		})

		return this
	}

    //Verifications

    isReversible(){

    }

    isSquare(){
        return (this.rows === this.columns)
    }

}