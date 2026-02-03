/**
 * Navigation Configuration
 * Centralized navigation structure for index.html
 */

export const navigationConfig = {
  spanish: [
    {
      category: 'Conceptos Fundamentales',
      href: 'spanish/tipado.html',
      title: 'El Problema del Tipado',
      desc: 'Cómo TypeScript previene errores mediante tipado estático.',
      icon: 'fa-shield-halved',
      tone: 'blue'
    },
    {
      category: 'Conceptos Fundamentales',
      href: 'spanish/interfaces.html',
      title: 'Interfaces: El Contrato',
      desc: 'Define formas de objetos y valida su estructura.',
      icon: 'fa-file-contract',
      tone: 'green'
    },
    {
      category: 'Conceptos Fundamentales',
      href: 'spanish/tipos-union.html',
      title: 'Tipos de Unión',
      desc: 'Maneja valores que pueden tener múltiples tipos.',
      icon: 'fa-layer-group',
      tone: 'purple'
    },
    {
      category: 'Conceptos Fundamentales',
      href: 'spanish/enums.html',
      title: 'Enums: Valores Fijos',
      desc: 'Crea conjuntos de constantes con nombre.',
      icon: 'fa-list-ol',
      tone: 'amber'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/inferir-tipos.html',
      title: 'Inferir Tipos',
      desc: 'Deja que TypeScript deduzca tipos automáticamente.',
      icon: 'fa-lightbulb',
      tone: 'yellow'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/strings.html',
      title: 'Strings',
      desc: 'Trabaja con cadenas y templates de forma segura.',
      icon: 'fa-quote-left',
      tone: 'pink'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/tipo-any.html',
      title: 'Tipo any',
      desc: 'Cuándo y cómo evitar el tipo any.',
      icon: 'fa-exclamation-triangle',
      tone: 'red'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/arrays.html',
      title: 'Arreglos',
      desc: 'Define arreglos tipados y operaciones comunes.',
      icon: 'fa-list',
      tone: 'cyan'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/tuples.html',
      title: 'Tuplas',
      desc: 'Colecciones con longitudes y tipos fijos.',
      icon: 'fa-layer-group',
      tone: 'purple'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/tipo-void.html',
      title: 'Tipo void',
      desc: 'Funciones que no retornan valor.',
      icon: 'fa-ban',
      tone: 'slate'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/null-undefined.html',
      title: 'Null & Undefined',
      desc: 'Manejo seguro de valores faltantes.',
      icon: 'fa-question',
      tone: 'orange'
    },
    {
      category: 'Tipos Básicos',
      href: 'spanish/tipos-basicos/tipo-never.html',
      title: 'Tipo never',
      desc: 'Funciones que no terminan o lanzan errores.',
      icon: 'fa-infinity',
      tone: 'neutral'
    }
  ],

  english: [
    {
      category: 'Core Concepts',
      href: 'english/typing.html',
      title: 'The Typing Problem',
      desc: 'See how TypeScript catches runtime bugs early.',
      icon: 'fa-shield-halved',
      tone: 'blue'
    },
    {
      category: 'Core Concepts',
      href: 'english/interfaces.html',
      title: 'Interfaces',
      desc: 'Shape your objects and keep contracts explicit.',
      icon: 'fa-file-contract',
      tone: 'green'
    },
    {
      category: 'Basics',
      href: 'english/basics/type-inference.html',
      title: 'Type Inference',
      desc: 'Let TS infer types while staying safe.',
      icon: 'fa-lightbulb',
      tone: 'yellow'
    },
    {
      category: 'Basics',
      href: 'english/basics/strings.html',
      title: 'Strings',
      desc: 'Template strings, literals, and safety tips.',
      icon: 'fa-quote-left',
      tone: 'pink'
    },
    {
      category: 'Basics',
      href: 'english/basics/type-any.html',
      title: 'Type any',
      desc: 'When any is dangerous and safer alternatives.',
      icon: 'fa-exclamation-triangle',
      tone: 'red'
    },
    {
      category: 'Basics',
      href: 'english/basics/arrays.html',
      title: 'Arrays',
      desc: 'Typed arrays and handy helpers.',
      icon: 'fa-list',
      tone: 'cyan'
    },
    {
      category: 'Basics',
      href: 'english/basics/tuples.html',
      title: 'Tuples',
      desc: 'Fixed-length, typed collections.',
      icon: 'fa-layer-group',
      tone: 'purple'
    },
    {
      category: 'Basics',
      href: 'english/basics/type-void.html',
      title: 'Type void',
      desc: 'Functions that intentionally return nothing.',
      icon: 'fa-ban',
      tone: 'slate'
    },
    {
      category: 'Basics',
      href: 'english/basics/null-undefined.html',
      title: 'Null & Undefined',
      desc: 'Handle absent values with confidence.',
      icon: 'fa-question',
      tone: 'orange'
    },
    {
      category: 'Basics',
      href: 'english/basics/type-never.html',
      title: 'Type never',
      desc: 'Functions that never complete.',
      icon: 'fa-infinity',
      tone: 'neutral'
    }
  ],

  toneMap: {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    amber: 'bg-amber-100 text-amber-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    pink: 'bg-pink-100 text-pink-700',
    red: 'bg-red-100 text-red-700',
    cyan: 'bg-cyan-100 text-cyan-700',
    slate: 'bg-slate-100 text-slate-700',
    neutral: 'bg-gray-100 text-gray-700',
    orange: 'bg-orange-100 text-orange-700'
  }
};
