import { Navbar, Navigation, Theme } from './components';
import { Container, GlobalStyle } from "./components/Navbar.style";
import DataProvider, { DataContext } from './context/DataContext';

const App = () => {
    return (
        <DataProvider>
            <GlobalStyle />
            <Container>
                <Navbar />
                <Navigation />
            </Container>
        </DataProvider>
    )
}



export default App;