CREATE TABLE cart (
    cart_id INT IDENTITY(1,1) PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT NOT NULL,
    CONSTRAINT FK_CartCustomer FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    CONSTRAINT FK_CartProduct FOREIGN KEY (product_id) REFERENCES products(product_id)
);
