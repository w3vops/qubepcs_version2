module.exports = {
    siteMetadata: {
        title: `Qube PCS`,
        description: `QUBE PCS are an internationally experienced professional services company that support global organisations that wish to invest in, own and operate assets.`,
        author: `@wevops`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Teko\:300,400,500,600,700`,
                    `Athiti\:200,300,400,500,600,700`,
                    `Nunito sans\:200,300,400,600,700,800,900,200i,300i,400i,600i,700i,800i,900i`
                ],
                display: 'swap'
            }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Qubepcs`,
                short_name: `Qubepcs`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
