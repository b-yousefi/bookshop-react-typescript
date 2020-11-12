class Category {
  id: string;
  name: string;
  description: string;
  parent: string;
  subCategories: Category[];
  constructor(
    id: string,
    name: string,
    description: string,
    subCategories: Category[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.parent = "";
    this.subCategories = subCategories;
  }
}

export default Category;
