var React = require('react');

module.exports = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		if(!this.refs.title.value) return;
		var question = {
			key: this.props.question.length+1,
			title: this.refs.title.value,
			content: this.refs.content.value,
			voteCount: 0
		}
		this.props.pushSubmit(question);
		this.refs.formId.reset();
	},
	render:function(){
		var displayStyle = this.props.formDisplay ? 'block' : 'none';
		return (
			<form name="addQuestion" className="clearfix" 
				style={{display:displayStyle}}
				onSubmit = {this.handleSubmit}
				ref = "formId"
			>
	          <div className="form-group">
	            <label htmlFor="qtitle">问题</label>
	            <input type="text" className="form-control" ref="title" 
	            	id="qtitle" placeholder="您的问题的标题" />
	          </div>
	          <textarea className="form-control" rows="3" ref="content" 
	          	 placeholder="问题的描述"></textarea>
	          <button className="btn btn-success pull-right">确认</button>
	          <a className="btn btn-default pull-right" 
	          	onClick={this.props.handleClick}>取消</a>
	        </form>
		);
	}
});