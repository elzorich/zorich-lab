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
