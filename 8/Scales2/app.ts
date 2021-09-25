interface IScalable {
	getScale(): number,
	getName(): string,
}

class Apple implements IScalable {
	constructor(private name: string, private weight: number) {
		this.name = name;
		this.weight = weight;
	}

	getName(): string {
		return this.name;
	}

	getScale(): number {
		return this.weight;
	}
}

class Tomato implements IScalable {
	constructor( private name: string, private weight: number) {
		this.name = name;
		this.weight = weight;
	}

	getName(): string {
		return this.name;
	}

	getScale(): number {
		return this.weight;
	}
}

class Scales {
	products: Array<IScalable>;

	constructor() {
		this.products = [];
	}

	addProduct(product: IScalable): void {
		this.products.push(product);
	}

	getSumScale(): number {
		let totalSum: number = 0;

		for (let i: number = 0; i < this.products.length; i++) {
			let currentProduct: IScalable = this.products[i];
			totalSum += currentProduct.getScale();
		}

		return totalSum;
	}

	getProductsList(): Array<string> {
		const productsList: Array<string> = [];

		for (let i: number = 0; i < this.products.length; i++) {
			let currentProduct: IScalable = this.products[i];
			productsList.push(currentProduct.getName());
		}
		
		return productsList;
	}
}


// variables created
let scales: Scales = new Scales;

let apple1: Apple = new Apple('Macoun', 7.7),
	apple2: Apple = new Apple('Pixie Crunch', 19),
	apple3: Apple = new Apple('Winter Wonder', 14.5);

let tomato1: Tomato = new Tomato('Granadero', 22),
	tomato2: Tomato = new Tomato('Orange Hat', 13),
	tomato3: Tomato = new Tomato('Tiny Tim', 1.2);

// tests conducted
scales.addProduct(apple1);
scales.addProduct(apple2);
scales.addProduct(apple3);
console.log(`products on the scales: ${scales.getProductsList()},
total weight equals to: ${scales.getSumScale()} kilos`);
scales.products = [];

scales.addProduct(tomato1);
scales.addProduct(tomato2);
scales.addProduct(tomato3);
console.log(`products on the scales: ${scales.getProductsList()},
total weight equals to: ${scales.getSumScale()} kilos`);
scales.products = [];