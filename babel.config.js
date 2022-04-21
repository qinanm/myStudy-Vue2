module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset', ["@babel/preset-env", { "modules": false }] // 注意这里
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}