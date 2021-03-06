![Meezyart Sanity Studio Starter Screenshot](http://hosted.meezyart.com/github/meezyart-sanity-studio-starter-screenshot.jpg)

# Meezyart Sanity Studio Starter
A starter headless CMS that features Sanity Studio and includes basic sections and fields.

## Installation
##### 1. Install Node >=12.0.0: <https://nodejs.org/en/>
##### 2. Install Yarn
```
$ npm i -g yarn
```
##### 3. Install all dependencies
```
$ yarn
```

## Configuration
##### 1. Update Sanity API configuration
In `sanity.json`, enter the `projectId` and `dataset` to connect to cloud API.
##### 2. Update Dashboard config
In `dashboardConfig.json`, update GitHub URLs for reference and Netlify configuration for deployment.

## Use
##### Build Files And Start Server
```
$ yarn start
```
##### Build Files
```
$ yarn build
```
##### Deploy Studio
```
$ yarn deploy
```

## Features
* Use with your favorite front-end setup. This pairs perfectly with the [MEezyart 11ty Starter](https://github.com/meezyart/meezyart-11ty-starter) or [meezyart Nuxt Starter](https://github.com/meezyart/meezyart-nuxt-starter)
* Custom dashboard configuration with Netlify deployment
* Predefined fields and blocks for Pages, Articles, Sections, Menus, Settings (SEO, Favicons, Social, Analytics)
* Media browser

## Customizations
* Customize favicon by replacing `favicon.ico` in `/static`
* Customize dashboard brand colors in `styles/variables.css`
