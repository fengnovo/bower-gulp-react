var React = require('react');
var QuestionAddButton = require('./QuestionAddButton');
var QuestionFrom = require('./QuestionFrom');
var QuestionList = require('./QuestionList');
var _ = require('lodash');

module.exports = React.createClass({
	getInitialState:function(){
		return{
			listData: [
				{
					key:1,
					title:'测试001',
					content:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
					voteCount: 4
				},
				{
					key:2,
					title:'产品经理与程序员矛盾的本质是什么？',
					content:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
					voteCount: 10
				},
				{
					key:3,
					title:'热爱编程是一种怎样的体验？',
					content:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
					voteCount: 8
				}
			],
			formDisplay: false
		}
	},
	handleClick: function(){
		this.setState({
			formDisplay: !this.state.formDisplay
		});
	},
	pushSubmit: function(question){
		var questions = this.state.listData.slice();

		if(question){
			questions.push(question);
			this.setState({
				listData: this.sortQuestion(questions)
			});
		}
	},
	onVote: function(key,newCount){
		var questions = _.uniq(this.state.listData);
		var index = _.findIndex(questions,function(qst){
			return qst.key == key;
		});
		questions[index].voteCount = newCount;
		this.setState({
			listData: this.sortQuestion(questions)
		});
	},
	sortQuestion: function(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});
		return questions;
	},
	render:function(){
		return(<div>
			<div className="jumbotron text-center">
		          <div className="container">
		            <h1>React问答</h1>
		            <QuestionAddButton handleClick={this.handleClick}/>
		          </div>
		    </div>
		    <div className="main container">
		        <QuestionFrom formDisplay={this.state.formDisplay}
		        	handleClick={this.handleClick}
		        	pushSubmit={this.pushSubmit}
					question={this.state.listData}
		        	/>
		        <QuestionList question={this.state.listData} 
		        	onVote={this.onVote}
		        	/>
	      	</div>
      	</div>);
	}
})