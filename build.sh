#!/bin/bash

NODE_ENV=production ./node_modules/.bin/webpack

BUILD_DIR=build/

rm -rf ${BUILD_DIR}
cp -r src/ ${BUILD_DIR}
mv bundle.js ${BUILD_DIR}
cp google*.html ${BUILD_DIR}

