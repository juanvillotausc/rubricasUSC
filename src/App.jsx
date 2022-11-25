import { Navigation } from './components';
import { Container, GlobalStyle } from "./components/Navbar.style";
import DataProvider from './context/DataContext';

const App = () => {

    return (
        <DataProvider>
            <GlobalStyle />
            <Container>
                <Navigation />
            </Container>
        </DataProvider>
    )
}



export default App;