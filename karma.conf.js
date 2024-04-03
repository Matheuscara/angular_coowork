// karma.conf.js
module.exports = function (config) {
  config.set({
    // other configuration settings
    browsers: ["ChromeHeadlessCustom"],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-gpu",
          "--enable-logging",
          "--no-default-browser-check",
          "--disable-translate",
          "--disable-extensions",
          "--remote-debugging-port=9222",
        ],
      },
    },
    // rest of the configuration
  });
};
