import { Category }       from '../category/category.model';

export class Project {
  constructor(
    public name?:	          string,
    public description?:    string,
    public url?:            string,
    public category?:       string,
    public images?:         ProjectImages[],
  ) {	}
}

export interface ProjectImages {
  url:                      string,
  description:              string
}