const add = (a, b) => { 
    let added = a + b
    return added
}
const multiply = (x, y) => {
    let multiplied = x * y
    return multiplied
 }

 const internal = function(){
    const addition = add(this.internal.a, this.internal.b)
    const multiplication = multiply(addition, this.internal.c)
    console.log(multiplication)
 }


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()