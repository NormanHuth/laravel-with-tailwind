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
    variants: {},
    plugins: [],
}
