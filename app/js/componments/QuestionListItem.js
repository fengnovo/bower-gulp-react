var React = require('react');

module.exports = React.createClass({
	upVote: function(){
		var newCount = parseInt(this.props.voteCount,10) + 1;
		this.props.onVote(this.props.questionKey,newCount);
	},
	downVote: function(){
		var newCount = parseInt(this.props.voteCount,10) - 1;
		this.props.onVote(this.props.questionKey,newCount);
	},
	render:function(){
		return (
			<div className="media">
	            <div className="media-left">
	              <button className="btn btn-default" onClick={this.upVote}>
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-default" onClick={this.downVote}>
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.content}</p>
	            </div>
	          </div>
		);
	}
});