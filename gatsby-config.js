module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "cjk7aYsDCHPn7iFiqfcdMr",
        token: "8KSEmtLmEE1FXVDNbVuHfFy2CDRggrr37PaeLFVDf5fFNVp0JXTSL2oisq6OfGx9m7K2dT3OV4d24JLsZg",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
