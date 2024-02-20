const PAGE_HEIGHT = 100;

let height = 0;

const ul = document.querySelector('ul');
const list = Array.from(document.querySelectorAll('ul > li'));

for (const node of list) {
  let nodeHeight = node.offsetHeight;
  if (height + nodeHeight > PAGE_HEIGHT) {
    ul.insertBefore(document.createElement('HR'), node);
    height = 0;
  }
  height += nodeHeight;
}