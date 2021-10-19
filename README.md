# Batman a team mate

This action comments a gif Batman when someone opens a new pr.

## Inputs

### `percentage`

**Required** Number of people out of hundred should be rickrolled (set this to 100 if you want to rickroll everyone).

### `actor`

**Required** The github user name of when to comment

### `message`

**Optional** Comment message when not batmaning (No comment would be made if not provided).

### `GITHUB_TOKEN`

**Required** Github token of the repository.



Try Opening a pr in this repository : [Demo](https://github.com/jono/batman-demo)


## Example usage


```
on:
  pull_request:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - name: Batman
        uses: jonoallen/batman-team-mate@master
        with:
          percentage: 100
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}'
```
