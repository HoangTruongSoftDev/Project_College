const fs = require('fs'); // File system module is still CommonJS

const filePath = 'detectLanguage';

fs.readFile(filePath, 'utf8', async (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const text = data.toString();

    try {
        const { franc } = await import('franc'); // Dynamic import for franc
        const language = franc(text);
        console.log('Detected language:', language);
    } catch (err) {
        console.error('Error loading franc:', err);
    }
})