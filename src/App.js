import React, { Component } from 'react';

import Description from './components/Description';
import SocialBlock from './components/SocialBlock';
import FooterBlock from './components/FooterBlock';

import './css/bootstrap.min.css';
import './App.css';

import axios from 'axios';


class App extends Component {
  state = {
    locale: 'ru',
  };

  async componentDidMount() {
    const lang = navigator.language || navigator.userLanguage;

    if (lang.toLowerCase().match('ru') === null) {
      this.setEn();
    } else {
      this.setRu();
    }

    console.log("All cards download started.");

    const promisesArr = [
      axios.get('/src/json/cards/ru/social.json'),
      axios.get('/src/json/cards/ru/otherSocial.json'),

      axios.get('/src/json/cards/en/social.json'),
      axios.get('/src/json/cards/en/otherSocial.json'),

      axios.get('/src/json/localization/ru-Ru.json'),
      axios.get('/src/json/localization/en-En.json'),
    ];
    const responseArr = await Promise.all(promisesArr);

    const ruSocial = responseArr[0].data;
    const ruOtherSocial = responseArr[1].data;

    const enSocial = responseArr[2].data;
    const enOtherSocial = responseArr[3].data;

    const ruLocale = responseArr[4].data;
    const enLocale = responseArr[5].data;

    console.log("All cards download completed.");

    this.setState({ ruSocial, ruOtherSocial, enSocial, enOtherSocial, ruLocale, enLocale });
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
   
    const { locale, ruLocale, enLocale, ruSocial, ruOtherSocial, enSocial, enOtherSocial } = this.state;
    const localization = locale === 'ru' ? ruLocale : enLocale;

    if (!localization) return null;

    const { socialTitle, otherSocialTitle, langTitle, documentTitle } = localization;
    const social = locale === 'ru' ? ruSocial : enSocial;

    if (!social) return null;

    const otherSocial = locale === 'ru' ? ruOtherSocial : enOtherSocial;

    if (!otherSocial) return null;
    
    document.title = documentTitle;
    return (
      <div className="wrapper">
        <div className="content container">
          <div className="lang col-md-6">
            <div>
              <h4>{langTitle}</h4>
            </div>
            <div className="lang-switch ru" onClick={this.setRu}>Русский</div>
            <div className="lang-switch en" onClick={this.setEn}>English</div>
            <br />
            <hr />
            <Description localization={localization} />
            <hr />
          </div>
          <SocialBlock contacts={social} title={socialTitle} />
          <SocialBlock contacts={otherSocial} title={otherSocialTitle} />
        </div>
        <FooterBlock />
      </div>
    );
  }
}

export default App;