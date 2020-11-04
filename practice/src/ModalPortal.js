import ReactDOM from 'react-dom';

function ModalPortal({ children }) {
  const modal = document.getElementById('modal');
  return ReactDOM.createPortal(children, modal);
};

export default ModalPortal;