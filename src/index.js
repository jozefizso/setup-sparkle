const path = require('node:path')
const core = require('@actions/core')
const tc = require('@actions/tool-cache')

const SPARKLE_CACHE_NAME = 'sparkle-framework-tools';

async function run() {
  try {
    let version = core.getInput('version');
    console.log(`Sparkle framework version ${version}`);

    let toolPath = tc.find(SPARKLE_CACHE_NAME, version);

    if (!toolPath) {
      let url = `https://github.com/sparkle-project/Sparkle/releases/download/${version}/Sparkle-for-Swift-Package-Manager.zip`;

      console.log('Downloading Sparkle framework', url);
      let downloadPath = await tc.downloadTool(url);

      console.log('Extracting Sparkle framework tools', downloadPath);
      let extPath = await tc.extractZip(downloadPath);

      console.log('Caching Sparkle framework tools');
      let cachedDir = await tc.cacheDir(extPath, SPARKLE_CACHE_NAME, version);
      toolPath = cachedDir;
    } else {
      console.log('Using cached Sparkle framework tools');
    }

    const toolsBinPath = path.join(toolPath, 'bin');
    core.exportVariable('SPARKLE_BIN', toolsBinPath);
    core.addPath(toolsBinPath);

    console.log('Successfully installed Sparkle framework', version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
