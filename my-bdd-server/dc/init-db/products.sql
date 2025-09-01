-- Crear la base de datos
-- CREATE DATABASE api_server;

-- Conectar a la base de datos recién creada
\c productos;

-- Crear tabla productos
CREATE TABLE productos (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL
);

-- Insertar datos de ejemplo
INSERT INTO productos (product_name, unit_price) VALUES
('Laptop Lenovo ThinkPad', 1200.50),
('Mouse Logitech MX Master 3', 99.99),
('Teclado Mecánico Keychron K2', 85.00),
('Monitor Dell 27"', 299.95),
('Auriculares Sony WH-1000XM5', 399.99);-