// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Store, createStore } from 'redux';
// import { Provider } from 'react-redux';

// import rootReducer from './main/reducer';

// const initialState = {};

// const store: Store<any> = createStore(rootReducer, initialState);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';


function playlist(state = [], action) {
 	if (action.type === 'ADD_TRACK') {
 		return [
 			...state,
 			action.payload
 		]
 	}

 	return state;
 }

const store = createStore(playlist);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);


// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
// 	list.innerHTML = '';
// 	document.querySelectorAll('.trackInput')[0].value = '';

// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.innerHTML = track;
// 		list.appendChild(li);
// 	})
// })

// addTrackBtn.addEventListener('click', () => {
// 	const trackName = trackInput.value;
//  	store.dispatch({type: 'ADD_TRACK', payload: trackName});
// })

