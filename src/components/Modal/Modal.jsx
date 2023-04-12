import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.key === 'Escape' || 'blur') {
      return this.props.onClose();
    }
  };

  render() {
    const { imageLarge } = this.props;
    return (
      <div className="Overlay" onClose={this.props.onClose}>
        <div className="Modal">
          <img src={imageLarge} alt="" />
        </div>
      </div>
    );
  }
}