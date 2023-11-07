import * as tsConfig from "./tsconfig.json";
import * as tsconfigPaths from "tsconfig-paths";

tsconfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,
});
