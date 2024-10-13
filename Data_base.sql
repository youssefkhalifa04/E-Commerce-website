CREATE TABLE reviews (
    review_id INT IDENTITY(1,1) PRIMARY KEY,
    customer_id INT,
    product_id INT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    review_text NVARCHAR(MAX),
    review_date DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_ReviewCustomer FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    CONSTRAINT FK_ReviewProduct FOREIGN KEY (product_id) REFERENCES products(product_id)
);
