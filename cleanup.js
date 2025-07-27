// cleanup.js
const fs = require("fs");
const path = require("path");

const rootDir = "C:/Dev/builder-portfolio-said-s";
const unwantedExtensions = [".DS_Store", "Thumbs.db", ".log", ".bak", ".tmp", ".ini"];

function cleanup(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      cleanup(fullPath);
    } else {
      const ext = path.extname(item);
      if (unwantedExtensions.includes(ext)) {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Supprimé : ${fullPath}`);
      }
    }
  });
}

console.log("🚧 Nettoyage en cours...");
cleanup(rootDir);
console.log("✅ Fichiers inutiles supprimés !");
// move-project.js