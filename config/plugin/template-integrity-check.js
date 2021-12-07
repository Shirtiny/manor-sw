/*
 * @Author: Shirtiny
 * @Date: 2021-12-07 22:10:10
 * @LastEditTime: 2021-12-07 23:33:24
 * @Description
 */
const fs = require("fs");
const chalk = require("chalk");

module.exports = (options) => {
  const { input, output, checksumPlaceholder, packageVersionPlaceholder } =
    options;
  return {
    name: "template-integrity-check",
    setup(build) {
      if (!fs.existsSync(input)) {
        this.error(`Failed to locate the Service Worker file at: ${input}`);
      }
      console.log("Signing the Service Worker at:\n%s", chalk.cyan(input));

      // 还是改成读取全部的.template文件吧

      build.onStart(() => {
        console.log("build started");
      });

      build.onLoad({ filter: /\.template\.js$/ }, async ({ path }) => {
        const source = await fs.promises.readFile(path, "utf8");
        console.log("template 内容：\n", source);
      });
    },
  };
};
