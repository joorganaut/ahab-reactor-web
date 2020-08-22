import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

class Translator extends React.Component<WithTranslation, any> {
  render() {
    return <h1>{this.props.t(this.state.word)}</h1>;
  }
}

export default withTranslation()(Translator);