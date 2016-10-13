var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./componments/QuestionApp');

var mainCom = ReactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
);