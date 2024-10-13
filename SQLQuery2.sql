CREATE TABLE orders (
    order_id INT IDENTITY(1,1) PRIMARY KEY,
    customer_id INT,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATETIME DEFAULT GETDATE(),
    status NVARCHAR(50) NOT NULL,
    CONSTRAINT FK_CustomerOrder FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
