CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
    gender ENUM('male', 'female'),
    email VARCHAR(100),
    phone_code INT,
    phone VARCHAR(20)
);
