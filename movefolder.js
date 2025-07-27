// movefolder.js
const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const sourceDir = "C:/Users/souhe/OneDrive/Documents/GitHub/builder-portfolio";
const targetDir = "C:/Dev/builder-portfolio-said-s";

const excluded = [
  "node_modules",
  "dist",
  ".next",
  ".cache",
  "package-lock.json",
  "desktop.ini",
  "tmp",
];

function shouldCopy(filePath) {
  return !excluded.some((ex) => filePath.includes(ex));
}

function copyRecursive(src, dest) {
  fse.ensureDirSync(dest);
  const items = fs.readdirSync(src);
  items.forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      if (shouldCopy(srcPath)) {
        copyRecursive(srcPath, destPath);
      }
    } else {
      if (shouldCopy(srcPath)) {
        fse.copySync(srcPath, destPath);
        console.log(`📄 Copied: ${srcPath} → ${destPath}`);
      }
    }
  });
}

// Démarrage
console.log("🔁 Migration du build vers le dossier local...");
copyRecursive(sourceDir, targetDir);
console.log("✅ Migration terminée !");
