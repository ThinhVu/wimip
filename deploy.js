require('dotenv').config()
const child_process = require('child_process');
const packageJson = require('./package.json');

const DOCKER_REGISTRY = process.env.DOCKER_REGISTRY;
const {name, version} = packageJson;
const imageTag = `${DOCKER_REGISTRY}/${name}:${version}.${Date.now()}`

const cmds = [
  `docker build -t ${imageTag} .`,
  `docker push ${imageTag}`
]

console.log(`Deploying ${imageTag}`);
const process = child_process.exec(cmds.join(' && '));
process.stdout.on('data', console.log)
process.stderr.on('data', console.log)
process.on('exit', (code, signal) => {
  console.log('on exit', code, signal)
  console.log(imageTag)
})
