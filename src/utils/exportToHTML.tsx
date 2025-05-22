
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';
import fs from 'fs';
import path from 'path';

// This is a utility function that would be run in Node.js environment
// to generate static HTML files from our React components

export const exportToHTML = async () => {
  // Define the pages to render
  const pages = [
    { path: '/', fileName: 'home.html' },
    { path: '/login', fileName: 'login.html' },
    { path: '/signup', fileName: 'signup.html' },
    { path: '/home-logged-in', fileName: 'home-logged-in.html' },
    { path: '/friendly-chat', fileName: 'friendly-chat.html' },
    { path: '/formal-chat', fileName: 'formal-chat.html' },
  ];

  // Function to render a page
  const renderPage = (url: string) => {
    const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );

    // Get CSS from the application
    const cssLinks = `
      <style>
        /* Include Tailwind styles */
        ${fs.readFileSync(path.resolve(__dirname, '../index.css'), 'utf8')}
      </style>
    `;

    // Create a complete HTML document
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mate-life-guide</title>
        <meta name="description" content="Exported from Lovable Project" />
        ${cssLinks}
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
      </html>
    `;

    return html;
  };

  // Export each page
  pages.forEach((page) => {
    try {
      const html = renderPage(page.path);
      const outputDir = path.resolve(__dirname, '../../html-export');
      
      // Create output directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Write the file
      fs.writeFileSync(
        path.resolve(outputDir, page.fileName),
        html,
        'utf8'
      );
      
      console.log(`Exported ${page.fileName}`);
    } catch (error) {
      console.error(`Error exporting ${page.fileName}:`, error);
    }
  });
};

// Note: This function is meant to be run in a Node.js environment,
// not directly in the browser. You would need to set up a build script
// that uses this function.
