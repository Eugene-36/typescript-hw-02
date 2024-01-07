/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
type enableDisable = 'enable' | 'disable';
let union: string | number;
let literal: enableDisable;

literal = 'enable';
