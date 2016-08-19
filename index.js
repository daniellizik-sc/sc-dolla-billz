const $ = (sel) => {
  let a = [].slice.call(document.querySelectorAll(sel));
  if (a.length === 0)
    return [];
  else if (a.length === 1)
    return a.pop();
  else
    return a;
};

module.exports = $;