const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
