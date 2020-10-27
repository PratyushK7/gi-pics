import React from "react";
import pixabay from "../apis/pixabay";
import tenor from "../apis/tenor";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./Themes";
import Jumbotron from "./Jumbotron";
import ImageList from "./ImageList";
import GifList from "./GifList";

class App extends React.Component {
  state = { results: [], type: "IMAGES", theme: "light" };

  //dark mode
  themeToggler = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  onSearchSubmit = async (term, searchType = "IMAGES") => {
    var response = [];
    if (searchType === "IMAGES") {
      response = await pixabay.get("", {
        params: {
          key: "18788344-f85e78cdb827a4eb9e46b80b4",
          q: term,
          per_page: 100,
        },
      });
      this.setState({ results: response.data.hits, type: searchType });
    } else {
      response = await tenor.get("/search", {
        params: {
          key: "6QICWSS34NX5",
          q: term,
        },
      });
      this.setState({ results: response.data.results, type: searchType });
    }
  };

  renderContent() {
    if (this.state.type === "IMAGES") {
      return (
        <div>
          <ImageList results={this.state.results} />
        </div>
      );
    } else {
      return (
        <div>
          <GifList results={this.state.results} />
        </div>
      );
    }
  }

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />
          <div>
            <Jumbotron
              onSubmit={this.onSearchSubmit}
              themeToggler={this.themeToggler}
            />
            {this.renderContent()}
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
