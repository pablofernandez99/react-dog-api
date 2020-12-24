import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import DogContextProvider from './context/DogContext'
import './style.css'
import Header from './components/Header'
import Item from './components/Item'
import Search from './components/Search'
import NotFound from './components/NotFound'


class App extends Component {

    handleSubmit = (e, history, searchInput) => {
   
        e.currentTarget.reset()
        let url = `/search/${searchInput}`
        history.push(url)
    }

    render() {
        return (
            <DogContextProvider>
                <HashRouter basename="/dog-api">
                    <div className="container">
                        <Route
                            render={props => (
                                <Header
                                    handleSubmit={this.handleSubmit}
                                    history={props.history}
                                />
                            )}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/akita" />}
                            />
                            <Route path="/akita" render={() => <Item searchTerm="akita" />} />
                            <Route path="/beagle" render={() => <Item searchTerm="beagle" />} />
                            <Route path="/dalmatian" render={() => <Item searchTerm="dalmatian" />} />
                            <Route path="/pug" render={() => <Item searchTerm="pug" />} />
                            <Route
                                path="/search/:searchInput"
                                render={props => (
                                    <Search searchTerm={props.match.params.searchInput} />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </HashRouter>
            </DogContextProvider>
        )
    }
}

export default App