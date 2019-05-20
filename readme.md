# T4Utils 2
A Javascript library of utility classes and extensions for TerminalFour Programmable Layouts. This repo is a port/continuation of [Ben Margevicius'](https://github.com/bdm4) unmaintained [T4Utils](https://github.com/FPBSchoolOfNursing/T4Utils) library.

## Latest Version

### [v1.7.0_2017.06.01 - Ordinal Indicators Enhancement](https://github.com/virginiacommonwealthuniversity/T4Utils2/releases/tag/v1.7.0_2017.06.01)
This update enhances the structure, performance, and extensiveness of the `ordinalIndicators` module; Here's how:
* Both the `pageInfo` and `groupInfo` methods have been merged into one self-executing function: `info`
    * Now you can grab all page/group information via `ordinalIndicators.info`
* More information about groups is available
    * `ordinalIndicators.groupAmount` - The total amount of groups on the page
    * `ordinalIndicators.groupCount` - The total amount of content within the current group
    * `ordinalIndicators.groupID` - The ID of the current group (zero-based)
    * `ordinalIndicators.groupIndex` - The index of the current piece of content within the group (zero-based)

Check out the [changelog](changelog.md) for previous release information.

## Table of contents
* [Installation](#installation)
* [Development](#development)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [Contributors](#contributors)

## Installation
There's a couple different ways you can get your hands on the T4Utils 2 library. You can either [download one of the latest releases](https://github.com/virginiacommonwealthuniversity/T4Utils2/releases) or run the following in your terminal:

```shell
git clone git@github.com:virginiacommonwealthuniversity/T4Utils2.git
cd T4Utils2
npm i
```

## Development
```shell
# npm run * / npx gulp *
# *:exp = expanded, *:min = minified

# Build the file
npm run build
npm run build:exp
npm run build:min

# Generate the documentation
npm run docs

# Watch and build the file on change
npm run watch
```

## Documentation
The T4Utils 2 build system comes with a JSDoc3 Gulp task. To build out the HTML documentation, run `npm run docs` and look in the `docs` directory within the project. This documentation can then be previewed within a web browser or uploaded to a server.

## Contributing
Please read through the [contribution guidelines](contribute.md) before opening issues or contributing code.

## Contributors
**Joel Eisner**
* [Twitter (@joeleisner)](https://twitter.com/joeleisner)
* [GitHub (@joeleisner)](https://github.com/joeleisner)

**Sam Yerkes**
* [Twitter (@samyerkes)](https://twitter.com/samyerkes)
* [GitHub (@samyerkes)](https://github.com/samyerkes)
