var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    ;
    Product.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    ;
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    ;
    return Tomato;
}(Product));
;
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    ;
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
        return productsList.join(', ');
    };
    return Scales;
}());
;
// variables created
var scales = new Scales;
var apple1 = new Apple('Macoun', 7.7), apple2 = new Apple('Pixie Crunch', 19), apple3 = new Apple('Winter Wonder', 14.5);
var tomato1 = new Tomato('Granadero', 22), tomato2 = new Tomato('Orange Hat', 13), tomato3 = new Tomato('Tiny Tim', 1.2);
// tests conducted
scales.addProduct(apple1);
scales.addProduct(apple2);
scales.addProduct(apple3);
console.log("products on the scales: " + scales.getProductsList() + ",\ntotal weigth equals to: " + scales.getSumScale() + " kilos");
scales.products = [];
scales.addProduct(tomato1);
scales.addProduct(tomato2);
scales.addProduct(tomato3);
console.log("products on the scales: " + scales.getProductsList() + ",\ntotal weigth equals to: " + scales.getSumScale() + " kilos");
scales.products = [];
