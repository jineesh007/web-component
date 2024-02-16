const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/web-component/runtime.js',
            './dist/web-component/polyfills.js',
            // './dist/web-component/es2015-polyfills.js',
            // './dist/web-component/scripts.js',
            './dist/web-component/main.js'
          ];
        
          await fs.ensureDir('widget');
          await concat(files, 'widget/chatbot-widget.js');
    }
    build();