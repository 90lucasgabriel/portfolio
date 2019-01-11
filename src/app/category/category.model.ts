/**
 * Category model
 *
 * @export
 * @class Category
 */
export class Category {
  /**
   *Creates an instance of Category.
   * @param {string} [name]
   * @param {string} [description]
   * @memberof Category
   */
  constructor(
    public name?:	          string,
    public description?:    string
  ) {	}
}