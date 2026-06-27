import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'dist', 'assets');
const targetDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Get all WhatsApp files
const files = fs.readdirSync(sourceDir)
  .filter(file => file.startsWith('WhatsApp'))
  .sort(); // sort to keep consistent order

console.log(`Found ${files.length} WhatsApp files in dist/assets`);

const mapping = [];

files.forEach((file, index) => {
  const ext = path.extname(file); // should be .jpeg or .jpg
  const newName = `gallery-${index + 1}${ext}`;
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, newName);
  
  fs.copyFileSync(sourcePath, targetPath);
  mapping.push({ original: file, clean: newName });
});

console.log('Copy completed!');
console.log('Mapping:');
console.log(JSON.stringify(mapping, null, 2));

// Save mapping to a file for reference
fs.writeFileSync(path.join(__dirname, 'scratch_image_mapping.json'), JSON.stringify(mapping, null, 2));
