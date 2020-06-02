module.exports = {
	entry: [
		path.join(process.cwd(), './src/index.tsx'),
	],
	module: {
		rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
		resolve: {extensions: [ '.js', '.jsx', '.react.js', '.ts', '.tsx' ]},
	}
}