#!/usr/bin/env bash
# Install the Dart Sass binary that Hugo uses to compile the SCSS.
# Keep DART_SASS_VERSION in sync with .github/workflows/build-production-site.yml.
set -euo pipefail

DART_SASS_VERSION=1.105.1

case "$(uname -m)" in
  x86_64) arch=x64 ;;
  aarch64 | arm64) arch=arm64 ;;
  *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
esac

url="https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-${arch}.tar.gz"
curl -fsSL "$url" | sudo tar -xz -C /usr/local/lib
sudo ln -sf /usr/local/lib/dart-sass/sass /usr/local/bin/sass
sass --version
