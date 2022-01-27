module.exports = function check(s, c) {
  let m = new Map(c);
  let st = [];
  s.split``.forEach(e => e === m.get(st[st.length - 1]) ? st.pop() : st.push(e));
  return st.length == 0;
}
