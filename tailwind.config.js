
const colors = require('tailwindcss/colors')
module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
    ],

    theme: {
        extend: {
            colors: {
                "teal": colors.teal
            }
        }
    },
    variants: {
        extend: {
            display: ['group-hover'],
        }
    }
}