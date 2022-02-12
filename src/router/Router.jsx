import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
        <Route path="*">
          <DefaultLayout>
            <Page404 />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
