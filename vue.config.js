module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
      args[0].title = 'Portfolio de Damien MICHEL';	
      return args;
    });
  }
};