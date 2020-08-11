const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// scssに関するルールを削除
const defaultRules = defaultConfig.module.rules;
defaultRules.pop();

// console.log( defaultRules );

module.exports = {
	...defaultConfig, //@wordpress/scriptを引き継ぐ

	mode: 'production', // npm start でも圧縮させる
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.scss/,
				use: [
					// linkタグに出力する機能
					'style-loader',

					// CSSをバンドルする
					{
						// CSSをバンドルするための機能
						loader: 'css-loader',
						options: {
							url: false, // CSS内のurl()メソッドの取り込みを禁止する
							importLoaders: 2, //sass-loaderの読み込みに必要 ?
							// sourceMap: false, // ソースマップの利用有無
						},
					},

					// SASS を CSS に
					{
						loader: 'sass-loader',
						// options: {
						// 	// ソースマップの利用有無
						// 	// sourceMap: false,
						// },
					},
				],
			},
		],
	},
};
