import React, {useState} from 'react';

export const TestForm = () => {
    let [data, updateData] = useState([]);
    let [showData, updateShowData] = useState([]);
    let [input, updateInput] = useState({});

    const changeTab = (type) => {
        if (type === 'all') {
            updateShowData(data);
            return;
        }
        let display = data.map((item) => {
            return {[type]: item[type]};
        });
        console.log(display);
        updateShowData(display);
    };

    const changeInput = (event, type) => {
        let newInput = Object.assign(input, {
            [type]: event.target.value
        });
        console.log(newInput);
        updateInput(newInput);
    };

    const submit = (event) => {
        event.preventDefault();
        let newData = [...data, JSON.parse(JSON.stringify(input))];
        updateData(newData);
        updateShowData(newData);
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={submit}>
                <span>Title</span>
                <input placeholder='title' type='text' onInput={(event) => {
                    changeInput(event, 'title');
                }}/>
                <span>Active</span>
                <input placeholder='active' type='text' onInput={(event) => {
                    changeInput(event, 'active');
                }}/>
                <button>submit</button>
            </form>
            <p/>
            <button onClick={() => {changeTab('title');}}>
                Title
            </button>
            <button onClick={() => {changeTab('active');}}>
                Active
            </button>
            <button onClick={() => {changeTab('all');}}>
                All
            </button>
            <p/>
            <div>
                {
                    showData.length !== 0
                        ? showData.map((item) => {
                            return (
                                <ul key={item.title ? item.title : item.active}>
                                    {item.title ? <li>{item.title}</li> : null}
                                    {item.active ? <li>{item.active}</li> : null}
                                </ul>
                            );
                        })
                        : null
                }
            </div>
        </div>
    );
};

