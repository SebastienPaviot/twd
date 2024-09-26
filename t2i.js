const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');

fs.readFile('./template.html', 'utf8', (err, html) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier HTML :', err);
      return;
    }
  
    // Utiliser le contenu du fichier HTML pour générer l'image
    nodeHtmlToImage({
      output: './image.png',
      html: html
    })
    .then(() => console.log('L\'image a été créée avec succès !'))
    .catch(error => console.error('Erreur lors de la création de l\'image :', error));
  });