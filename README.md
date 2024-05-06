# setup-sparkle

> Setup [Sparkle framework](https://github.com/sparkle-project/Sparkle) tools in GitHub Actions workflow.


## Requirements

The actions requires macOS operating system as Sparkle framework works
exlusively for macOS applications only and it is not multi-platfomr.


## Usage

```yml
- name: setup sparkle
  uses: jozefizso/setup-sparkle@v1
  with:
    version: 2.6.2

- name: generate appcast
  run: generate_appcast /path/to/your/updates_folder/
```

List of Sparkle releases: <https://github.com/sparkle-project/Sparkle/releases>

> [!IMPORTANT]  
> Sparkle v2.6.2 is an important security update. Please, ensure you are using
> the latest version.


### Build tools

The action will register the `./bin` directory from Sparkle release so all the tools
are globally available in workflow.

The action will set the `$SPARKLE_BIN` environment variable to the full path where
the `./bin` directory is.

```shell
$ echo "$SPARKLE_BIN"
/Users/runner/hostedtoolcache/sparkle-framework-tools/2.6.2/x64/bin
```

Read the [Sparkle documentation](https://sparkle-project.org/documentation/) for information
about using the tools.


## License

Source code is licensed under [MIT License](LICENSE.txt).
