type MenuItem = {
  label: string;
  children?: MenuItem[];
};

const menu: MenuItem = {
  label: "Home",
  children: [
    {
      label: "Products",
      children: [
        { label: "Phones", children: [] },
        { label: "Laptops", children: [] },
      ],
    },
    { label: "About", children: [] },
  ],
};

function find(node: MenuItem, label: string): MenuItem | null {
  if (node.label === label) {
    return node;
  } else if (node.children) {
    for (const item of node.children) {
      const found = find(item, label);
      if (found) return found;
    }
  }
  return null;
}

function flatten(node: MenuItem): MenuItem[] {
  const result: MenuItem[] = [node]
  if (node.children) {
    for (const child of node.children) {
      result.push(...flatten(child))
    }
  }
  return result
}

console.log(find(menu, 'Phones'))
console.log(find(menu, 'Nothing'))
console.log(flatten(menu).map(item => item.label))
