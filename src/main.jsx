import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Lodging from './pages/Lodging'
import About from './pages/About'
import { Layout } from './components/Layout'
import './styles/index.css'
import './styles/utils.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
	<Routes>
		<Route path="/" element = {<Layout><Home /></Layout>} />
		<Route path="/about" element = {<Layout><About /></Layout>} />
		<Route path="/lodging/:id" element = {<Layout><Lodging /></Layout>} />
		<Route path="*" element={<Layout><NotFound /></Layout> } />
	</Routes>
 </BrowserRouter>
)
