CREATE TABLE payments (
    payment_id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT,
    payment_method NVARCHAR(50),            -- e.g., Credit Card, PayPal, etc.
    payment_date DATETIME DEFAULT GETDATE(),
    amount_paid DECIMAL(10, 2) NOT NULL,
    CONSTRAINT FK_PaymentOrder FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
