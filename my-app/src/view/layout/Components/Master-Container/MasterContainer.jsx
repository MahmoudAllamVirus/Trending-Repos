import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import routes from "../../../../Controllers/appRouter.router"
export default function MasterContainer() {
    const masterContainerTemp = () => {
        return (
            <main className='container-fluid p-0'>
                <Switch >
                    {routes.data.map((entry) => {
                        return (<Route key={entry.key} path={entry.path} exact component={entry.key} />)
                    })}
                    <Redirect from="**" to="/" />
                </Switch>
            </main>
        )
    }
    return masterContainerTemp()
}