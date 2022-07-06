'use strict'

const paths = require('./paths')

module.exports = props => {
    return {
        module: {
            rules: [
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: 'defaults'
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
                    test: /\.(sa|sc|c)ss$/i,
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
                                        //'postcss-preset-env'
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        resolve: {
            modules: [paths.src, 'node_modules'],
            extensions: ['.js', '.scss', '.css'],
            alias: {
                '~': paths.src,
                '@': paths.src + '/js',
                '#': paths.src + '/scss',
                jettix$: paths.src + '/js/jettix.js',
                jettix_scss$: paths.src + '/scss/jettix.scss'
            }
        }
    }
}
