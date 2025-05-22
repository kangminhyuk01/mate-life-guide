
import React from 'react';
import HTMLExporter from '../utils/HTMLExporter';

const ExportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <HTMLExporter />
      </div>
    </div>
  );
};

export default ExportPage;
