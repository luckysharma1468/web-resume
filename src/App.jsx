import './App.css'
import Title from './components/Title';
import ImageSection from './components/ImageSection';
import ExperienceSection from './components/ExperienceSection';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';

function App() {
  const introductionArray = [
    "Hey, My Name is Prashant Sharma !",
    "Welcome to my web resume ❤",
    "I am a Frontend Developer !",
    "OR more specifically, React JS Developer"
  ];
  return (
    <div>
      <section>
        <Title introductionArray={introductionArray}/>
      </section>
      <section>
        <ImageSection />
      </section>
      <section>
        <ExperienceSection />
      </section>
      <section>
        <Skills />
      </section>
      <section className='flex justify-center'>
        <ContactMe />
      </section>
      <footer className='bg-black text-white font-bold grid text-center content-center h-20 rounded'>
          Made with ❤ by Prashant Sharma !
      </footer>
    </div>
  )
}

export default App
