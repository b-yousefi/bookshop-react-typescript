import { Links } from "./Links";

export abstract class Entity {
  _links: Links;
  constructor(_links: Links) {
    this._links = _links;
  }
  get id(): string {
    return this._links.self.href.split("/").reverse()[0];
  }
}
