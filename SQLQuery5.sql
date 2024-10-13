CREATE TABLE order_items (
    order_item_id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price_at_time DECIMAL(10, 2) NOT NULL,   -- Price of the product at the time of the order
    CONSTRAINT FK_OrderItemOrder FOREIGN KEY (order_id) REFERENCES orders(order_id),
    CONSTRAINT FK_OrderItemProduct FOREIGN KEY (product_id) REFERENCES products(product_id)
);
