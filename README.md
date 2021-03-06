# Portfolio
A simple portfolio site.
One repo, no database required.

## Contents
- [Title](#title)
- [Demos](#demos)
- [Usage](#usage)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Future Features](#future-features)

## Demos

Just a simple portfolio.
Adjust content via the json files in `src/content`.

|Check out the build of the CSS only mobile nav bar at [blog.dbb.tools](https://dbbrowne.github.io/blog/blog/pure-css-burger-menu/).|<img src="https://user-images.githubusercontent.com/72463218/156239739-ba76eefc-d217-49ba-8556-0d7688e9f92e.gif" alt="navbar demo" width="200"/>|
|---|---|

## Usage
Add list content to `src/content`
Add projects to `src/content/projects.json`:
```js
  {
    "id": 0,
    "title": "<string short>", // Around 75 chars?
    "summary": "<string medium>", // Around 100 chars?
    "links":{
      "github": "<url>",
      "deploy": "<url>",
      "caseStudy": "<url>"
    },
    "images":{
      "logo":"<imgUrl>",
      "cover":"<imgUrl>",
      "secondary":"<imgUrl>"
    },
    "description":"<string long>", // Around 300 chars?
    "tags":[
      "<string>", "<string>", ...
    ]
  }
```
Badges for display as footer links:
`src/content/badges.json`
```js
  "<site>":{
    "logo":"<imgUrl - will pull from logosExternal if not declared here and a match is found>",
    "logoAltText":"<string - logo text>",
    "badgeText":"<string - displayed text>",
    "badgeLinkUrl":"<imgUrl - string - >"
  },

```
### Portfolio


## Technologies
[React](https://github.com/facebook/create-react-app)

## Getting Started
These instructions will run a copy of the project on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

#### Running Locally

```console
<project-root> $ npm run dev
```

#### Deployment

```console
npm run build
```
Deploy build folder.

## Future Features
    - toggle to leave dark mode
    - `npm run eject` and configure webpack for dev mode.  Do not need to see full build stats on every refresh.  Or [Craco](https://github.com/gsoft-inc/craco), once CRA structure is better understood.
    - get a random octocat from the github octodex?  This appears to require scraping [octodex.github.com](octodex.github.com)