import React, { Component } from "react";
import Header from "../components/Header";
import { Input, SubmitBtn } from "../components/Search";
import { Results, ResultsItem } from "../components/Results";
import API from "../utils/API";
import axios from 'axios';


class Home extends Component {
  state = {
  	articles: [],
    search: "",
    start: "",
    end: ""
  };

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ articles: res.data, title: "", date: ""})
  //     )
  //     .catch(err => console.log(err));
  // };

  //   componentDidMount() {
  // 	loadArticles();
  // }


  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1c700ade439d4f0c942f0f54cbed43f6")
      // .then(response => this.setState({ articles: response.docs }))
      // .then(res => console.log(res.data.results))
      // .then(res => articles.push(res.data.results))
      .then(res =>
        this.setState({ articles: res.data.results, search: "", start: "", end: ""},
        	function () {
        		console.log(this.state.articles);
        	}
        )
      )
      .catch(err => console.log(err));
      console.log('console logging: ' + this.state.articles);
  };

  // Saves a selected article to the database.
  handleSaveArticle = data => {
    console.log('Saving article:',data);
    const dbData = {
      nyt_id: data._id,
      headline: data.headline.main,
      snippet: data.snippet,
      web_url: data.web_url,
      pub_date: data.pub_date
    }
    API.saveArticle(dbData)
    .then(res=>{
      this.loadSavedArticles();
      // this.refs[savedpanel].scrollIntoView();
      console.log('refs',this)
    })
    .catch(err=>console.log(err));
  };

	render() {
		return (	
			<div>
				<Header />
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
				<div className="container">
					{this.state.articles.length ? (
						<Results>
							{this.state.articles.map((article) => {
								return (
									<ResultsItem key={article.url}>
										{article}

									</ResultsItem>
								)
							})}
						</Results>
					) : (
						<h3>No Results to Display</h3>
					)}
				</div>
			</div>
		);
	}
}

export default Home;