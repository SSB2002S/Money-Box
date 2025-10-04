import { Provider } from "react-redux";
import Container from "./components/Container";
import Header from "./components/Header";
import Dashbard from "./Pages/Dashbard";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Provider store={store}>
          <Dashbard />
        </Provider>
      </Container>
    </>
  );
};

export default App;
