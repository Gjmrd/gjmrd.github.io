import React, { Component } from 'react';

import Description from './components/Description';
import SocialBlock from './components/SocialBlock';
import FooterBlock from './components/FooterBlock';

import enOtherSocial from './json/cards/en/otherSocial.json';
import ruOtherSocial from './json/cards/ru/otherSocial.json';
import enSocial from './json/cards/en/social.json';
import ruSocial from './json/cards/ru/social.json';

import ruLocale from './json/localization/ru-Ru.json';
import enLocale from './json/localization/en-En.json';

import './css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
    locale: 'ru',
  };
  componentDidMount() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.toLowerCase().match('ru') === null) {
      this.setEn();
    } else {
      this.setRu();
    }
  }
  switchLanguage = (locale) => {
    this.setState({ locale });
    console.log(locale);
  };
  setRu = () => {
    this.switchLanguage('ru');
  }
  setEn = () => {
    this.switchLanguage('en');
  }
  render() {
    const { locale } = this.state;
    const localization = locale === 'ru' ? ruLocale : enLocale; 
    const { socialTitle, otherSocialTitle, langTitle, documentTitle } = localization;
    const social = locale === 'ru' ? ruSocial : enSocial;
    const otherSocial = locale === 'ru' ? ruOtherSocial : enOtherSocial;
    document.title = documentTitle;
    return (
      <div className="wrapper">
        <div className="content container">
          <div className="lang col-md-4">
            <div>
              <h4>{langTitle}</h4>
            </div>
            <div className="lang-switch ru" onClick={this.setRu}>Русский</div>
            <div className="lang-switch en" onClick={this.setEn}>English</div>
          </div>
          <br />
          <hr />
          <Description localization={localization} />
          <hr />
          <SocialBlock contacts={social} title={socialTitle} />
          <SocialBlock contacts={otherSocial} title={otherSocialTitle} />
        </div>
        <FooterBlock />
      </div>
    );
  }
}

export default App;
