import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Self-made components
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCytrX3qMRLSSL1t9yBAvaA3feBbs5kXKo';

// Create a new component. This component should produce some HTML
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos : [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// this.setState({ videos });
			//This is identical to the above expression: this.setState({videos: videos});
			// ES6 syntax sugar, if the return data is named the same as the thing you want to set with, you can simplify it.
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect= { selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}/>
			</div>
		);
	}
}

// Take ths component's generated HTML and put that on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
