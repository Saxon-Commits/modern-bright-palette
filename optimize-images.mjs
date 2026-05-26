import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  console.log(`Scanning ${imagesDir}...`);
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputPath = path.join(imagesDir, file);
      const outputFilename = path.basename(file, ext) + '.webp';
      const outputPath = path.join(imagesDir, outputFilename);
      
      console.log(`Optimizing ${file} -> ${outputFilename}`);
      try {
        await sharp(inputPath)
          .resize({
            width: 1920,
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        const originalStats = fs.statSync(inputPath);
        const newStats = fs.statSync(outputPath);
        
        console.log(`  Reduced size: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB -> ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
      } catch (err) {
        console.error(`  Error processing ${file}:`, err);
      }
    }
  }
  console.log('Done optimizing images!');
}

optimizeImages();
