// IMPORTS -----------------------------------------------------
  import { Injectable }  from '@angular/core';
  import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, MatSnackBarVerticalPosition }                          from '@angular/material';




@Injectable()
export class MaterialService {
// SNACKBAR ---------------------------
  /**
   * Open message box
   *
   * @param {string} message
   * @param {string} action
   * @param {MatSnackBarVerticalPosition} position
   * @returns {MatSnackBarRef<SimpleSnackBar>}
   * @memberof MaterialService
   */
  public snackBar(message: string, action: string, position: MatSnackBarVerticalPosition): MatSnackBarRef<SimpleSnackBar> {
    const snackBarRef = this.matSnackBar.open(message, action, {
      duration: 5000,      
      verticalPosition: position
    });

    return snackBarRef;
  }




// OTHERS --------------------------------
  /**
   * Creates an instance of MaterialService.
   * @param {MatSnackBar} matSnackBar
   * @memberof MaterialService
   */
  constructor(
    private matSnackBar:        MatSnackBar
  ) { }
}