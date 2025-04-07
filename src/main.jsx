import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import NoFound from './pages/NoFound'
import { Layout } from './components/Layout'
import './styles/index.css'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
	<Routes>
		<Route path="/" element = {<Layout><Home /></Layout>} />
		<Route path="/about" element = {<Layout><About /></Layout>} />
		<Route path="*" element={<NoFound />} />
	</Routes>
 </BrowserRouter>
)
