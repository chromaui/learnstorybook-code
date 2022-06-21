module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest-config/setup.ts"],
  globalSetup: "jest-preset-angular/global-setup",
};
