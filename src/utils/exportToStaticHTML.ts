
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import FriendlyChat from '../pages/FriendlyChat';
import FormalChat from '../pages/FormalChat';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import HomeLoggedIn from '../pages/HomeLoggedIn';

// This function can be run in the browser console to get static HTML output
export const getStaticHTML = (componentName: string) => {
  let component;
  
  // Create the component wrapped in a StaticRouter
  switch (componentName) {
    case 'FriendlyChat':
      component = (
        <StaticRouter location="/friendly-chat">
          <FriendlyChat />
        </StaticRouter>
      );
      break;
    case 'FormalChat':
      component = (
        <StaticRouter location="/formal-chat">
          <FormalChat />
        </StaticRouter>
      );
      break;
    case 'Home':
      component = (
        <StaticRouter location="/">
          <Home />
        </StaticRouter>
      );
      break;
    case 'Login':
      component = (
        <StaticRouter location="/login">
          <Login />
        </StaticRouter>
      );
      break;
    case 'Signup':
      component = (
        <StaticRouter location="/signup">
          <Signup />
        </StaticRouter>
      );
      break;
    case 'HomeLoggedIn':
      component = (
        <StaticRouter location="/home-logged-in">
          <HomeLoggedIn />
        </StaticRouter>
      );
      break;
    default:
      throw new Error(`Component ${componentName} not found`);
  }
  
  // Get the styles
  const styleSheets = document.styleSheets;
  let cssText = '';
  
  for (let i = 0; i < styleSheets.length; i++) {
    try {
      const cssRules = styleSheets[i].cssRules;
      for (let j = 0; j < cssRules.length; j++) {
        cssText += cssRules[j].cssText + '\n';
      }
    } catch (e) {
      console.log('Error accessing stylesheet', e);
    }
  }
  
  // Generate the HTML with inline styles
  const html = renderToStaticMarkup(component);
  
  // Create a full HTML document
  const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${componentName} - mate-life-guide</title>
  <style>
    ${cssText}
  </style>
</head>
<body>
  <div id="root">
    ${html}
  </div>
</body>
</html>
  `;
  
  return fullHTML;
};

// Instructions for use:
// 1. Open the browser console in the application
// 2. Run this function for each component you want to export:
//    Example: copy(getStaticHTML('FriendlyChat'))
// 3. The HTML will be copied to your clipboard
// 4. Paste it into a .html file and save it
