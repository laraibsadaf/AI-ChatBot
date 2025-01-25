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

INSERT INTO Suppliers (Name, ContactInfo, ProductCategories)
VALUES
('Tech World', 'techworld@example.com', 'Laptops, Tablets, Accessories'),
('Gadget Hub', 'gadgets@example.com', 'Mobiles, Wearables, Accessories'),
('Home Essentials', 'homeessentials@example.com', 'Home Appliances, Kitchen Tools'),
('Game Arena', 'gamearena@example.com', 'Gaming Consoles, Accessories, Games'),
('Office Supplies', 'office@example.com', 'Stationery, Furniture, Office Equipment');

INSERT INTO Products (Name, Brand, Price, Category, Description, SupplierID)
VALUES
('Ultra Laptop', 'Brand Z', 1200.99, 'Laptops', 'A sleek, high-performance laptop.', 1),
('Budget Tablet', 'Brand X', 299.99, 'Tablets', 'An affordable tablet for everyday use.', 1),
('Smartphone A12', 'Brand W', 499.99, 'Mobiles', 'A budget-friendly smartphone with great features.', 2),
('Smartwatch Pro', 'Brand V', 199.99, 'Wearables', 'A smartwatch with advanced health tracking.', 2),
('Blender 3000', 'Brand K', 89.99, 'Home Appliances', 'A powerful blender for your kitchen.', 3),
('Microwave Oven X', 'Brand Y', 150.99, 'Home Appliances', 'Compact microwave oven with multiple settings.', 3),
('Gaming Console X', 'Brand T', 499.99, 'Gaming Consoles', 'Next-gen gaming console for enthusiasts.', 4),
('Ergonomic Chair', 'Brand U', 219.99, 'Office Equipment', 'Comfortable ergonomic chair for long hours.', 5),
('Standing Desk', 'Brand U', 350.00, 'Office Equipment', 'Adjustable height desk for office use.', 5),
('Noise-Canceling Headphones', 'Brand Q', 149.99, 'Accessories', 'High-quality headphones with active noise canceling.', 1),
('Wireless Keyboard', 'Brand P', 79.99, 'Accessories', 'Compact wireless keyboard for laptops and desktops.', 1),
('Dishwasher 500', 'Brand L', 550.00, 'Home Appliances', 'Energy-efficient dishwasher for large households.', 3),
('Gaming Mouse', 'Brand T', 49.99, 'Accessories', 'Precision gaming mouse with customizable buttons.', 4);
