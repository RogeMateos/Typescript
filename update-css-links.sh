#!/bin/bash

# Script para reemplazar estilos inline con link a CSS compartido
# Reemplaza:
#   <style>...</style>
# Por:
#   <link rel="stylesheet" href="../../css/styles.css" />

echo "🎨 Actualizando referencias CSS en todos los archivos HTML..."

# Encuentra todos los archivos HTML y actualiza las rutas
find /Users/rogemateos/Documentos/GithubProjects/HtmlTutorales/Typescript -name "*.html" -type f ! -path "*/\.git/*" -print0 | while IFS= read -r -d '' file; do
  # Verifica si el archivo contiene el bloque <style> con animate-in
  if grep -q "\.animate-in" "$file"; then
    echo "Procesando: $file"

    # Reemplaza el bloque <style>...</style> con el link al CSS
    sed -i '' '/<style>/,/<\/style>/c\
    <link rel="stylesheet" href="../../css/styles.css" />
' "$file"
  fi
done

echo "✅ ¡Actualización completada!"
echo "📊 Total de archivos con animate-in encontrados: $(grep -r "\.animate-in" /Users/rogemateos/Documentos/GithubProjects/HtmlTutorales/Typescript --include="*.html" 2>/dev/null | wc -l) referencias"
