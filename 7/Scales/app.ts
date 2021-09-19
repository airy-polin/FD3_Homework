class Product {
	name: string;
	weight: number;

	constructor(name: string, weight: number) {
		this.name = name;
		this.weight = weight;
	};

	getScale(): number {
		return this.weight;
	};

	getName(): string {
		return this.name;
	};
};

class Apple extends Product {
	constructor(name: string, weight: number) {
		super(name, weight);
	};
};

class Tomato extends Product {
	constructor(name: string, weight: number) {
		super(name, weight);
	};
};

class Scales {
	products: Array<Product>;

	constructor() {
		this.products = [];
	};

	addProduct(product: Product): void {
		this.products.push(product);
	}

	getSumScale(): number {
		let totalSum = 0;

		for (let i = 0; i < this.products.length; i++) {
			let currentProduct = this.products[i];
			totalSum += currentProduct.getScale();
		}

		return totalSum;
	}

	getProductsList(): string {
		const productsList: Array<string> = [];

		for (let i = 0; i < this.products.length; i++) {
			let currentProduct = this.products[i];
			productsList.push(currentProduct.getName());
		}

		return productsList.join(', ');
	}
};


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
total weigth equals to: ${scales.getSumScale()} kilos`);
scales.products = [];

scales.addProduct(tomato1);
scales.addProduct(tomato2);
scales.addProduct(tomato3);
console.log(`products on the scales: ${scales.getProductsList()},
total weigth equals to: ${scales.getSumScale()} kilos`);
scales.products = [];