const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];

const productList = document.getElementById('product-list');
const output = document.getElementById('output');

// Visualización de productos
const displayProducts = () => {
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `Producto: ${product.name}, Categoría: ${product.category}, Precio: $${product.price}, Stock: ${product.stock}`;
        productList.appendChild(productItem);
    });
};

displayProducts();

// Calcular el Precio Total
document.getElementById('total-price-btn').addEventListener('click', () => {
    const totalPrice = products.reduce((total, product) => total + product.price, 0);
    output.innerHTML = `Precio Total: $${totalPrice}`;
});

// Filtrar Productos por Categoría
document.getElementById('filter-category-btn').addEventListener('click', () => {
    const electronics = products.filter(product => product.category === 'Electronics');
    output.innerHTML = 'Electronics: ' + electronics.map(product => product.name).join(', ');
});

document.getElementById('filter-category-btn2').addEventListener('click', () => {
    const electronics = products.filter(product => product.category === 'Clothing');
    output.innerHTML = 'Clothing: ' + electronics.map(product => product.name).join(', ');
});

document.getElementById('filter-category-btn3').addEventListener('click', () => {
    const electronics = products.filter(product => product.category === 'Accessories');
    output.innerHTML = 'Accessories: ' + electronics.map(product => product.name).join(', ');
});

// Buscar un Producto por Nombre
document.getElementById('find-product-btn').addEventListener('click', () => {
    const productName = document.getElementById('product-name-input').value.trim();
    const foundProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    output.innerHTML = foundProduct ? `Producto encontrado: ${foundProduct.name}, Precio: $${foundProduct.price}, Categoría: ${foundProduct.category}, Stock: ${foundProduct.stock}` : 'Producto no encontrado';
});

// Verificar Disponibilidad de Productos
document.getElementById('availability-btn').addEventListener('click', () => {
    const allProductsAvailable = products.every(product => product.stock > 0);
    output.innerHTML = `Todos los productos están disponibles: ${allProductsAvailable}`;
});

// Obtener Nombres de Productos
document.getElementById('product-names-btn').addEventListener('click', () => {
    const productNames = products.map(product => product.name).join(', ');
    output.innerHTML = `Nombres de productos: ${productNames}`;
});