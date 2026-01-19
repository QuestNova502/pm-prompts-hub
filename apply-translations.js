#!/usr/bin/env node

/**
 * Apply translated Chinese content to prompts-data.js
 * Reads translations from prompt-translations-zh/ directory
 */

const fs = require('fs');
const path = require('path');

const PROMPTS_DATA_FILE = './prompts-data.js';
const TRANSLATIONS_DIR = './prompt-translations-zh';
const OUTPUT_FILE = './prompts-data.js';

console.log('📂 Loading prompts data...');
const dataContent = fs.readFileSync(PROMPTS_DATA_FILE, 'utf-8');

// Extract PROMPTS_DATA and CATEGORY_NAMES from the JS file
const promptsMatch = dataContent.match(/window\.PROMPTS_DATA\s*=\s*(\[[\s\S]*?\]);/);
const categoryMatch = dataContent.match(/window\.CATEGORY_NAMES\s*=\s*(\{[\s\S]*?\});/);

if (!promptsMatch || !categoryMatch) {
    console.error('❌ Failed to parse prompts-data.js');
    process.exit(1);
}

const prompts = JSON.parse(promptsMatch[1]);
const categoryNames = JSON.parse(categoryMatch[1]);
console.log(`📊 Found ${prompts.length} prompts\n`);

let translatedCount = 0;
let skippedCount = 0;

prompts.forEach(prompt => {
    const translationFile = path.join(TRANSLATIONS_DIR, `${prompt.id}.md`);

    if (fs.existsSync(translationFile)) {
        const translatedContent = fs.readFileSync(translationFile, 'utf-8');

        // Add content_zh field
        prompt.content_zh = translatedContent.trim();
        translatedCount++;
        console.log(`✅ Applied translation for: ${prompt.title_zh}`);
    } else {
        console.log(`⏭️  No translation found for: ${prompt.id}`);
        skippedCount++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`   - Translated: ${translatedCount}`);
console.log(`   - Skipped: ${skippedCount}`);

// Generate output
const output = `// PM Prompts Data - Extracted from Dean Peters' Product Manager Prompts
// Source: https://github.com/deanpeters/product-manager-prompts
// Total prompts: ${prompts.length}
// Bilingual support: English / 中文

window.PROMPTS_DATA = ${JSON.stringify(prompts, null, 4)};

window.CATEGORY_NAMES = ${JSON.stringify(categoryNames, null, 4)};
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
console.log(`\n✅ Updated ${OUTPUT_FILE}`);
console.log(`💾 File size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
