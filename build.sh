# Clean up previous build files
rm -rf build
rm -rf dist

# Define commands
NGCC="node node_modules/.bin/ngcc"
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler to generate build directory
$NGCC -p es2015
$NGC -p src/tsconfig.es5.json

# Run rollup to generate dist directory
$ROLLUP build/index.js -o dist/index.js

# Copy all files from build to dist, except for JavaScript files
rsync -a --exclude=*.js build/ dist

# Copy package.json to dist
cp src/package.json dist/package.json

# Clean up build directory
rm -rf build
