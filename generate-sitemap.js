// generate-sitemap.js
import fs from 'fs'; // Node.js のファイルシステムモジュール

const siteUrl = "https://yona.rest"; // あなたのサイトのURL

// サイト内のページリスト (手動で管理するか、将来的に動的に取得)
const pages = [
    '/',
    // '/about', // 他のページがあれば追加
    // '/contact',
];

// sitemap.xml の内容を生成
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
        <url>
            <loc>${siteUrl}${page}</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> 
            <changefreq>weekly</changefreq>
            <priority>${page === '/' ? '1.0' : '0.8'}</priority>
        </url>
    `).join('')}
</urlset>`;

// static ディレクトリに sitemap.xml を書き出す
fs.writeFileSync('static/sitemap.xml', sitemap);

console.log('sitemap.xml generated successfully!');