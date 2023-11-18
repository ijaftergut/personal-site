import React, {useState, useEffect} from 'react';
const Home = ()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectImages = ['./threewishes.png', './HarmonicHarbor.png', './image.png'];
  const projectLinks = [
    'https://three-wishes.onrender.com',
    'https://harmonic-harbor.onrender.com',
    'https://isaac-j8em.onrender.com/colors#/colors'
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [projectImages]);

  const showSlide = (index) => {
    const translateValue = -index * 100 + '%';
    return { transform: `translateX(${translateValue})` };
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className='all'>
      <h2>Welcome to my Portfolio</h2>
      <p>Here you will find access to many projects I have worked on, or am in the process of developing. 
        This website itself hosts several projects, from a color selector designed to help choose colors for a webpage, to classic games like breakout designed entirely through css and javascript. Also included is access to Links which contains my other more complex web development projects.
      </p>
      <section>
        <h2>Featured Projects</h2>
        <div className="project-showcase">
          <div className="carousel-container" style={showSlide(currentIndex)}>
            {projectImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <span className='span'></span>
                <a href={projectLinks[index]} target="_blank" rel="noopener noreferrer">
                <img className='image' src={image} alt={`Project ${index + 1}`} /></a>
                <span className='span'></span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </section>
    </div>
  );
};

export default Home;
