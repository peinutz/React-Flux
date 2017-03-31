"user strict";
var Router = require('react-router');
var Link = require('react-router').Link;

var React = require("react");
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
getInitialState: function() {
    return {
        authors:[]
    };
},
componentDidMount: function() {
    if(this.isMounted()) {
        this.setState({authors: AuthorApi.getAllAuthors() });
    }
},
    render:function() {
        var createAuthorRow = function(author) {
            return(
             <tr key={author.id}> 
                <td><a href={"/#authors/" + author.id}> {author.id}</a></td>
                <td> {author.firstName} {author.lastName}</td>
             </tr>   
            );
        }
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}></AuthorList>
            </div>
        );
    }
});

module.exports = Authors;