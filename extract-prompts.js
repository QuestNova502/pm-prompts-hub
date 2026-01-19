#!/usr/bin/env node

/**
 * Extract and convert Product Manager Prompts from markdown files
 * Source: ~/.claude/skills/product-manager-prompts/prompts/
 */

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(process.env.HOME, '.claude/skills/product-manager-prompts/prompts');
const OUTPUT_FILE = './prompts-data.js';

// Category mapping based on file names
const categoryMap = {
    'user-story': 'agile',
    'backlog': 'agile',
    'scrum': 'agile',
    'retrospective': 'agile',

    'customer-journey': 'research',
    'persona': 'research',
    'jobs-to-be-done': 'research',
    'proto-persona': 'research',

    'positioning': 'strategy',
    'vision': 'strategy',
    'roadmap': 'strategy',
    'okr': 'strategy',
    'prd': 'strategy',

    'competitive': 'analysis',
    'market': 'analysis',

    'story': 'storytelling',
    'press-release': 'storytelling',

    // Default to other
};

function categorizePrompt(filename) {
    const lower = filename.toLowerCase();
    for (const [keyword, category] of Object.entries(categoryMap)) {
        if (lower.includes(keyword)) {
            return category;
        }
    }
    return 'other';
}

function extractTitle(filename) {
    return filename
        .replace('.md', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

function extractDescription(content) {
    // Try to find description in comments or first paragraph
    const lines = content.split('\n');
    for (let i = 0; i < Math.min(20, lines.length); i++) {
        const line = lines[i].trim();
        if (line.startsWith('##') && line.toLowerCase().includes('description')) {
            // Next non-empty line is likely the description
            for (let j = i + 1; j < lines.length; j++) {
                const desc = lines[j].trim();
                if (desc && !desc.startsWith('#') && !desc.startsWith('<!--')) {
                    return desc.substring(0, 200);
                }
            }
        }
    }
    // Fallback: first substantial paragraph
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.length > 50 && !trimmed.startsWith('#') && !trimmed.startsWith('<!--')) {
            return trimmed.substring(0, 200);
        }
    }
    return 'Product management prompt template';
}

function generateTags(filename, content) {
    const tags = [];
    const lower = filename.toLowerCase() + ' ' + content.toLowerCase();

    const tagMap = {
        'user story': ['User Story', 'Agile'],
        'jobs': ['JTBD', '用户需求'],
        'persona': ['用户画像', 'Persona'],
        'okr': ['OKR', '目标设定'],
        'prd': ['PRD', '需求文档'],
        'positioning': ['产品定位', '策略'],
        'roadmap': ['路线图', '规划'],
        'competitive': ['竞品分析', '市场'],
    };

    for (const [keyword, tagList] of Object.entries(tagMap)) {
        if (lower.includes(keyword)) {
            tags.push(...tagList);
        }
    }

    return tags.length > 0 ? tags.slice(0, 4) : ['产品管理', 'PM Tools'];
}

function processPrompts() {
    const files = fs.readdirSync(SOURCE_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md' && !f.includes('howto'));

    const prompts = [];

    files.forEach((file, index) => {
        const filePath = path.join(SOURCE_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        const id = file.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
        const title = extractTitle(file);
        const category = categorizePrompt(file);
        const description = extractDescription(content);
        const tags = generateTags(file, content);

        prompts.push({
            id,
            title,
            category,
            description,
            usage: '参考模板说明，根据您的产品场景调整使用。',
            tags,
            content: content.trim()
        });
    });

    return prompts;
}

function generateOutput(prompts) {
    const output = `// PM Prompts Data - Extracted from Dean Peters' Product Manager Prompts
// Source: https://github.com/deanpeters/product-manager-prompts
// Total prompts: ${prompts.length}

window.PROMPTS_DATA = ${JSON.stringify(prompts, null, 4)};
`;

    fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
    console.log(`✅ Generated ${OUTPUT_FILE} with ${prompts.length} prompts`);
}

// Main execution
try {
    console.log('📂 Reading prompts from:', SOURCE_DIR);
    const prompts = processPrompts();
    console.log(`📊 Processed ${prompts.length} prompts`);
    generateOutput(prompts);
    console.log('🎉 Done!');
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
