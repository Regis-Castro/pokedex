import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages'
import {InfoPokemon} from './components/infoPokemon/infoPokemon'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home />} />
            <Route exact path='/poke/:id' element={ <InfoPokemon />} />
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }