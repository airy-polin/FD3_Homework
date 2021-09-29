var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
        this.name = name;
        this.weight = weight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.storage.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (id) {
        return this.storage[id];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.storage = window.localStorage;
        this.storage.clear(); //
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.storage.setItem(String(this.getCount()), JSON.stringify(item));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (id) {
        var product = JSON.parse(this.storage.getItem(String(id)));
        return new Product(product.name, Number(product.weight));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(storageEngine) {
        this.products = storageEngine;
    }
    Scales.prototype.addProduct = function (item) {
        this.products.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var totalSum = 0;
        for (var i = 0; i < this.products.getCount(); i++) {
            var currentProduct = this.products.getItem(i);
            totalSum += currentProduct.getScale();
        }
        return totalSum;
    };
    Scales.prototype.getProductsList = function () {
        var productsList = [];
        for (var i = 0; i < this.products.getCount(); i++) {
            var currentProduct = this.products.getItem(i);
            productsList.push(currentProduct.getName());
        }
        return productsList;
    };
    return Scales;
}());
// variables created
var scalesStorageEngineArr = new Scales(new ScalesStorageEngineArray);
var scalesStorageEngineLS = new Scales(new ScalesStorageEngineLocalStorage);
var product1 = new Product('product1', 7.7), product2 = new Product('product2', 19), product3 = new Product('product3', 14.5), product4 = new Product('product4', 22), product5 = new Product('product5', 13), product6 = new Product('product6', 1.2);
// tests conducted // scalesStorageEngineArr
scalesStorageEngineArr.addProduct(product1);
scalesStorageEngineArr.addProduct(product3);
scalesStorageEngineArr.addProduct(product5);
console.log("total weight equals to: " + scalesStorageEngineArr.getSumScale() + " kilos", '<<scalesStorageEngineArr call>>');
console.log("products on the scales: " + scalesStorageEngineArr.getProductsList(), '<<scalesStorageEngineArr call>>');
// tests conducted // scalesStorageEngineLS
scalesStorageEngineLS.addProduct(product2);
scalesStorageEngineLS.addProduct(product4);
scalesStorageEngineLS.addProduct(product6);
console.log("total weight equals to: " + scalesStorageEngineLS.getSumScale() + " kilos", '<<scalesStorageEngineLS call>>');
console.log("products on the scales: " + scalesStorageEngineLS.getProductsList(), '<<scalesStorageEngineLS call>>');
