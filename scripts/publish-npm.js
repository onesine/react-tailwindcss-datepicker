#!/usr/bin/env node

const semver = require('semver');
const fs = require('fs');
const childProcess = require('child_process');
const process = require('process');
const path = require('path');

// Usage: node publish-npm.js [dir-with-package-json]

const run = async () => {
  const packageRelativePath = process.argv[2];
  const packagePath = path.resolve(process.cwd(), packageRelativePath);
  const packageJsonPath = path.resolve(packagePath, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
  const { name, version } = packageJson;

  // Detect if we are running this script using `yarn` or `npm`. If we try to run
  // npm publish using yarn it will fail with an obscure authentication error.
  const useYarn = process.env.npm_execpath?.includes('yarn');
  const npmCommand = useYarn ? 'yarn' : 'npm';

  let packageNotPublished = false;
  let npmVersion = '';
  try {
    console.info('Checking published version...');

    npmVersion = strip(
      childProcess.execSync(
        `${npmCommand} ${useYarn ? 'info' : 'view'} ${name} version`,
        { encoding: 'utf8' }
      )
    );

    // If the version is not published, this will throw an error.
    // This seems necessary when running yarn info but not npm view.
    if (!npmVersion) {
      packageNotPublished = true;
    }
  } catch (err) {
    // Don't error if the package isn't published.
    if (err.stderr.includes('404')) {
      packageNotPublished = true;
    } else {
      throw err;
    }
  }

  if (packageNotPublished || semver.lt(npmVersion, version)) {
    console.info('Publishing package...');

    const spawn = childProcess.spawnSync(npmCommand, ['publish'], {
      cwd: packagePath,
      detached: true,
      stdio: 'inherit',
    });

    // TODO: Checking spawn.stderr doesn't seem to work if npm publish fails.
    if (spawn.stderr) {
      throw new Error(`Failed to publish package ${name}@${version}.`);
    }

    console.info(`Successfully published package ${name}@${version}.`);
  } else {
    console.info(
      `Skipping publish, package ${name}@${version} is already published.`
    );
    console.info(`Bump the version in package.json and run again to upload.`);
  }
};

const strip = (str) => str.replace(/(\r\n|\n|\r)/gm, '');

run().catch((err) => {
  console.error(err);
  process.exit(1);
});