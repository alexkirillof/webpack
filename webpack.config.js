const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {                  
    entry: './src/js/main.js',         
    output: {
        filename: 'main.[contenthash].js',
    },
    
    module:{
        rules:[
            {
                test:/\.(gif|jpg|png|mp3|aac|ogg)$/i,
                use:['file-loader'],
            },
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.scss$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            
        ]
    },
    
    plugins: 
    [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'server',
    generateStatsFile: true,
    statsOptions: { source: false }
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "src/img",
            to: "img/[name].[ext]",
            toType: "template",
          },
          {
            from: "src/sound",
            to: "sound/[name].[ext]",
            toType: "template",
          },
          {
            from: "src/video",
            to: "video/[name].[ext]",
            toType: "template",
          },
        ],
      })
]
};

