const path = require("path");

//🔥 1. path.join()
const result = path.join("folder", "images", "photo.png");
console.log(result);

// 🔥 2. path.resolve()
const results = path.resolve("folder", "file.txt");
console.log(results);

// 🔥 3. path.basename()
console.log(path.basename("/home/user/app/index.js"));

// 🔥 4. path.dirname()
console.log(path.dirname("/home/user/app/index.js"));

// 🔥 5. path.extname()
console.log(path.extname("style.css"));

// 🔥 6. __dirname & __filename
console.log(__dirname);   // current folder ka absolute path
console.log(__filename);  // current file ka absolute path

// 🔥 Example: Real-Life Use Case (File Ka Path Banana)
const filePath = path.join(__dirname, "public", "images", "logo.png");
console.log(filePath);

