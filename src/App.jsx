import { Navbar, Navigation, Theme } from './components';
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "./components/Navbar.style";
import useLocalStorageState from "./hooks/useLocalStorageState";
import AdminRubrics from "./models/AdminRubrics";

const AdminRubric = new AdminRubrics();

const App = () => {
    const [theme, setTheme] = useLocalStorageState("theme", "dark");

    const rubric = AdminRubric.createRubric("Title");
    rubric.createCriterion("criterio 1 example");
    rubric.createCriterion("criterio 2 example");

    return (
        <ThemeProvider theme={Theme[theme]}>
            <GlobalStyle />
            <Container>
                <Navbar setTheme={setTheme} />
                <Navigation />
            </Container>
        </ThemeProvider>
    )
}



export default App;