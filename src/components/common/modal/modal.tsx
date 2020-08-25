import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
// styled
import StyledModal2 from "./styled";
const modalRoot = document.getElementById('modal-root') as Element;
class Modal extends Component<any, any> {
  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md"
  };
static propTypes = {
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    modalClass: PropTypes.string,
    modalSize: PropTypes.string
  };
state = { fadeType: null };
background = React.createRef<HTMLDivElement>();
componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown, false);
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
  }
componentDidUpdate(prevProps: any, prevState: any) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }
componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyDown, false);
  }
transitionEnd = (e: any) => {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };
onEscKeyDown = (e: any) => {
    if (e.key !== "Escape") return;
    this.setState({ fadeType: "out" });
  };
handleClick = (e: any) => {
    e.preventDefault();
    this.setState({ fadeType: "out" });
  };
render() {
    return <>
    {/* ReactDom.createPortal(
      <StyledModal2
        id={this.props.id}
        className={`wrapper ${this.props.class}`}
        role="dialog"
        size={this.props.size}
        onTransitionEnd={this.transitionEnd}
        fadeType={this.state.fadeType}
      >
        <div className="box-dialog">
          <div className="box-header">
            <h4 className="box-title">Title Of Modal</h4>
            <button onClick={this.handleClick} className="close">
              ×
            </button>
          </div>
          <div className="box-content">{this.props.children}</div>
          <div className="box-footer">
            <button onClick={this.handleClick} className="close">
              Close
            </button>
          </div>
        </div>
        <div
          className={`background`}
          onMouseDown={this.handleClick}
          ref={this.background}
        />
      </StyledModal2>,
      modalRoot
    ); */}
    </>
  }
}
export default Modal;