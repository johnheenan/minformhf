
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

- `npm update` updates packages, but does not automatically update parallel `_includes_minform/blades` if blades updated.
- `npm run syncblades` will copy and automatically edit updated relevant blades templates from `_includes/blades` used in parallel directory `_includes_minform/blades`. A shorter way is to run `npm i`.

## Prerequesites

Basically node/npm for a non root user with `sh` or symbolic link from `sh`, pre-installed.

If you have command interpreter `sh` in `$PATH`, then the `npm run` script will use this for POSIX shell operations.

What is required is a POSIX compliant shell and file system for use with `npm run` that includes support for `ln` and `rm`.

So, any desktop/laptop/server OS with a Linux, BSD or UNIX like kernel, including macOS; Windows with WSL; any mobile or tablet OS with app which supports a POSIX compliant shell; any embedded system with BusyBox and a way to install packages, such as with `curl` and piping to `sh`, such as with
```sh
curl -qL https://www.npmjs.com/install.sh | sh
```

as documented at [npm Direct Download](https://github.com/npm/cli#direct-download), which downloads and installs npm with node bundled.

What is not supported is Windows using `cmd` for `npm run`. Install WSL if using Windows.

It is expected to use `rsync` for uploading files. Normally this is pre installed.

While `git` is not required, it is expected for advanced use.

Never install and run node/npm for user root. This may not be practical for embedded systems.

### Technical Details for `ln`, `rm` and other POSIX script commands

Please see [Minform Technical Details](https://github.com/johnheenan/minform#technical-details-for-ln-rm-and-other-posix-script-commands)

## Further details

[Minformhf](https://github.com/hostfurl/minformhf) is a tailored version of [Minform](https://github.com/johnheenan/minform) specifically for Hostfurl.

[Minform](https://github.com/johnheenan/minform) is a public website template using [11ty](https://11ty.dev) static website generator.

[Minform](https://github.com/johnheenan/minform) is built on [Build Awesome Starter](https://github.com/anydigital/build-awesome-starter) version [v0.8.1](https://github.com/anydigital/build-awesome-starter/releases/tag/v0.8.1)


## Differences of [Minformhf](https://github.com/hostfurl/minformhf) with [Minform](https://github.com/johnheenan/minform)

Only Main, Contact and About pages provided

Only the simpler form approach is used

Page contents reduced
