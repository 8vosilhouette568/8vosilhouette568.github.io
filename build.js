const fs = require('fs');
const path = require('path');

// Importar el plugin compilado
const plugin = require('./rncalation.js');

// Crear objeto JSON con datos del plugin
const pluginJson = {
  id: plugin.default.id,
  name: plugin.default.name,
  icon: plugin.default.icon,
  site: plugin.default.site,
  version: plugin.default.version,
  webStorageUtilized: plugin.default.webStorageUtilized,
};

const target = path.join(__dirname, 'plugin.min.json');
fs.writeFileSync(target, JSON.stringify(pluginJson, null, 2));
console.log('✅ Archivo plugin.min.json generado correctamente');
