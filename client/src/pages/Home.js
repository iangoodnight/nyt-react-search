import React, { Component } from "react";
import Header from "../components/Header";
import { Input } from "../components/Search";
import { Results, ResultsItem, SaveBtn } from "../components/Results";
import API from "../utils/API";



class Home extends Component {
  state = {
  	articles: [],
    search: "",
    start: "",
    end: ""
  };

  searchArticles = () => {
  	let query = `${this.state.search}`;
		API.search(query)
    	.then(res => {
    		console.log("res.data.response.docs: ", res.data.response.docs);
    		this.setState({
    			articles: res.data.response.docs,
    			search: "",
    			start: "",
    			end: ""
    		});
    	})
    	.catch(err => console.log(err));
  };

  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
    	this.searchArticles();
    }
  };

  // Saves a selected article to the database.
  handleSaveArticle = data => {
    console.log('Saving article:', data);
    API.saveArticle(data)
    	.then(res=>{ 
      	console.log("saved! ", data);
    	})
    	.catch(err => console.log("handleSaveArticle: ", err));
  };

	render() {
		return (	
			<div>
				<Header />
				<div className="container">
					<p>
						Search the New York Times database for articles and save them for review at a later date.  Enter a search term and date range (optional) below to get started!
    			</p>
    		</div>
				<div className="container">
					<div className="row">
						<form className="col s12">
							<Input
								value={this.state.value}
								onChange={this.handleInputChange}
								type="text"
								name="search"
								placeholder="Search Term"
							/>
							<Input
								value={this.state.value}
								onChange={this.handleInputChange}
								name="start"
								placeholder="Starting From"
							/>	
							<Input
								value={this.state.value}
								onChange={this.handleInputChange}
								name="end"
								placeholder="Untill"
							/>							
							<button
								onClick={this.handleFormSubmit}
								className="btn waves-effect waves-light" 
							>Submit
								<i className="material-icons right">send</i>
							</button>
						</form>
					</div>
				</div>

					{this.state.articles.length ? (
						<Results>
							{this.state.articles.slice(0,30).map(article => (
								<ResultsItem key={article._id}>
									<div className="row">
									<h5>
									<a href={article.web_url}>
										<strong>{article.headline.main}</strong>
									</a>
									</h5>
									<SaveBtn style={{float: "right"}} className="btn btn-small" onClick={() => this.handleSaveArticle({
										title: article.headline.main,
										url: article.web_url,
										date: article.pub_date
									})} />
									</div>
								</ResultsItem>
							))}
						</Results>
					) : (
						<div className="container">
							<h3 style={{margin: "auto"}}>No Results to Display</h3>
						</div>
					)}
			</div>
		);
	}
}

export default Home;