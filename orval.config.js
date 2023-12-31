module.exports = {
    swagger: {
       input: './schema.yaml',
        output: {
            target: './src/client',
            client: 'swr',
            mock: true,
            mode: 'split',
        }
    },
  };