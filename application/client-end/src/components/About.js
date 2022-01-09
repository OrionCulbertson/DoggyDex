import DevCard from './DevCard';
import DoggDexTeam from '../resources/DoggyDexTeam.png';

const About = () => {
  const orion = {
    name: 'Orion Culbertson',
    photo: process.env.PUBLIC_URL + '/devPhotos/orionSelfie.png',
    about:
      "Hey! I'm Orion. I'm a senior at San Francisco State University. I love art, dogs, hikes, programming, and lots of other things. \nI love German Shepherds, but all dogs are good dogs.\nI am the Front End Lead for this project, and my goals are to get comfy in this area as well as learn a lot about the other parts of the project.",
  };

  const miguel = {
    name: 'Miguel Galvan',
    photo: process.env.PUBLIC_URL + '/devPhotos/miguel.png',
    about:
      "Hey ya'll! Excited to combine two things that interest me: dogs and machine learning!\nI'm a senior at SFSU with knowledge of Java, C++, Python, MATLAB, JavaScript, CSS, and HTML.\nMy favorite dogs are beagles, they have the best barks!",
  };

  const grayson = {
    name: 'Grayson Dew',
    photo: process.env.PUBLIC_URL + '/devPhotos/grayson.png',
    about:
      "My name is Grayson Dew, and I am a senior at SFSU. I attended and transferred from Leeward Community College, on Oahu, after 6 years in the Navy working as a linguist.\nI have spent most of my programming time with C++, C#, C, Java, and a bit of Javascript. At the moment I am learning Python, Swift, and Typescript. \nThere is so much potential with this degree that I have not yet figured out what I want to do with it once I've graduated. I'm going to send an application to pretty much every organization and see what offers I have. \nI'm a sucker for escape rooms and try to do any that I come across.",
  };

  const rigo = {
    name: 'Rigo Perez',
    photo: process.env.PUBLIC_URL + '/devPhotos/rigpa.png',
    about:
      "I am a senior at the San Francisco State University. By the end of the Fall term, I will have accomplished a Bachelor's Degree in CSC. \nBefore I continued my career at San Francisco State, I accomplished a certificate in The Humanities and a CSC Associate Degree for Transfer at Foothill Community College, located in Los Altos CA. \nThroughout my career, I have been exposed to compute subjects like: Operating Systems, Computer Architecture, Web Development, and Embedded Systems (e.g. computers in cars), among others. \nI have some experience in programing in C, C++, Java, JavaScript, and currently I am learning to code in Python and TypeScript.",
  };

  const kristopher = {
    name: 'Kristopher Phillips',
    photo: process.env.PUBLIC_URL + '/devPhotos/krisP.png',
    about:
      " Hi there! My name is Kris P and I love dogs and machine learning. I'm in my last semester at SFSU, and I will graduate with a degree in Computer Science in December. \nMy favorite breed of dog is West Highland Terrier, and I greatly look forward to taking lots of pictures of all sorts of dogs to test out the software we build in this project. \nMy programming experence is mostly with C++ and Java, but I have developed projects with JavaScript as well. I am currently studying machine learning techniques using Python and a broad array of different libraries for Python. \nI hope this site serves as an educational tool that is both fun and engaging for users from all walks of life!",
  };

  return (
    <div>
      <img src={DoggDexTeam} className="logo" alt="DoggyDex Team Logo" />
      <div className="devContainer">
        <DevCard dev={orion} />
        <DevCard dev={miguel} />
        <DevCard dev={grayson} />
        <DevCard dev={rigo} />
        <DevCard dev={kristopher} />
      </div>
    </div>
  );
};

export default About;
