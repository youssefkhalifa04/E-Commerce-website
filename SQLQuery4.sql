CREATE TABLE products (
    product_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,                  -- Number of products in stock
    category_id INT,
    image_url NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_ProductCategory FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
