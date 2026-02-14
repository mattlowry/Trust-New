
import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src/data/blog');

// Helper to read and crudely parse the TS files since we can't easily compile them in this env
// We'll use regex to extract the objects export
const parseFile = (filename) => {
    const content = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

    // Regex to find objects with slug, title, category, heroImage
    // This is a heuristic parser, assuming standard formatting
    const posts = [];
    const postRegex = /{\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?category:\s*'([^']+)',[\s\S]*?heroImage:\s*'([^']*)'/g;

    let match;
    while ((match = postRegex.exec(content)) !== null) {
        posts.push({
            slug: match[1],
            title: match[2],
            category: match[3],
            currentImage: match[4],
            file: filename
        });
    }
    return posts;
};

const main = () => {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts' && f !== 'authors.ts');

    let allPosts = [];

    files.forEach(file => {
        try {
            const posts = parseFile(file);
            allPosts = [...allPosts, ...posts];
        } catch (e) {
            console.error(`Error parsing ${file}:`, e);
        }
    });

    console.log(JSON.stringify(allPosts, null, 2));
    console.log(`Total posts found: ${allPosts.length}`);
};

main();
