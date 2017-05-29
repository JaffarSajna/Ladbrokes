import React, {PropTypes} from 'react';
import { confirmable } from 'react-confirm';
import  from 'any-dialog-library'; // your choice. 
 
const YourDialog = ({show, proceed, dismiss, cancel, confirmation, options}) => {
  <Dialog onHide={dismiss} show={show}>
    {confirmation}
    <button onClick={() => cancel('arguments will be passed to the callback')}>CANCEL</button>
    <button onClick={() => proceed('same as cancel')}>OK</button>
  </Dialog>
}
 
YourDialog.propTypes = {
  show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not. 
  proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved. 
  cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected. 
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog. 
  confirmation: PropTypes.string,  // arguments of your confirm function 
  options: PropTypes.object        // arguments of your confirm function 
}
 
// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component. 
export default confirmable(YourDialog);
 
// or, use `confirmable` as decorator 
//@confirmable
//class YourDialog extends React.Component {
//}