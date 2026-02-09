#!/bin/bash

# Update English files
for file in english/basics/*.html english/functions/*.html; do
  if grep -q "ts-vs-js.html" "$file"; then
    echo "Already updated: $file"
  else
    # Add TS vs JS link after Union Types in English files
    sed -i '' '/<a href="\.\.\/core-concepts\/union-types\.html"/,/<\/li>/a\
                            <li>\
                                <a href="../core-concepts/ts-vs-js.html" class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">\
                                    <i class="fa-solid fa-code-compare w-5"></i>\
                                    <span>TS vs JS</span>\
                                </a>\
                            </li>' "$file"
    echo "Updated: $file"
  fi
done

# Update Spanish files
for file in spanish/tipos-basicos/*.html spanish/funciones/*.html; do
  if grep -q "ts-vs-js.html" "$file"; then
    echo "Already updated: $file"
  else
    # Add TS vs JS link after Tipos Union in Spanish files
    sed -i '' '/<a href="\.\.\/conceptos-fundamentales\/tipos-union\.html"/,/<\/li>/a\
                            <li>\
                                <a href="../conceptos-fundamentales/ts-vs-js.html" class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">\
                                    <i class="fa-solid fa-code-compare w-5"></i>\
                                    <span>TS vs JS</span>\
                                </a>\
                            </li>' "$file"
    echo "Updated: $file"
  fi
done
