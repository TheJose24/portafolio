module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de errores
        'docs', // Cambios en la documentación
        'style', // Cambios en el estilo (formateo, espacios, etc)
        'refactor', // Refactorización del código
        'perf', // Mejoras de rendimiento
        'test', // Añadir o modificar pruebas
        'build', // Cambios en el sistema de construcción
        'ci', // Cambios en integración continua
        'chore', // Tareas de mantenimiento
        'revert', // Revertir cambios
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always'],
  },
};