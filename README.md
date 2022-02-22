# Title
A simple portfolio site.

## Contents
- [Title](#title)
- [Demos](#demos)
- [Usage](#usage)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Future Features](#future-features)

## Demos

## Usage
Add projects to `src/data/projects.json`:
```js
  {
    "id": 0,
    "title": "<short string>", // Around 75 chars?
    "summary": "<medium string>", // Around 100 chars?
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
    "description":"<long string>" // Around 300 chars?
  }
```
### Usage Title
Overview usage

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
    - `npm run eject` and configure webpack for dev mode.  Do not need to see full build stats on every refresh.  Or [Craco](https://github.com/gsoft-inc/craco), once CRA structure is better understood.