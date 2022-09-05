/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    "BASE_URL": "http://localhost:3000/",
    "MONGODB_URL": "mongodb+srv://bbrowm:ASDzxc@150@cluster0.aaovqfg.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
