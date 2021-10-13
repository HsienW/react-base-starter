import React from 'react';
import {render} from 'react-dom';
// import {Main} from './containers/main';
// import {IntlProvider} from 'react-intl';
// import {LOCALES} from './locale/locale';
// import {messages} from './locale/mesage';
import {TestForm} from './containers/form';

// const locale = LOCALES.JAPANESE;

// render(
//     <IntlProvider
//         messages={messages[locale]}
//         locale={locale}
//         defaultLocale={LOCALES.ENGLISH}
//     >
//         <testForm/>
//     </IntlProvider>, document.getElementById('app')
// );

render(
    <TestForm/>, document.getElementById('app')
);
