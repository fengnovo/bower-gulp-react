var React = require('react');
var QuestionListItem = require('./QuestionListItem');

module.exports = React.createClass({
	render:function(){
		var questions = this.props.question;
		if(!Array.isArray(questions)) throw new Error('不能传入非数组');
		var QuestionListItems = questions.map(function(item,i){
			return (<QuestionListItem 
					key = {item.key}
					questionKey = {item.key}
					title = {item.title}
					content = {item.content}
					voteCount = {item.voteCount}
					onVote = {this.props.onVote}
				/>);
		}.bind(this));
		return(
			<div id="questions" className="">

	          {QuestionListItems}

	        </div>
		);
	}
});