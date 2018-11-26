import React, { Component }  from 'react';
import {render} from 'react-dom';

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
};

it('renders without crashing', () => {
console.log("degug from test");
});
