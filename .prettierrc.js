module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: true,
  importOrder: [
    // Place angular import at the top
    '^@angular$',
    'rxjs',
    // External dependencies
    '^w',
    // This project's own aliases
    '^(@shared|@core|@env|@test-utilities)(/.*|$)',
    // This project's extra libraries
    '^(business-logic|@ui)(/.*|$)',
    // Every import starting with ./ or ~/
    '^[./|~/]'
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['decorators-legacy', 'typescript']
};
