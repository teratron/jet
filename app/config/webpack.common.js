'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge')
const common = require('../../config/webpack.common')
const paths = require('../../config/paths')

module.exports = props => merge(
    common(props),
    {
        entry: {
            main: paths.app + '/index.js'
        },
        module: {
            rules: [
                {
                    test: /\.(hbs|handlebars)$/i,
                    exclude: /node_modules/,
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            paths.app + '/templates/helpers'
                        ],
                        partialDirs: [
                            paths.app + '/templates',
                            paths.app + '/templates/partials',
                            paths.app + '/templates/pages'
                        ]
                    }
                },
                {
                    test: /\.(svg|gif|png|jpe?g)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/media/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/fonts/[name].[hash][ext]'
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.public,
                        globOptions: {
                            ignore: [
                                '**/*.DS_Store',
                                '**/*.html'
                            ]
                        },
                        noErrorOnMissing: true
                    }
                ]
            }),
            ...require('fs')
                .readdirSync(paths.app + '/templates/pages')
                .filter(fileName => fileName.endsWith('.js'))
                .map(page => new HtmlWebpackPlugin({
                    template: paths.app + `/templates/pages/${page}`,
                    filename: page.replace(/.js/gi, '.html'),
                    inject: 'body',
                    minify: true
                }))
        ],
        resolve: {
            modules: [paths.src, paths.app, 'node_modules'],
            extensions: ['.js', '.hbs', '.scss', '.css']
        }
    }
)
