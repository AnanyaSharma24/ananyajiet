import React from "react";
import{
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
}from "react-router-dom";
import Test from "./Components/Test"
class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    {/*<h1>this is navbar</h1>*/}
                    <Switch>
                        <Route path = {"/"} exact>
                        <h1> this is homepage </h1>
                        </Route>
                        <Route path = {"/login"}>
                        <h1> this is login </h1>   
                        </Route>
                        <Route path = {"/signup"}>
                        <h1> this is signup </h1>   
                        </Route>
                        <Route path = {"/about-us"}>This is about us
                        </Route>
                        <Route path = {"/contact-us"}>this is contact us</Route>
                        <Route path = {"/404"}>
                        <h1>page not found</h1>
                        </Route>
                        <Route path = {"/test"}>
                            <Test />
                        </Route>
                        <Route path = {"/**"}>
                         <Redirect to = {"/404"}/> 
                        </Route>
                    </Switch>
                    {/*<h1>this is footer</h1>*/}
                </div>
            </Router>
        )
    }
}export default App;