## Stryker

https://stryker-mutator.io/

Stryker -> Introducir mutaciones (controladas) -> Espera que el test falle (los mutantes mueran)

Un test falla -> un mutante muere (significa que las pruebas son robustas)
A medida que más mutantes sobreviven -> El coverage es más bajo

¿Que son Vitest / Jest / etc? Test runners
    - Encontrar tests
    - Ejecuta
    - Verifica si fallan las pruebas -> medir coverage (istanbul - codev8)

Instalación de stryker: 

yarn add -D @stryker-mutator/core @stryker-mutator/vitest-runner
npm init stryker
  - None/other
  - vitest
  - formato de salida
