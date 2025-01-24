CREATE TABLE Suppliers (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Contact_Info TEXT NOT NULL,
    Product_Categories_Offered TEXT
);

CREATE TABLE Products (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Brand VARCHAR(50),
    Price DECIMAL(10, 2),
    Category VARCHAR(50),
    Description TEXT,
    Supplier_ID INT,
    FOREIGN KEY (Supplier_ID) REFERENCES Suppliers(ID)
);

-- Insert sample data
INSERT INTO Suppliers (Name, Contact_Info, Product_Categories_Offered)
VALUES
('TechWorld Inc.', 'techworld@example.com', 'Electronics, Laptops'),
('HomeGoods Ltd.', 'homegoods@example.com', 'Furniture, Decor'),
('GadgetHub', 'gadgethub@example.com', 'Smartphones, Gadgets');

INSERT INTO Products (Name, Brand, Price, Category, Description, Supplier_ID)
VALUES
('Smartphone XYZ', 'GadgetBrand', 699.99, 'Electronics', 'Latest model with 5G support', 3),
('Office Chair', 'ErgoComfort', 120.50, 'Furniture', 'Ergonomic office chair', 2),
('Gaming Laptop', 'TechPro', 1499.00, 'Laptops', 'High-performance gaming laptop', 1);
