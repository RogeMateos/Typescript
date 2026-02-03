#!/bin/bash

##############################################
# Script de Migración Automática
# Reemplaza el JavaScript inline por módulos
##############################################

echo "🚀 Iniciando migración a arquitectura modular..."
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de archivos procesados
count=0

# Script JS inline a remover (patrón común)
OLD_SCRIPT_PATTERN='<script>[[:space:]]*function toggleSidebar'
NEW_SCRIPT='<script type="module" src="../../js/main.js"></script>'

# Función para procesar un archivo
process_file() {
    local file=$1
    local relative_path=$2

    echo -e "${BLUE}📄 Procesando:${NC} $file"

    # Backup del archivo original
    cp "$file" "$file.backup"

    # Calcular la ruta correcta al main.js
    local depth=$(echo "$relative_path" | tr -cd '/' | wc -c)
    local js_path=""
    for ((i=0; i<depth; i++)); do
        js_path="../$js_path"
    done
    js_path="${js_path}js/main.js"

    # Crear script tag con ruta correcta
    local script_tag="<script type=\"module\" src=\"${js_path}\"></script>"

    # Remover el bloque de script viejo y añadir el nuevo
    # Esto asume que el script está al final antes de </body>
    sed -i '' '/<script>/,/<\/script>/d' "$file"
    sed -i '' "s|</body>|    ${script_tag}\n</body>|" "$file"

    echo -e "${GREEN}✅ Migrado${NC}"
    ((count++))
}

# Procesar archivos españoles en tipos-basicos
echo -e "${YELLOW}=== Procesando archivos Españoles ===${NC}"
for file in spanish/tipos-basicos/*.html; do
    if [ -f "$file" ]; then
        process_file "$file" "spanish/tipos-basicos"
    fi
done

# Procesar archivos españoles en raíz
for file in spanish/*.html; do
    if [ -f "$file" ]; then
        process_file "$file" "spanish"
    fi
done

echo ""
echo -e "${YELLOW}=== Procesando archivos Ingleses ===${NC}"
# Procesar archivos ingleses en basics
for file in english/basics/*.html; do
    if [ -f "$file" ]; then
        process_file "$file" "english/basics"
    fi
done

# Procesar archivos ingleses en raíz
for file in english/*.html; do
    if [ -f "$file" ]; then
        process_file "$file" "english"
    fi
done

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ ¡Migración completada!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}📊 Resumen:${NC}"
echo -e "   • Archivos procesados: ${GREEN}$count${NC}"
echo -e "   • Backups creados: ${YELLOW}$count${NC} (*.backup)"
echo ""
echo -e "${YELLOW}⚠️  Importante:${NC}"
echo "   1. Prueba los archivos en el navegador"
echo "   2. Si algo sale mal, restaura desde .backup"
echo "   3. Comando para restaurar: mv file.backup file"
echo ""
echo -e "${BLUE}🎯 Próximos pasos:${NC}"
echo "   1. Abre cualquier página HTML en el navegador"
echo "   2. Verifica que el sidebar funciona"
echo "   3. Verifica que los tabs de código funcionan"
echo "   4. Si todo está bien, elimina los .backup"
echo ""
echo -e "${GREEN}¡Arquitectura modular lista! 🚀${NC}"
