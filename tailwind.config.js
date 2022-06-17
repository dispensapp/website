const plugin = require('tailwindcss/plugin');


module.exports = {
        content: ["./src/**/*.{html,js}", "index.html"],
        theme: {
            extend: {
                fontSize: {
                    '10xl': '8rem',
                },
                colors: {
                    'primary-yellow': '#FFEAC2',
                    'secondary-yellow': '#FFF6E5',
                    'primary-blue': '#003049'
                }
            },
        },
        plugins: [
                plugin(function({ addVariant, e, postcss }) {
                        addVariant('firefox', ({ container, separator }) => {
                                    const isFirefoxRule = postcss.atRule({
                                        name: '-moz-document',
                                        params: 'url-prefix()',
                                    });
                                    isFirefoxRule.append(container.nodes);
                                    container.append(isFirefoxRule);
                                    isFirefoxRule.walkRules((rule) => {
                                                rule.selector = `.${e(
                  `firefox${separator}${rule.selector.slice(1)}`
                )}`;
              });
            });
          }),
    ],
}