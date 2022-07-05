module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/PUBLIC_PATH/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}
