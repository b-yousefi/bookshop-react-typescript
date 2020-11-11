import Publication from "../../models/Publication";
import { FETCH_PUBLICATIONS, PublicationActionTypes } from "./types";

export function fetchPublications(
  publications: Publication[]
): PublicationActionTypes {
  return {
    type: FETCH_PUBLICATIONS,
    publications: publications,
  };
}
