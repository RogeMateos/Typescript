# 📚 TypeScript Tutorial - JavaScript Architecture

## 🏗️ Arquitectura Modular

Esta es una arquitectura profesional y escalable basada en **Separation of Concerns** y **Single Responsibility Principle**.

---

## 📁 Estructura de Carpetas

```
js/
├── config/
│   └── navigation-config.js       # Configuración centralizada de navegación
├── components/
│   ├── sidebar.js                 # Lógica del sidebar (toggle, sections)
│   ├── code-tabs.js               # Tabs de código y respuestas
│   └── language-switcher.js       # (Futuro) Cambio de idioma
├── utils/
│   ├── dom-utils.js               # Utilidades DOM reutilizables
│   └── highlight-init.js          # Inicialización de highlight.js
└── main.js                        # Punto de entrada principal
```

---

## 🎯 Principios de Diseño

### 1. **Separation of Concerns**
Cada módulo tiene una responsabilidad única y bien definida.

### 2. **DRY (Don't Repeat Yourself)**
El código duplicado se ha eliminado completamente.

### 3. **Modularidad**
Cada componente es independiente y puede probarse por separado.

### 4. **Escalabilidad**
Fácil añadir nuevos componentes sin tocar el código existente.

### 5. **Mantenibilidad**
Los cambios se hacen en un solo lugar y se reflejan en toda la app.

---

## 📦 Módulos Explicados

### `config/navigation-config.js`
**Propósito:** Configuración centralizada de toda la navegación.

**Ventajas:**
- ✅ Un solo lugar para actualizar enlaces
- ✅ Fácil añadir nuevas páginas
- ✅ Reutilizable en index.html y otras páginas

**Uso:**
```javascript
import { navigationConfig } from './config/navigation-config.js';

const spanishLessons = navigationConfig.spanish;
const englishLessons = navigationConfig.english;
```

---

### `components/sidebar.js`
**Propósito:** Manejo del sidebar (toggle mobile, expansión de secciones).

**Funciones:**
- `toggle()` - Abre/cierra el sidebar en móvil
- `toggleSection(sectionId)` - Expande/colapsa secciones

**Ejemplo:**
```html
<button onclick="toggleSidebar()">Toggle</button>
<button onclick="toggleSection('tipos-basicos')">Tipos Básicos</button>
```

---

### `components/code-tabs.js`
**Propósito:** Manejo de tabs de código y respuestas de entrevista.

**Funciones:**
- `showCode(type)` - Cambia entre código original y resultado
- `toggleAnswer()` - Muestra/oculta respuestas

**Ejemplo:**
```html
<button onclick="showCode('original')">Original</button>
<button onclick="showCode('result')">Result</button>
<button onclick="toggleAnswer()">Ver Respuesta</button>
```

---

### `utils/dom-utils.js`
**Propósito:** Utilidades reutilizables para manipulación del DOM.

**API:**
```javascript
DOMUtils.getElement(id)              // Get element by ID
DOMUtils.toggleClass(el, class)      // Toggle class
DOMUtils.addClass(el, ...classes)    // Add classes
DOMUtils.removeClass(el, ...classes) // Remove classes
DOMUtils.hasClass(el, class)         // Check if has class
```

**Ventaja:** Abstrae la lógica del DOM y maneja errores automáticamente.

---

### `utils/highlight-init.js`
**Propósito:** Inicialización segura de highlight.js.

**Ventaja:** Maneja el caso donde highlight.js no esté cargado.

---

### `main.js`
**Propósito:** Punto de entrada que inicializa toda la aplicación.

**Flujo:**
1. Importa todos los componentes
2. Inicializa highlight.js
3. Expone funciones globales necesarias
4. Ejecuta cuando el DOM está listo

---

## 🔄 Migración - Cómo Actualizar tus Páginas

### **ANTES** (Código duplicado en cada página)
```html
<script>
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('-translate-x-full');
    }

    function toggleSection(sectionId) {
        const list = document.getElementById('list-' + sectionId);
        const icon = document.getElementById('icon-' + sectionId);
        list.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    }

    function showCode(type) {
        // 20+ líneas de código...
    }

    function toggleAnswer() {
        // ...
    }

    hljs.highlightAll();
</script>
```

### **DESPUÉS** (Una sola línea)
```html
<script type="module" src="../../js/main.js"></script>
```

---

## ✅ Beneficios de esta Arquitectura

### 🎯 **Mantenibilidad**
- Cambios en un solo lugar
- Fácil de entender y documentar
- Menos bugs por duplicación

### 🚀 **Escalabilidad**
- Añadir nuevos componentes es trivial
- Estructura clara para crecer
- Reutilización máxima

### 🧪 **Testeable**
- Cada módulo puede probarse independientemente
- Fácil mockear dependencias
- Mejor cobertura de tests

### 📦 **Performance**
- Los módulos se cachean en el navegador
- Lazy loading posible en el futuro
- Bundle size optimizable con herramientas

### 👥 **Colaboración**
- Estructura clara para equipos
- Convenciones consistentes
- Onboarding más rápido

---

## 🛠️ Próximos Pasos (Opcionales)

### 1. **Build System**
Añadir Vite o Webpack para:
- Minificación automática
- Tree shaking
- Hot Module Replacement (HMR)

### 2. **TypeScript para JS**
Convertir los módulos a TypeScript para:
- Type safety en el código JS
- Mejor IntelliSense
- Refactoring más seguro

### 3. **Testing**
Añadir Vitest o Jest:
```bash
npm install -D vitest
```

### 4. **Componentes Web**
Migrar a Web Components para mayor encapsulación:
```javascript
class TSCodeTab extends HTMLElement { ... }
```

### 5. **State Management**
Si crece más, considerar un state manager ligero.

---

## 📊 Comparación

| Aspecto | Antes | Después |
|---------|-------|---------|
| Líneas de JS por página | ~50-100 | 1 línea |
| Duplicación | Alta (100%) | Cero (0%) |
| Mantenibilidad | Baja | Alta |
| Testeable | No | Sí |
| Escalable | No | Sí |
| Performance | Igual | Igual o mejor (caché) |

---

## 🎓 Convenciones de Código

### **Nombres de Archivos**
- `kebab-case.js` para archivos
- `PascalCase` para componentes exportados
- `camelCase` para funciones y variables

### **Estructura de Módulos**
```javascript
/**
 * Module description
 */

// Imports
import { ... } from '...';

// Main export
export const Component = {
  method1() { ... },
  method2() { ... }
};

// Global scope exposure (if needed)
window.globalFunction = Component.method1;
```

### **Comentarios**
- JSDoc para funciones públicas
- Comentarios inline para lógica compleja
- README para arquitectura general

---

## 🔧 Troubleshooting

### **Error: "Failed to load module script"**
**Solución:** Asegúrate de usar `type="module"` en el script tag:
```html
<script type="module" src="../../js/main.js"></script>
```

### **Error: "Cannot use import statement outside a module"**
**Solución:** Usa rutas relativas correctas basadas en la ubicación del HTML.

### **Funciones no disponibles**
**Solución:** Verifica que las funciones estén expuestas a `window` en el módulo correspondiente.

---

## 📞 Soporte

Para preguntas o mejoras, revisa la estructura y los comentarios en el código.

**Arquitectura diseñada por:** Principios SOLID + Clean Code
**Stack:** Vanilla JavaScript + ES6 Modules
**Compatibilidad:** Navegadores modernos (ES6+)

---

## 🎉 Conclusión

Esta arquitectura convierte un proyecto con código duplicado en una aplicación modular, profesional y escalable. Es el estándar de la industria para proyectos medianos y grandes.

**¡Ahora tienes una base sólida para crecer sin límites!** 🚀
