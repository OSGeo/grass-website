# Screenshots

To take screenshots of the site. Install node.js and puppeteer.

If you don't have node.js installed, I recommend using [nvm](https://github.com/nvm-sh/nvm) to install it. You can install nvm with the following command:

> I've only tested this with node v22.14.0 and npm v10.9.2

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```

After installing nvm, you can install node.js with the following command:

```bash
nvm use  # uses node version from .nvmrc
```

Once you have node installed, you can install puppeteer and other dependencies with the following commands:

```bash
npm install
```

Run hugo server to start the site:

```bash
hugo server
```

To take a screenshot of the site, run the following command:

```bash
npm run screenshots
```

The screenshots will be saved in the `screenshots/images`.

![Screenshot of the GRASS GIS website
](images/index.png)
