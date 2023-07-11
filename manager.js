class ProductManager {
    constructor() {
        this.products = [];
    }
    //agregar productos
    addProduct(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.error(`El producto con el codigo '${code}' ya existe.`);
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Todos los campos son obligatorios.');
            return;
        }
        // Creo el producto
        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: null
        };
        //ID producto
        product.id = this.generateProductId();
        this.products.push(product);
        console.log(`Producto agregado: ${product.title}`);
    }
    //Generar ID´s +1
    generateProductId() {
        return this.products.length + 1;
    }
    //Productos 
    getProducts() {
        return this.products;
    }
    //Productos por ID
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no existente.");
        }
    }
}

//class
const manager = new ProductManager();

//muestro array vacio
console.log("Productos iniciales:", manager.getProducts());

//agrego productos
manager.addProduct('producto 1', 'Desc prod1', 100, 'nada', 'prod1', 10);
manager.addProduct('producto 2', 'Desc prod2', 200, 'nada', 'prod2', 20);
manager.addProduct('producto 3', 'Desc prod3', 300, 'nada', 'prod3', 30);

//prod mismo codigo
manager.addProduct('producto 3', 'Desc prod3', 300, 'nada', 'prod3', 30);

// prod por id y no existente
const productId = manager.getProductById(4);
if (productId) {
    console.log('Producto por ID:', productId);
}
//muestro todos los productos agregados
const allProducts = manager.getProducts();
console.log(allProducts);


