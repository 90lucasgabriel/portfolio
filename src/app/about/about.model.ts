/**
 * About model
 */
export class About {
  /**
   *Creates an instance of About.
   * @param {*} [birthdate]
   * @param {string} [educationDegree]
   * @param {string[]} [featured]
   * @param {number} [index]
   * @param {string} [name]
   * @param {string} [picture]
   * @param {Course[]} [courses]
   * @param {Education[]} [education]
   * @param {Social[]} [social]
   * @param {Work[]} [work]
   * @memberof About
   */
  constructor(
    public birthdate?:	      any,
    public educationDegree?:  string,
    public featured?:         string[],
    public index?:            number,
    public name?:             string,
    public picture?:          string,
    
    public courses?:          Course[],
    public education?:        Education[],
    public social?:           Social[],
    public work?:             Work[]
  ) {	}
}

/**
 * Course model
 */
export class Course {
  /**
   *Creates an instance of Course.
   * @param {*} [dueDate]
   * @param {string} [institution]
   * @param {string} [name]
   * @memberof Course
   */
  constructor(
    public dueDate?:	        any,
    public institution?:      string,
    public name?:             string
  ) {	}
}

/**
 * Education model
 */
export class Education {
  /**
   *Creates an instance of Education.
   * @param {string} [course]
   * @param {string} [degree]
   * @param {*} [dueDate]
   * @param {string} [institution]
   * @param {*} [startDate]
   * @memberof Education
   */
  constructor(
    public course?:	          string,
    public degree?:           string,
    public dueDate?:	        any,
    public institution?:      string,
    public startDate?:        any
  ) {	}
}

/**
 * Social model
 */
export class Social {
  /**
   *Creates an instance of Social.
   * @param {string} [color]
   * @param {string} [icon]
   * @param {number} [index]
   * @param {string} [name]
   * @param {string} [url]
   * @memberof Social
   */
  constructor(
    public color?:	          string,
    public icon?:             string,
    public index?:            number,
    public name?:             string,
    public url?:              string
  ) {	}
}

/** Work model */
export class Work {
  /**
   *Creates an instance of Work.
   * @param {string[]} [activities]
   * @param {string} [company]
   * @param {string} [companyLevel]
   * @param {*} [dueDate]
   * @param {string} [position]
   * @param {Ref[]} [ref]
   * @param {*} [startDate]
   * @memberof Work
   */
  constructor(
    public activities?:       string[],
    public company?:          string,
    public companyLevel?:     string,
    public dueDate?:	        any,
    public position?:         string,
    public ref?:              Ref[],
    public startDate?:        any
  ) {	}
}

/**
 * Ref model
 */
export class Ref {
  /**
   *Creates an instance of Ref.
   * @param {string} [description]
   * @param {string} [icon]
   * @param {string} [url]
   * @memberof Ref
   */
  constructor(
      public description?:    string,
      public icon?:           string,
      public url?:            string
  ) { }
}