require.config({
  deps: ["jsx!main"],

  paths: {
    jquery: "../libs/jquery-2.1.0.min",
    react: "../libs/react",
    jsx: "../libs/jsx",
    JSXTransformer: "../libs/JSXTransformer"
  },
  shim : {
    jquery : {
      exports: "$"
    },
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  }
});