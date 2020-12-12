import { Entity } from "./Entity";
import { Links } from "./Links";

class Address extends Entity {
  address: string;
  latitude: number;
  longitude: number;
  state: string;
  city: string;
  zipCode: string;

  constructor(
    address: string,
    latitude: number,
    longitude: number,
    state: string,
    city: string,
    zipCode: string,
    _links: Links
  ) {
    super(_links);
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.state = state;
    this.city = city;
    this.zipCode = zipCode;
  }
}

export default Address;
