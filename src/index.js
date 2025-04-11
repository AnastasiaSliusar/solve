

import {solve} from "@emscripten-forge/mambajs";

const envYml = `name: test-env
channels:
  - https://repo.mamba.pm/emscripten-forge
  - conda-forge
dependencies:
  - xeus-python
  - numpy
  - ipyleaflet`

const solvedPackages = await solve({ymlOrSpecs: envYml});
console.log('solved packages', solvedPackages);
 