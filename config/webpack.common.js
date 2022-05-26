'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = (props) => {
    return {
        entry: {
            main: paths.src + '/index.js'
        },
        output: {
            path: paths.build,
            publicPath: 'auto',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    include: paths.src,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults',
                                        modules: false
                                    }
                                ]
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-object-rest-spread'
                            ]
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    include: paths.src,
                    exclude: /node_modules/,
                    use: [
                        props.styleLoader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        'autoprefixer',
                                        'postcss-preset-env'
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
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
                    /*{
                        from: `${PATHS.src}/${PATHS.assets}img`,
                        to: `${PATHS.assets}img`
                    },
                    {
                        from: `${PATHS.src}/${PATHS.assets}fonts`,
                        to: `${PATHS.assets}fonts`
                    },
                    {
                        from: `${PATHS.src}/static`,
                        to: ''
                    },*/
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
            new HtmlWebpackPlugin({
                title: 'Bookings',
                template: paths.public + '/template.html',
                filename: 'index.html',
                inject: true,
                minify: false
            }),
            new HtmlWebpackPlugin({
                title: 'Bookings2',
                template: paths.public + '/template.html',
                filename: 'app.html',
                inject: true
            })
            /*...require('fs')
                .readdirSync(paths.src)
                .filter(fileName => fileName.endsWith('.html'))
                .map(page => new HtmlWebpackPlugin({
                        template: paths.src + `/${page}`,
                        filename: `./${page}`
                    })
                )*/
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        resolve: {
            modules: [paths.src, 'node_modules'],
            extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'],
            alias: {
                '~': paths.src,
                '@': paths.src + 'js',
                jet$: 'jet.js'
            }
        }
    }
}

