var Apple = /** @class */ (function () {
    function Apple(name, weight) {
        this.name = name;
        this.weight = weight;
        this.name = name;
        this.weight = weight;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, weight) {
        this.name = name;
        this.weight = weight;
        this.name = name;
        this.weight = weight;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var totalSum = 0;
        for (var i = 0; i < this.products.length; i++) {
            var currentProduct = this.products[i];
            totalSum += currentProduct.getScale();
        }
        return totalSum;
    };
    Scales.prototype.getProductsList = function () {
        var productsList = [];
        for (var i = 0; i < this.products.length; i++) {
            var currentProduct = this.products[i];
            productsList.push(currentProduct.getName());
        }
        return productsList;
    };
    return Scales;
}());
// variables created
var scales = new Scales;
var apple1 = new Apple('Macoun', 7.7), apple2 = new Apple('Pixie Crunch', 19), apple3 = new Apple('Winter Wonder', 14.5);
var tomato1 = new Tomato('Granadero', 22), tomato2 = new Tomato('Orange Hat', 13), tomato3 = new Tomato('Tiny Tim', 1.2);
// tests conducted
scales.addProduct(apple1);
scales.addProduct(apple2);
scales.addProduct(apple3);
console.log("products on the scales: " + scales.getProductsList() + ",\ntotal weight equals to: " + scales.getSumScale() + " kilos");
scales.products = [];
scales.addProduct(tomato1);
scales.addProduct(tomato2);
scales.addProduct(tomato3);
console.log("products on the scales: " + scales.getProductsList() + ",\ntotal weight equals to: " + scales.getSumScale() + " kilos");
scales.products = [];
