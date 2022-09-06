/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    "BASE_URL": "http://localhost:3000/",
    "MONGODB_URL": "mongodb+srv://bbrowm:ZXCvbn123@cluster0.aaovqfg.mongodb.net/?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "qwe123rty",
    "REFRESH_TOKEN_SECRET": 'svsvdfbdfbebre'
  }
}

module.exports = nextConfig
