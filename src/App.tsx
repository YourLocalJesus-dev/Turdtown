import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmile,
  faHeart,
  faStar,
  faTrophy,
  faBolt,
  faGift,
  faRocket,
  faMusic,
  faThumbsUp,
  faFaceLaughBeam,
  faPoo,
  faCakeCandles,
  faFire,
  faSnowflake,
  faCrown,
  faWandMagicSparkles,
  faGem,
  faDove,
  faCat,
  faDog,
  faHorse,
  faCow,
  faHippo
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [poopCount, setPoopCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [funFact, setFunFact] = useState('');
  const [score, setScore] = useState(0);

  const funFacts = [
    "Wombats are the only animals that poop cubes!",
    "Blue whale poop is bright red and helps feed ocean life!",
    "Ancient Romans used a communal sponge on a stick!",
    "Astronauts' poop is ejected into space and burns up like a shooting star!",
    "Dung beetles can pull 1,141 times their own body weight!",
    "The longest recorded poop was 26 feet long!",
    "Sloths only poop once a week!",
    "Koala babies eat their mom's poop to get gut bacteria!",
    "Your poop is 75% water!",
    "Ancient civilizations used bat poop to make gunpowder!"
  ];

  const confettiIcons = [faPoo, faStar, faCakeCandles, faHeart, faGift];
  const animalIcons = [faCat, faDove, faHorse, faHippo, faCow, faDog];

  const handlePoopClick = () => {
    setPoopCount(poopCount + 1);
    setScore(score + 10);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };

  const handleFunFactClick = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
    setScore(score + 5);
  };

  const handleResetClick = () => {
    setPoopCount(0);
    setScore(0);
    setFunFact('');
  };

  return (
    <div className="min-h-screen bg-yellow-200 relative overflow-hidden" style={{
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.3) 35px, rgba(255,255,255,.3) 70px)`
    }}>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-lowfps-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            >
              <FontAwesomeIcon
                icon={confettiIcons[Math.floor(Math.random() * confettiIcons.length)]}
                className="text-amber-800"
              />
            </div>
          ))}
        </div>
      )}

      <header className="bg-amber-600 text-white py-12 shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-8 border-black relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-5xl animate-lowfps-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <FontAwesomeIcon icon={faPoo} />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FontAwesomeIcon icon={faStar} className="w-16 h-16 text-yellow-300 animate-lowfps-spin" />
            <h1 className="text-7xl md:text-9xl font-black tracking-tight transform -rotate-3 text-white" style={{
              textShadow: '6px 6px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              TURD TOWN
            </h1>
            <FontAwesomeIcon icon={faStar} className="w-16 h-16 text-yellow-300 animate-lowfps-spin" />
          </div>
          <p className="text-3xl font-black text-yellow-300 transform rotate-2 mb-6" style={{
            textShadow: '4px 4px 0px #000',
            fontFamily: 'Comic Sans MS, cursive'
          }}>The Funniest Place on Earth!</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="bg-yellow-400 px-8 py-4 border-6 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTrophy} className="w-8 h-8 text-black" />
                <span className="text-3xl font-black text-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Score: {score}</span>
              </div>
            </div>
            <div className="bg-pink-400 px-8 py-4 border-6 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faStar} className="w-8 h-8 text-black" />
                <span className="text-3xl font-black text-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Poops: {poopCount}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <div className="bg-white p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-2 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <button
              onClick={handlePoopClick}
              className="text-9xl mb-6 cursor-pointer transform hover:scale-125 active:scale-75 transition-all inline-block animate-lowfps-bounce"
            >
              <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
            </button>
            <h2 className="text-6xl font-black text-amber-900 mb-6 transform -rotate-2" style={{
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              fontFamily: 'Comic Sans MS, cursive'
            }}>Welcome to Turd Town!</h2>
            <p className="text-2xl text-amber-800 font-black leading-relaxed mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Where every day is a crappy day... in the BEST way possible!
            </p>
            <p className="text-xl text-amber-700 font-black flex items-center justify-center gap-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <FontAwesomeIcon icon={faThumbsUp} /> Click the poop to earn points!
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={handleFunFactClick}
              className="group bg-cyan-400 p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:-rotate-3 active:rotate-0 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faBolt} className="text-8xl text-black mb-4 animate-lowfps-shake" />
              <h3 className="text-5xl font-black text-black mb-4 text-center" style={{
                textShadow: '3px 3px 0px rgba(255,255,255,0.5)',
                fontFamily: 'Comic Sans MS, cursive'
              }}>Get a Fun Fact!</h3>
              <p className="text-2xl text-black font-black text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Click me to learn something amazing!</p>
            </button>

            <button
              onClick={handleResetClick}
              className="group bg-red-400 p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-3 active:rotate-0 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faRocket} className="text-8xl text-black mb-4 animate-lowfps-shake" />
              <h3 className="text-5xl font-black text-black mb-4 text-center" style={{
                textShadow: '3px 3px 0px rgba(255,255,255,0.5)',
                fontFamily: 'Comic Sans MS, cursive'
              }}>Reset Everything!</h3>
              <p className="text-2xl text-black font-black text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Start fresh with a clean slate!</p>
            </button>
          </div>

          {funFact && (
            <div className="mt-8 bg-purple-400 p-8 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] animate-lowfps-wiggle">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faStar} className="text-5xl text-black flex-shrink-0 animate-lowfps-spin" />
                <p className="text-3xl text-black font-black leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{funFact}</p>
                <FontAwesomeIcon icon={faHeart} className="text-5xl text-black flex-shrink-0 animate-lowfps-pulse" />
              </div>
            </div>
          )}
        </section>

        <section className="mb-16">
          <h2 className="text-7xl font-black text-center text-amber-900 mb-12 transform -rotate-2 flex items-center justify-center gap-4" style={{
            textShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            fontFamily: 'Comic Sans MS, cursive'
          }}>
            Interactive Poop Gallery! <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {animalIcons.map((icon, i) => (
              <button
                key={i}
                onClick={() => {
                  setScore(score + 3);
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 800);
                }}
                className="bg-orange-300 p-8 border-6 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform hover:-rotate-6 active:rotate-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer group"
              >
                <div className="text-7xl mb-2 animate-lowfps-bounce">
                  <FontAwesomeIcon icon={icon} className="text-amber-900" />
                </div>
                <div className="text-4xl animate-lowfps-wiggle">
                  <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-yellow-300 p-8 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:-rotate-3 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="text-7xl mb-4 text-center">
              <FontAwesomeIcon icon={faCakeCandles} className="text-pink-500" />
            </div>
            <h3 className="text-4xl font-black text-black mb-4 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Fun Facts</h3>
            <ul className="space-y-3 text-black font-black text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Turds are nature's recyclers!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Everyone poops (yes, even astronauts!)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>The word comes from Old English "tord"</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-300 p-8 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-3 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="text-7xl mb-4 text-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </div>
            <h3 className="text-4xl font-black text-black mb-4 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Did You Know?</h3>
            <ul className="space-y-3 text-black font-black text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Wombat poop is cube-shaped!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Whale poop helps ocean ecosystems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Bird poop once powered an industry!</span>
              </li>
            </ul>
          </div>

          <div className="bg-lime-300 p-8 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:-rotate-2 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="text-7xl mb-4 text-center">
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            </div>
            <h3 className="text-4xl font-black text-black mb-4 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Good for Earth</h3>
            <ul className="space-y-3 text-black font-black text-xl" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Makes excellent fertilizer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Helps plants grow big and strong</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-3xl">•</span>
                <span>Part of nature's perfect cycle</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-7xl font-black text-center text-amber-900 mb-12 transform rotate-2 flex items-center justify-center gap-4" style={{
            textShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            fontFamily: 'Comic Sans MS, cursive'
          }}>
            Poop Joke Generator! <FontAwesomeIcon icon={faFaceLaughBeam} className="text-pink-500" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => setScore(score + 2)}
              className="group bg-pink-300 p-10 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-3 active:rotate-0 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faFaceLaughBeam} className="text-7xl text-black mb-4 animate-lowfps-bounce" />
              <h3 className="text-4xl font-black text-black mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Why did the toilet paper roll down the hill?</h3>
              <p className="text-3xl text-black font-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>To get to the bottom!</p>
            </button>

            <button
              onClick={() => setScore(score + 2)}
              className="group bg-blue-300 p-10 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:-rotate-3 active:rotate-0 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faThumbsUp} className="text-7xl text-black mb-4 animate-lowfps-bounce" />
              <h3 className="text-4xl font-black text-black mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>What did one piece of poop say to the other?</h3>
              <p className="text-3xl text-black font-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>You crack me up!</p>
            </button>
          </div>
        </section>

        <section className="text-center mb-16">
          <div className="bg-pink-300 p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-1 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="flex justify-center gap-6 mb-6">
              <FontAwesomeIcon icon={faSmile} className="text-8xl text-black animate-lowfps-bounce" />
              <FontAwesomeIcon icon={faMusic} className="text-8xl text-black animate-lowfps-pulse" />
              <FontAwesomeIcon icon={faGift} className="text-8xl text-black animate-lowfps-bounce" />
            </div>
            <h2 className="text-6xl font-black text-black mb-6 transform rotate-2" style={{
              textShadow: '4px 4px 0px rgba(255,255,255,0.5)',
              fontFamily: 'Comic Sans MS, cursive'
            }}>Keep Smiling!</h2>
            <p className="text-4xl text-black font-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Life's too short not to laugh at poop jokes!
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-7xl font-black text-center text-amber-900 mb-12 transform -rotate-2 flex items-center justify-center gap-4" style={{
            textShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            fontFamily: 'Comic Sans MS, cursive'
          }}>
            The Wall of Poop Fame! <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Golden Poop', icon: faHeart, score: 1000, color: 'text-yellow-500' },
              { name: 'Star Poop', icon: faStar, score: 850, color: 'text-pink-500' },
              { name: 'Diamond Poop', icon: faGem, score: 750, color: 'text-cyan-500' },
              { name: 'Fire Poop', icon: faFire, score: 650, color: 'text-red-500' },
              { name: 'Ice Poop', icon: faSnowflake, score: 550, color: 'text-blue-500' },
              { name: 'Electric Poop', icon: faBolt, score: 450, color: 'text-yellow-400' },
              { name: 'Royal Poop', icon: faCrown, score: 350, color: 'text-purple-500' },
              { name: 'Magic Poop', icon: faWandMagicSparkles, score: 250, color: 'text-pink-400' }
            ].map((poop, i) => (
              <button
                key={i}
                onClick={() => setScore(score + 5)}
                className="bg-purple-300 p-6 border-6 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform hover:rotate-6 active:-rotate-6 hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer group"
              >
                <div className={`text-6xl mb-2 animate-lowfps-spin ${poop.color}`}>
                  <FontAwesomeIcon icon={poop.icon} />
                </div>
                <div className="text-4xl mb-2 animate-lowfps-bounce">
                  <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
                </div>
                <h4 className="text-xl font-black text-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{poop.name}</h4>
                <p className="text-lg text-black font-black" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{poop.score} pts</p>
              </button>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <div className="bg-emerald-300 p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-2 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <FontAwesomeIcon icon={faGift} className="text-8xl text-black mb-6 animate-lowfps-bounce" />
            <h2 className="text-6xl font-black text-black mb-6 transform -rotate-2" style={{
              textShadow: '4px 4px 0px rgba(255,255,255,0.5)',
              fontFamily: 'Comic Sans MS, cursive'
            }}>Achievement Unlocked!</h2>
            <p className="text-4xl text-black font-black mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              You've collected {poopCount} magical poops!
            </p>
            <p className="text-3xl text-black font-black flex items-center justify-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              {poopCount >= 50 ? (
                <>
                  <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
                  LEGENDARY POOPER!
                </>
              ) : poopCount >= 25 ? (
                <>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  SUPER POOPER!
                </>
              ) : poopCount >= 10 ? (
                <>
                  <FontAwesomeIcon icon={faGift} className="text-cyan-400" />
                  MEGA POOPER!
                </>
              ) : poopCount >= 5 ? (
                <>
                  <FontAwesomeIcon icon={faHeart} className="text-pink-500" />
                  GREAT POOPER!
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
                  KEEP CLICKING!
                </>
              )}
            </p>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white p-12 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform hover:rotate-2 hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="flex justify-center gap-8 text-8xl mb-8">
              <span className="animate-lowfps-bounce cursor-pointer hover:scale-150 transition-transform" onClick={() => setScore(score + 1)}>
                <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
              </span>
              <span className="animate-lowfps-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '0.2s' }} onClick={() => setScore(score + 1)}>
                <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
              </span>
              <span className="animate-lowfps-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '0.4s' }} onClick={() => setScore(score + 1)}>
                <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
              </span>
              <span className="animate-lowfps-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '0.6s' }} onClick={() => setScore(score + 1)}>
                <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
              </span>
              <span className="animate-lowfps-bounce cursor-pointer hover:scale-150 transition-transform" style={{ animationDelay: '0.8s' }} onClick={() => setScore(score + 1)}>
                <FontAwesomeIcon icon={faPoo} className="text-amber-700" />
              </span>
            </div>
            <p className="text-5xl font-black text-amber-900 mb-4" style={{
              textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              Thanks for visiting Turd Town!
            </p>
            <p className="text-3xl text-amber-700 font-black flex items-center justify-center gap-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Remember: Every poop counts! Click them all! <FontAwesomeIcon icon={faThumbsUp} />
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-amber-600 text-white py-8 mt-16 border-t-8 border-black shadow-[0_-8px_0px_rgba(0,0,0,0.8)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-black" style={{
            textShadow: '3px 3px 0px #000',
            fontFamily: 'Comic Sans MS, cursive'
          }}>© 2025 Turd Town - Where Fun Happens!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
