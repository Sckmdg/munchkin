module.exports = {
  "parser"  : "babel-eslint",
  "extends" : [
    "standard",
    "standard-react"
  ],
  "env"     : {
    "browser" : true
  },
  "globals" : {
    "__DEV__"      : false,
    "__PROD__"     : false,
    "__BASENAME__" : false
  },
  "rules": {
    "semi" : 0,
    "spaced-comment": 0,
    "brace-style": 0,
    "no-trailing-spaces": 0
  }
}
;
