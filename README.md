# hp-kv

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Backlock

- Contact popup once first time somebody enters the page after 30 - 45 sec.
- privacy popup upon first pageload with persistant state on check
- Intro Animation scene

- Make Modal Images be swipeable
- navbar on active scroll allmost fully transparent
- navbar mobile collapse view on breakpoint xs

- refactor components and outsource duplicate functions into utils.js
- refactor scss and create global styling partial for repeating element stylings

# flow for popups

1. privacy popup
2. on click ok start timer second popup
3. on click close or contact no more popups
4. disable timer while in modal img
5. after closing modal activate contact popup directly
