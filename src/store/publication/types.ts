import Publication from "../../models/Publication";

export const FETCH_PUBLICATIONS = "FETCH_PUBLICATIONS";

export interface FetchPublications {
  type: typeof FETCH_PUBLICATIONS;
  publications: Publication[];
}

export type PublicationActionTypes = FetchPublications;
