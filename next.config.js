const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        additionalData: "@use '@/app/styles/variables.module.scss' as *;",
      },
}

module.exports = nextConfig
