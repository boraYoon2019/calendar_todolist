const path = require('path');
const appIndex = path.resolve(__dirname, 'src', 'index.js'); // 번들 작업할 파일
const appSrc = path.resolve(__dirname, 'src');
const appBuild = path.resolve(__dirname, 'build');
//  __dirname : 작업 중인 파일의 위치를 파일명을 제외한 가장 가까운 directory까지 보여주는 예약어

const HtmlWebpackPlugin = require('html-webpack-plugin');
const appHtml = path.resolve(__dirname, 'public', 'index.html');
const appPublic = path.resolve(__dirname, 'public');
const webpack = require('webpack');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = (webpackEnv) => {
	// development, production 환경 별로 다른 작업을 할당하기 위해
	const isEnvDevelopment = webpackEnv === 'development';
	const isEnvProduction = webpackEnv === 'production';
	return {
		mode: webpackEnv,
		entry: appIndex,
		output: {
			path: appBuild,
			filename: isEnvProduction
				? 'static/js/[name].[hash:8].js'
				: isEnvDevelopment && 'static/js/bundle.js',
		},
		module: {
			rules: [
				{
					// webpack은 기본 설정에서 .js와 .json만 이해가 가능하므로, ES6+ 문법을 이해시키고 ES5형태로 변환시키기 위해 추가.
					test: /\.(js|mjs|jsx|ts|tsx)$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react'],
						},
					},
					include: appSrc,
				},
				{
					// 기본값이 __webpack_public_path__ + outputPath라서 특별한 경우가 아니면 outputPath만 설정해줘도 됨.
					loader: 'file-loader',
					exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
					options: {
						outputPath: 'static/media',
						name: '[name].[hash:8].[ext]',
						esModule: false,
					},
				},
				{
					// 작은 크기의 이미지, 글꼴 등은 복사하지 않고 base64 문자열 형태로 번들 결과물에 넣어주는 로더.
					test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
					loader: 'url-loader',
					options: {
						// Boolean | Number | String 를 입력 받고, 기준은 Byte임. 10000=10KB ,
						// 10KB가 넘으면 file-loader로 작동 그 이하는 base64문자열로 번들 결과물에 포함.
						limit: 10000,
						outputPath: 'static/media',
						name: '[name].[hash:8].[ext]',
					},
				},
 {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                    options: { url: false } // tell css-loader to not package images referenced in css. perhaps re-activate this for base64 injection
                    },
                ] // use
            }
      ],
		},

    resolve: {
        modules: [ 
					path.join(__dirname, "src"),
					'node_modules'
				],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },

		// public/index.html을 build/ 로 옮겨주면서 번들 결과물을 script태크로 포함시키는 플러그인
		// template 옵션을 사용하지 않으면 webpack이 자체적으로 html을 만든다.
		plugins: [
			new HtmlWebpackPlugin({ template: appHtml }),
			new webpack.HotModuleReplacementPlugin()
		],

		// localhost:3000에서, 즉 RAM에 개발 서버를 올려서 구동할 수 있도록 하는 devServer 세팅
		devServer: {
			port: 3000,
			host: "borayoon2019.bora",
			// 개발 환경에서 정적 파일을 제공하려는 경우 필요
			contentBase: appPublic,
			// 번들 작업 종료 시 자동으로 브라우저 창에 띄울지 선택
			open: true,
			// 개발 환경에서 localhost:3000/subpage 등 URL로 직접 접근하였을 경우, cannot get /subpage 대신에 index.html로 보냄
			historyApiFallback: true,
			// 컴파일러 오류 또는 경고가있을 때 브라우저에 전체 화면 오버레이를 표시
			overlay: true,
			hot: true,
		},
		devtool: isEnvProduction
			? shouldUseSourceMap
				? 'source-map'
				: false
			: isEnvDevelopment && 'cheap-module-source-map',
	};
};
