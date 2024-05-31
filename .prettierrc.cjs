/** @type {import("prettier").Config} */
const config = {
    // Круглые скобки для аргументов функций с одним параметром (x) => {}
    arrowParens: "always",
    tabWidth: 2,
    useTabs: false,
    printWidth: 120,
    bracketSameLine: false,
    // ; в конце выражений
    semi: true,
    // В многострочных синтаксических конструкциях, разделенных запятыми, везде, где это возможно, добавлять завершающие запятые.
    // ['', '', '',] - только если этот массив на несколько строк
    trailingComma: "all",
    // true -  { foo: bar } false - {foo: bar}.
    bracketSpacing: false,
    endOfLine: "lf",
    // один атрибут в строке JSX
    singleAttributePerLine: false,
};

module.exports = config;
