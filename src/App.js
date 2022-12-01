import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ResponsiveSidebar from './components/Sidebar/ResponsiveSidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ResponsiveSidebar />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
