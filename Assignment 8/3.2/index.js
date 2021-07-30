let content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut {{@labore}} et dolore https://developer.mozilla.org/ magna aliqua. Tellus mauris a diammaecenas sed enim ut sem. Pulvinar pellentesque habitant morbi tristique senectus et netuset malesuada. Eleifend mi in nulla posuere https://javascript.info/ sollicitudin aliquam ultricessagittis orci. At volutpat diam ut venenatis tellus. Urna{{@porttitor}}rhoncus dolor purus nonenim praesent elementum. In eu mi bibendum neque. Risus quis varius quam quisque id diam.Vitae https://scotch.io/tag/javascript/ sapien pellentesque habitant morbi tristique senectus.Nibh sit amet commodo nulla. Ut etiam sit amet nisl purus. Porttitor leo a {{@diam}}sollicitudin tempor id.`;

let newContent = content;
// console.log(newContent);

function findIndex(str, searchTerm) {
  let result = [];
  let idx = str.indexOf(searchTerm);
  while (idx !== -1) {
    result.push(idx + 1);
    idx = str.indexOf(searchTerm, idx + 1);
  }
  return result;
}

let urlStart = findIndex(content, "https");
let urlEnd = findIndex(content, "/ ");
let userStart = findIndex(content, "{{@");
let userEnd = findIndex(content, "}}");

for (let i = 0; i < content.length; i++) {
  for (let j = 0; j < urlStart.length; j++) {
    if (i == urlStart[j]) {
      let url = content.slice(urlStart[j] - 1, urlEnd[j]);
      newContent = newContent.replace(
        url,
        `<a href="${url}" class="text-link">${url}</a>`
      );
    }
  }

  for (let j = 0; j < userStart.length; j++) {
    if (i == userStart[j]) {
      let userPlace = content.slice(userStart[j] - 1, userEnd[j] + 2);
      let user = content.slice(userStart[j] + 2, userEnd[j] - 1);
      newContent = newContent.replace(
        userPlace,
        `<span class="text-user">${user}</span>`
      );
      // console.log(user);
      // console.log(userPlace);
    }
  }
}
console.log(newContent);
