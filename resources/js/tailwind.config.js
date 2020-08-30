module.exports = {
    purge: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.php',
        './resources/**/*.vue',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        extend: {},
    },
    variants: {
        translate: ['responsive', 'hover', 'focus', 'motion-reduce'],
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        cursor: ['responsive', 'hover', 'focus', 'disabled'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
    // module: {
    //   rules: [
    //     {
    //       use: [
    //         {
    //           loader: 'postcss-loader',
    //           options: {
    //             ident: 'postcss',
    //             plugins: [
    //               require('tailwindcss'),
    //               require('autoprefixer'),
    //             ],
    //           },
    //         }
    //       ]
    //     }
    //   ]
    // }
}
