import React from 'react';
import {FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage} from 'react-intl';
import {menu} from '../locale/mesage';

// export const Main = () => {
//     return (
//         <div>
//             <h2>React-Base-Starter is working!</h2>
//        </div>
//     );
// };

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'init',
            count: 0
        };
        this.myRef = React.createRef();
        this.addCount = this.addCount.bind(this);
    }

    componentDidMount() {
        document.querySelector('#btn').addEventListener('click', (e) => {
            console.log('A inner listener');
            setTimeout(() => {
                console.log('B inner listener timer', e.type);
            });
        });

        document.body.addEventListener('click', (e) => {
            console.log('C document listener');
        });

        window.addEventListener('click', (e) => {
            console.log('D window listener');
        });
    }

    innerClick(e) {
        console.log('G inner e', e.type);
        e.stopPropagation();
        console.log(e);
    }

    changeValue(e) {
        console.log('測試');
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    changeLanguage(e) {
        console.log('測試');
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }


    addCount() {
        console.log('增加');
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <button id='btn' onClick={this.innerClick}>點我</button>
                <input placeholder='test' onChange={this.changeValue}/>
                <div id='parent' ref={this.myRef}>
                    <p id='child'>test</p>
                </div>
                <FormattedDate value={Date.now()}/>
                <FormattedMessage id="about_project"/>
                <br/>
                <FormattedNumber value={2000}/>
                <br/>
                <FormattedPlural value={5} one='1 click' other='5 clicks'/>
                <p>
                    <FormattedMessage id="click_count" values={{ count: this.state.count }} />
                </p>
                <p>{this.state.count}</p>
                <button onClick={this.addCount}>addCount</button>

                {menu.map(({ title, path, key }) => (
                    <li key={title}>
                        <a href={path}>
                            <FormattedMessage id={key} />
                        </a>
                    </li>
                ))}

                <button onClick={this.changeLanguage}>
                    <FormattedMessage id="click_here" />
                </button>
            </div>
        );
    }
}

export {
    Main
}
