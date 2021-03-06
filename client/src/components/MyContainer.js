import MyHomepage from "./MyHomepage";
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MyLogin from "./MyLogin";
import MyTotem from "./MyTotem";
import API from "./API";
import MyManager from "./MyManager"
import MyOfficer from "./MyOfficer";
import MyMonitor from "./MyMonitor";

function MyContainer(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        API.isLoggedIn().then((response) => {
          if (response.error === undefined) {
            setUser(() => response);
          }
          else{
            setUser(()=>undefined);
          }
        }).catch(err => {
          console.log(err);
        });
      }, []);

    return (
        <>
            <Switch>
                {/* Route to show the homepage */}
                <Route
                    path="/" exact
                    render={() => {
                        return (
                            <>
                                <MyHomepage />
                            </>
                        )
                    }}>
                </Route>
                <Route
                    path="/monitor"
                    render={() => {
                        return (
                            <>
                                <MyMonitor />
                            </>
                        )
                    }}>
                </Route>
                <Route
                    path="/login"
                    render={() => {
                        return (
                            <>
                                <MyLogin setUser={setUser} />
                            </>
                        )
                    }}>
                </Route>
                <Route
                    path="/counter:id"
                    render={() => {
                        return (
                            <>
                                <MyOfficer user={user}/>
                            </>
                        )
                    }}>
                </Route>
                <Route
                    path="/totem"
                    render={() => {
                        return (
                            <>
                                <MyTotem user={user}/>
                            </>
                        )
                    }}>
                </Route>
                <Route
                    path="/manager"
                    render={() => {
                        return (
                            <>
                               <MyManager user={user}/>
                            </>
                        )
                    }}>
                </Route>
            </Switch>
        </>
    );
}

export default MyContainer;