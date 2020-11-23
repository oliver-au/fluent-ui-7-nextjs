module.exports = {
	webpack: (config, options) => {
	  config.module.rules.push({
		test: /\.(eot|svg|ttf|woff|woff2)$/,
		loader: 'file-loader',
		options: {
			outputPath: 'static/fonts',
		},
      })
  
	  return config
	},
  }