# Secure Login System

A secure login system using PHP, HTML, JavaScript, and MySQL.

## Features
- Session-based authentication
- Password hashing with `password_hash`
- JavaScript input validation
- SQL Injection protection (PDO)
- Secure cookies (HttpOnly + SameSite)

## Setup
1. Install XAMPP and start Apache + MySQL
2. Create MySQL database `login_system`
3. Run this SQL to create `users` table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

4. Go to: `http://localhost/secure-login-system/create_user.php` to add a test user
5. Login at: `http://localhost/secure-login-system/index.html`
   - Username: `admin`
   - Password: `password123`

## Author
Abdulgafur Aden
