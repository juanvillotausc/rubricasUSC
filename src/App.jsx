import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import DesignRubric from "./screens/DesignRubric";
import { Navbar, Theme } from './components';
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyle } from "./components/Navbar.style";
import useLocalStorageState from "./hooks/useLocalStorageState";

const PageNotFound = () => (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'InterBold', color: "lightgray" }}>Page not found | 404</h1>
    </div>
)

const App = () => {
    const [theme, setTheme] = useLocalStorageState("theme", "dark");

    return (
        <ThemeProvider theme={Theme[theme]}>
            <GlobalStyle />
            <Container>
                <Navbar setTheme={setTheme} />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/create" element={<DesignRubric />} >

                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Container>
        </ThemeProvider>
    )
}



export default App;