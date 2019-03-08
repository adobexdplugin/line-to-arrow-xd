const {Rectangle, Color, Path, Line} = require("scenegraph");

function lineToArrow(selection) {
  const path = selection.items[0].pathData;
  const lastChar = path.substr(-1, 1);
  const t = selection.items[0];
  const c = t instanceof Path || t instanceof Line;

  if(!c) {
    console.log('パスでも線でもないよ');
    return;
    alertNoline();
    return;
  }
  if(lastChar === 'Z') {
    console.log('とじてるからエラー返すよー');
    return;
    alertNoline();
    return;
  } else {
    generateArrow();
  }
}

function alertNoline() {
  // 線じゃないときのアラート
}

function generateArrow() {
  // 三角形でも付けとけ。
}

module.exports = {
  commands: {
    myPluginCommand: lineToArrow
  }
};
