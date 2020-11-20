import { Entity } from "./Entity";
import { Links } from "./Links";

class Publication extends Entity {
  name: string;
  description: string;
  website: string;
  constructor(
    name: string,
    description: string,
    website: string,
    _links: Links
  ) {
    super(_links);
    this.name = name;
    this.description = description;
    this.website = website;
  }
}

export default Publication;
