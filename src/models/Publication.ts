class Publication {
  id: string;
  name: string;
  description: string;
  website: string;
  constructor(id: string, name: string, description: string, website: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.website = website;
  }
}

export default Publication;
