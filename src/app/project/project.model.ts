/**
 * Project model
 *
 * @export
 * @class Project
 */
export class Project {
  constructor(
    public name?:	          string,
    public description?:    string,
    public url?:            string,
    public category?:       string,
    public images?:         ProjectImages[],
  ) {	}
}

/**
 * ProjectImages model
 *
 * @export
 * @interface ProjectImages
 */
export interface ProjectImages {
  url:                      string,
  description:              string
}