`hugo server` to run locally
`hugo` to regenerate the site

At present the (ancient) orchestration is not set up so that Hugo automatically recompiles the (equally ancient) Sass. Sally, if you want to change any styles, you'll need to run the following manually.

`sass --watch --style=compressed themes/201706-sj/src/master.scss:themes/201706-sj/static/css/master.css`