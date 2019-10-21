const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
     // style: 'css', // 自动打包组件对应css
     style: true, // 加载less编译
  }),
  addLessLoader({
    // 添加less-loader对应的配置  ==> 修改primary对应的颜色
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
);