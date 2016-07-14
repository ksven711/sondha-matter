/**
 * Created by vshan on 7/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/*import DDCards from 'DDCards.jsx';*/

const Main = () => (
    <div>
        <DDCards />
    </div>
);

const DDCards = () => (
    <div>
        <h1>Aarambam</h1>
        <img className="main-card" src="images/rangu.jpg" />
    </div>
);

ReactDOM.render(<Main />, document.getElementById('app'));