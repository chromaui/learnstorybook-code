const path = require("path")
    // Export a function. Accept the base config as the only param.
module.exports = async({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    /**
     * Using .less files with (Vue &) Storybook
     * https://notestack.io/public/using-less-files-with-vue--storybook-/ad341f84-1e60-4c3d-9588-ebd3286e3551
     */
    config.module.rules.push({
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        include: path.resolve(__dirname, "../")
    })

    config.resolve.alias["@"] = path.resolve(__dirname, "../src")
        // Return the altered config
    return config
}