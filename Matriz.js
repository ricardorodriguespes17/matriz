class Matriz{
    
    constructor(rows, columns){
        this.rows = rows
		this.columns = columns
		this.data = []

		for (let i = 0; i < rows; i++) {
			let array = []
			for (let i = 0; i <	columns; i++) {
				array.push(0)
			}
			this.data.push(array)
		}
    }

    //Process

    inversion(){

    }

    transposition(){

    }
    
    cofactors(){

    }

    adjunct(){

    }

    //Verifications

    isReversible(){

    }

    isSquare(){

    }

}