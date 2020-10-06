module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/bbva-hackaton/" : "/",
  outputDir: "docs",
  "transpileDependencies": [
    "vuetify"
  ]
}