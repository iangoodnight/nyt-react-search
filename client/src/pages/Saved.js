import React, { Component } from "react";
import Header from "../components/Header";
import { Results, ResultsItem } from "../components/Results";
import API from "../utils/API";



class Saved extends Component {
  state = {
  	articles: []
  };

  componentDidMount() {
  	this.loadArticles();
  }
  
  loadArticles = () => {
    API.getArticles()
      .then(res => {
      	console.log(res.data);
        this.setState({ 
        	articles: res.data
        })
      })
      .catch(err => console.log(err));
  };

	render() {
		return (	
			<div>
				<Header />
				<div className="container center-align">
					<h4>Saved Articles</h4>
				</div>
					{this.state.articles.length ? (
						<Results>
							{this.state.articles.map(article => (
								<ResultsItem key={article._id}>
									<div className="row">
									<h5>
									<a href={article.url}>
										<strong>{article.title}</strong>
									</a>
									</h5>
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

export default Saved;