import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all .jpg with .avif
let newContent = content.replace(/\.jpg/g, '.avif');

// Revert tushar-rai's cover.avif and bike.avif back to .jpg since user wants to exclude Tushar from changes
newContent = newContent.replace('coverPhoto: "/members/tushar-rai/cover.avif"', 'coverPhoto: "/members/tushar-rai/cover.jpg"');
newContent = newContent.replace('bikePhoto: "/members/tushar-rai/bike.avif"', 'bikePhoto: "/members/tushar-rai/bike.jpg"');

fs.writeFileSync(filePath, newContent);
console.log('Update successful');
