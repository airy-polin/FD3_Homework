interface IStorageEngine {
	addItem(item: Product): void;
	getItem(id: number): Product; // id === index
	getCount(): number;
}

class Product {
	constructor(private name: string, private weight: number) {
		this.name = name;
		this.weight = weight;
	}

	getScale(): number {
		return this.weight;
	}

	getName(): string {
		return this.name;
	}
}

class ScalesStorageEngineArray implements IStorageEngine {
	private storage: Array<Product>;

	constructor() {
		this.storage = [];
	}

	addItem(item: Product): void {
		this.storage.push(item);
	}

	getItem(id: number): Product {
		return this.storage[id];
	}

	getCount() {
		return this.storage.length;
	}
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
	private storage: Storage;

	constructor() {
		this.storage = window.localStorage;
		this.storage.clear();
	}

	addItem(item: Product): void {
		this.storage.setItem(String(this.getCount()), JSON.stringify(item));
	}

	getItem(id: number): Product {
		let product = JSON.parse(this.storage.getItem(String(id)));
		return new Product(product.name, Number(product.weight));
	}

	getCount(): number {
		return this.storage.length;
	}
}

class Scales<StorageEngine extends IStorageEngine> {
	products: StorageEngine;

	constructor(storageEngine: StorageEngine) {
		this.products = storageEngine;
	}

	addProduct(item: Product): void {
		this.products.addItem(item);
	}

	getSumScale(): number {
		let totalSum: number = 0;

		for (let i: number = 0; i < this.products.getCount(); i++) {
			let currentProduct: Product = this.products.getItem(i);
			totalSum += currentProduct.getScale();
		}

		return totalSum;
	}

	getProductsList(): Array<string> {
		const productsList: Array<string> = [];

		for (let i: number = 0; i < this.products.getCount(); i++) {
			let currentProduct: Product = this.products.getItem(i);
			productsList.push(currentProduct.getName());
		}

		return productsList;
	}
}


// variables created
let scalesStorageEngineArr = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray);
let scalesStorageEngineLS = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage);

let product1 = new Product('product1', 7.7),
	product2 = new Product('product2', 19),
	product3 = new Product('product3', 14.5),
	product4 = new Product('product4', 22),
	product5 = new Product('product5', 13),
	product6 = new Product('product6', 1.2);


// tests conducted // scalesStorageEngineArr
scalesStorageEngineArr.addProduct(product1);
scalesStorageEngineArr.addProduct(product3);
scalesStorageEngineArr.addProduct(product5);

console.log(`total weight equals to: ${scalesStorageEngineArr.getSumScale()} kilos`, '<<scalesStorageEngineArr call>>');
console.log(`products on the scales: ${scalesStorageEngineArr.getProductsList()}`, '<<scalesStorageEngineArr call>>');

// tests conducted // scalesStorageEngineLS
scalesStorageEngineLS.addProduct(product2);
scalesStorageEngineLS.addProduct(product4);
scalesStorageEngineLS.addProduct(product6);

console.log(`total weight equals to: ${scalesStorageEngineLS.getSumScale()} kilos`, '<<scalesStorageEngineLS call>>');
console.log(`products on the scales: ${scalesStorageEngineLS.getProductsList()}`, '<<scalesStorageEngineLS call>>');