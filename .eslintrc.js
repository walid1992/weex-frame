module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'sourceType': 'module'
  },
  globals: {
    'Vue': false,
    'weex': false
  },
  // extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    // no-console
    'no-console': 0,
    // no-var
    'no-var': 'error',
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never'],
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    'indent': ['error', 2, {'SwitchCase': 1}],
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 0,
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // 双峰驼命名格式
    'camelcase': 2,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'comma-dangle': [2, 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [2, {'before': false, 'after': true}],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    // 圈复杂度
    'complexity': [2, 20],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // TODO 关闭 强制方法必须返回值，TypeScript强类型，不配置
    // 'consistent-return': 0
  }
}