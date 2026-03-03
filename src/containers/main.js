import React, {useState, useEffect, useRef} from 'react';

const useCountdown = (init) => {
    const [sec, setSec] = useState(init);

    const tick = useRef();

    tick.current = () => {
        if (sec > 0) {
            setSec(sec - 1);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            tick.current();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return sec;
};

export const Main = () => {
    const seconds = useCountdown(5);

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>剩餘時間</h1>
            <div style={{fontSize: '48px', color: seconds > 10 ? 'black' : 'red'}}>
                {seconds}s
            </div>
            {seconds === 0 && <p>時間到！</p>}
        </div>
    );
};








