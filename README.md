
# Minformhf

## Website template starter with markdown and contact forms

Adds usable contact/subscription/unsubscription forms for your hosting sites with [Hostfurl](https://hostfurl.com).

## Usage

There is an example of this template in use at https://minformhf.hostfurl.com. There is an example of the base template in use at https://minform.hostfurl.com.

To edit site and upload changes:

- Clone repository or download a release
- `npm install`
- `npm start`
- Browse to link
- Edit site as you wish
- The site footer can be edited in _data/site.yml
- Hostfurl hosting does not support cors, so testing forms without uploading changes will not work
- Upload changes to your site with rsync, specific example to be provided

## Updates

- `npm update` updates packages

## Prerequesites

Basically node/npm for a non root user with `sh` or symbolic link from `sh`, pre-installed.

If you have command interpreter `sh` in `$PATH`, then the `npm run` script will use this for POSIX shell operations.

What is required is a POSIX compliant shell and file system for use with `npm run` that includes support for `ln` and `rm`.

So, any desktop/laptop/server OS with a Linux, BSD or UNIX like kernel, including macOS; Windows with WSL; any mobile or tablet OS with app which supports a POSIX compliant shell; any embedded system with BusyBox.

Just about any system with `curl` and `sh` can install node/npm, as shown below.

What is not supported is Windows using `cmd` for `npm run`. Install WSL if using Windows.

It is expected to use `rsync` for uploading files. Normally this is pre installed.

While `git` is not required, it is expected for advanced use.

Never install and run node/npm for user root. This may not be practical for embedded systems.

### OS independent installation of node/npm

There are a variety of methods supported by OS distributions and version software.

A cross platform, OS independent, method to install up to date node/npm is to use curl and sh such as documented at [Download Node.js®](https://nodejs.org/en/download), which downloads and installs node with npm bundled.

### Installation of node/npm on Termux for Android

Termux emulates a Debian distribution on Android. A standard installation of a desktop or server OS will include prerequisites such as curl and git.

With a fresh Termux installation on Android:

```
pkg update
pkg upgrade
pkg install curl git -y
```

Either use
```
pkg install nodejs-lts -y
```
or, to help keep more up to date versions of node/npm, use [Download Node.js®](https://nodejs.org/en/download)

### Technical Details for `ln`, `rm` and other POSIX script commands

Please see [Minform Technical Details](https://github.com/johnheenan/minform#technical-details-for-ln-rm-and-other-posix-script-commands)

##  Development and Production Versions

`npm run start` will allow you to develop and view changes as you make them. `site.prod` is false.

`npm run build` generates a production build  in `_sites`. `site.prod` is true

`npm run stage` allows the production build to be viewed locally.

## Using rsync to upload production builds

### Uploading from command line with progress view

If `user` is your SSH login name, `my.example.com` is your DNS site name and `public_html` is the directory off your home directory to upload

You can put a SSH public key in `~/.ssh/authorized_keys` to avoid using a password.

To upload new files or change existing files incrementally:
```
rsync _site/ -azvh user@my.example.com:public_html
```

To also delete files remotely that were deleted locally:

```
rsync _site/ -azvh --delete user@my.example.com:public_html
```
If you need to use an absolute directory path then include `/` at the start of the path after `:`, such as:
```
rsync _site/ -azvh user@my.example.com:/home/user/public_html
```

The included `-v` option shows files uploaded. Add in `--progress` to show progress of individual files. For files that already exist, incremental deltas of files are uploaded, not the full file.

After a rebuild, files will change due to cache busting, even with no content change. Rsync effciently finds, includes and uploads these changes without including the full file.

With heavy editing of sites with many files, consider turning off cache busting and turning on again when finished with final edit. If turning off cache busting, do not include `--delete` with rsync until cache busting is turned on again.

To turn off cache busting, comment out line
```
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);
```
near start in `minform/minform.config.js` with `//` at start of line.

Depending on web server, turning off cache busting may prevent site updates from being viewed immediately with a browser refresh, unless a hard refresh or cache emptying with hard refresh is used.

### Uploading from a GitHub Action

An up to date and popular GitHub Action for rsync deployment, usable in CI/CD, is documented at [Rsync Deployments Action](https://github.com/marketplace/actions/rsync-deployments-action)

## Further details

[Minformhf](https://github.com/hostfurl/minformhf) is a tailored version of [Minform](https://github.com/johnheenan/minform) specifically for Hostfurl.

[Minform](https://github.com/johnheenan/minform) is a public website template using [11ty](https://11ty.dev) static website generator.

[Minform](https://github.com/johnheenan/minform) is built on [Build Awesome Starter](https://github.com/anydigital/build-awesome-starter) version [v0.8.1](https://github.com/anydigital/build-awesome-starter/releases/tag/v0.8.1)


## Differences of [Minformhf](https://github.com/hostfurl/minformhf) with [Minform](https://github.com/johnheenan/minform)

Only Main, Contact and About pages provided

Only the simpler form approach is used

Page contents reduced
