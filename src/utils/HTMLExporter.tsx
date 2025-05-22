
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { getStaticHTML } from './exportToStaticHTML';

const HTMLExporter = () => {
  const [exportStatus, setExportStatus] = useState<{[key: string]: string}>({});
  
  const pages = [
    'Home',
    'Login',
    'Signup',
    'HomeLoggedIn',
    'FriendlyChat',
    'FormalChat'
  ];
  
  const exportPage = (pageName: string) => {
    try {
      const html = getStaticHTML(pageName);
      
      // Create a blob with the HTML content
      const blob = new Blob([html], { type: 'text/html' });
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${pageName.toLowerCase()}.html`;
      
      // Trigger the download
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setExportStatus(prev => ({
        ...prev,
        [pageName]: 'Exported successfully'
      }));
      
      setTimeout(() => {
        setExportStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[pageName];
          return newStatus;
        });
      }, 3000);
      
    } catch (error) {
      console.error(`Error exporting ${pageName}:`, error);
      setExportStatus(prev => ({
        ...prev,
        [pageName]: 'Error during export'
      }));
    }
  };
  
  const exportAllPages = () => {
    pages.forEach(page => exportPage(page));
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">HTML Exporter</h1>
      <p className="mb-4">Export pages as static HTML files with embedded CSS:</p>
      
      <div className="grid gap-4 mb-6">
        {pages.map(page => (
          <div key={page} className="flex items-center gap-4">
            <Button onClick={() => exportPage(page)}>
              Export {page}
            </Button>
            {exportStatus[page] && (
              <span className={exportStatus[page].includes('Error') ? 'text-red-500' : 'text-green-500'}>
                {exportStatus[page]}
              </span>
            )}
          </div>
        ))}
      </div>
      
      <Button variant="outline" onClick={exportAllPages} className="mt-4">
        Export All Pages
      </Button>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Click on the button for the page you want to export</li>
          <li>The browser will automatically download the HTML file</li>
          <li>Each file includes the HTML structure and embedded CSS</li>
          <li>Note: Interactive features won't work in the exported files</li>
        </ol>
      </div>
    </div>
  );
};

export default HTMLExporter;
