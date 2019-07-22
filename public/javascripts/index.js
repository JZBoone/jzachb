const letters = {
  a: [
    "        ",
    "        ",
    "        ",
    "aaaaaaaa",
    "aa    aa",
    "aa    aa",
    "aa    aa",
    "aaaaaaaa",
    "      aa"
  ],
  b: [
    "bb      ",
    "bb      ",
    "bb      ",
    "bbbbbbbb",
    "bb    bb",
    "bb    bb",
    "bb    bb",
    "bbbbbbbb",
    "        "
  ],
  c: [
    "        ",
    "        ",
    "        ",
    "cccccccc",
    "cc      ",
    "cc      ",
    "cc      ",
    "cccccccc",
    "        "
  ],
  d: [
    "      dd",
    "      dd",
    "      dd",
    "dddddddd",
    "dd    dd",
    "dd    dd",
    "dd    dd",
    "dddddddd",
    "        "
  ],
  e: [
    "        ",
    "        ",
    "        ",
    "eeeeeeee",
    "ee    ee",
    "eeeeeeee",
    "ee      ",
    "eeeeeeee",
    "        "
  ],
  f: [
    " fffff ",
    "ff   ff",
    "ff     ",
    "ff     ",
    "fffffff",
    "ff     ",
    "ff     ",
    "ff     ",
    "       "
  ],
  g: [
    "       ",
    "       ",
    "ggggggg",
    "gg   gg",
    "gg   gg",
    "ggggggg",
    "     gg",
    "     gg",
    "ggggggg"
  ],
  h: [
    "hh     ",
    "hh     ",
    "hh     ",
    "hhhhhhh",
    "hh   hh",
    "hh   hh",
    "hh   hh",
    "hh   hh",
    "       "
  ],
  i: [
    "       ",
    "       ",
    "  iii  ",
    "       ",
    "  iii  ",
    "  iii  ",
    "  iii  ",
    "  iii  ",
    "       "
  ],
  j: [
    "       ",
    "       ",
    "     jj",
    "     jj",
    "     jj",
    "     jj",
    "     jj",
    "     jj",
    "jjjjjjj"
  ],
  k: [
    "kk     ",
    "kk   kk",
    "kk  kk ",
    "kkkkk  ",
    "kk  kk ",
    "kk   kk",
    "kk   kk",
    "kk   kk",
    "       "
  ],
  l: [
    " llll  ",
    "  lll  ",
    "  lll  ",
    "  lll  ",
    "  lll  ",
    "  lll  ",
    "  lll  ",
    "  llll ",
    "       "
  ],
  m: [
    "       ",
    "       ",
    "       ",
    "mm m mm",
    "m mmm m",
    "m  m  m",
    "m  m  m",
    "m     m",
    "       "
  ],
  n: [
    "       ",
    "       ",
    "n      ",
    "nnnnnnn",
    "nn   nn",
    "nn   nn",
    "nn   nn",
    "nn   nn",
    "       "
  ],
  o: [
    "       ",
    "       ",
    "       ",
    "ooooooo",
    "oo   oo",
    "oo   oo",
    "oo   oo",
    "ooooooo",
    "       "
  ],
  p: [
    "       ",
    "ppppppp",
    "pp   pp",
    "pp   pp",
    "pp   pp",
    "ppppppp",
    "pp     ",
    "pp     ",
    "pp     "
  ],
  q: [
    "       ",
    "qqqqqqq",
    "qq   qq",
    "qq   qq",
    "qq   qq",
    "qqqqqqq",
    "     qq",
    "     qq",
    "     qq"
  ],
  r: [
    "       ",
    "       ",
    "r      ",
    "rrrrrrr",
    "rr     ",
    "rr     ",
    "rr     ",
    "rr     ",
    "       "
  ],
  s: [
    "       ",
    "       ",
    "       ",
    "sssssss",
    "ss     ",
    "sssssss",
    "     ss",
    "sssssss",
    "       "
  ],
  t: [
    "       ",
    "  ttt  ",
    "  ttt  ",
    "ttttttt",
    "  ttt  ",
    "  ttt  ",
    "  ttt  ",
    "  ttt  ",
    "       "
  ],
  u: [
    "       ",
    "       ",
    "       ",
    "uu   uu",
    "uu   uu",
    "uu   uu",
    "uu   uu",
    "uuuuuuu",
    "       "
  ],
  v: [
    "       ",
    "       ",
    "       ",
    "vv   vv",
    "vv   vv",
    "vv   vv",
    " vv vv ",
    "   v   ",
    "       "
  ],
  w: [
    "       ",
    "       ",
    "       ",
    "w     w",
    "w  w  w",
    "w  w  w",
    "w www w",
    " w   w ",
    "       "
  ],
  x: [
    "       ",
    "       ",
    "       ",
    "xx   xx",
    " xx xx ",
    "  xxx  ",
    " xx xx ",
    "xx   xx",
    "       "
  ],
  y: [
    "       ",
    "       ",
    "       ",
    "       ",
    "yy   yy",
    " yy yy ",
    "  yyy  ",
    " yy    ",
    "yy     "
  ],
  z: [
    "       ",
    "       ",
    "       ",
    "zzzzzzz",
    "    zz ",
    "   zz  ",
    "  zz   ",
    "zzzzzzz",
    "       "
  ],
  " ": [
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       ",
    "       "
  ]
};

const consolePrettyPrint = messageRaw => {
  const message = messageRaw.toLowerCase();
  let lines = [];
  for (const c of message) {
    for (let i = 0; i < 9; i++) {
      if (lines[i] === undefined) {
        lines[i] = "";
      }
      lines[i] += letters[c][i] + " ";
    }
  }
  let styles = "font-size:16px; font-family:monospace; color:#00b7ff";
  let result = "%c";
  lines.forEach(line => {
    result += `${line} \n`;
  });
  console.log(result, styles);
};
