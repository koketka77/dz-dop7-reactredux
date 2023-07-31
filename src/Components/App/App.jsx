import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main, MainPage } from '../../pages'
import "./App.css"

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route path='/' element={<MainPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App