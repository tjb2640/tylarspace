import React from 'react';
import './Main.css';

import AppHeader from './components/AppHeader'
import Grabber from './components/Grabber';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Grabber />
      <div className='body-content'>
        <h1>You may know me as Tim!</h1>
        <p>I came out as Transgender (male to female) on August 18, 2022 after years of feeling hopelessly trapped in my own body. Words alone cannot even <em>begin</em> to describe how relieved I am to have started my transition. Despite not being out in all areas of my life, and despite facing numerous challenges ahead, it's been freeing to finally make the decision to start hormone therapy and give myself some relief from the stresses of being closeted.</p>
        <p>One of my biggest fears of years past was the prospect of being outed or "exposed" for being involved with the LGBTQ community. In my position, this fear was ultimately unfounded. I have the support of my parents who have been very respectful and willing to listen, my amazing sister, and great friends who all understand where I'm coming from. Even while I'm writing this I'm tearing up thinking about my support network and how grateful I am that they're in my life.</p>
        <p>Unfortunately, for many other people out there, there is real danger in being outed as gay, bisexual, transgender, queer, etc. People who disapprove of these kinds of things tend to do more harm than they truly realize by berating, denying, or insulting someone over who they are or who they love. I have personally observed (but not so much experienced) my fair share of vitriol towards trans people especially. On the flipside, many people out there are willing to listen and learn about trans issues despite being raised or conditioned to disapprove. I'm optimistic that the future will be more sympathetic to those of us who have been living our lives pretending to be normal out of coercion or fear.</p>
        <h2>Coming out has increased my productivity</h2>
        <p>It turns out that if you're happier overall, you're also more productive and willing to give stuff your best shot - at least that's how it has been for me. Since coming out as trans, I don't expend all my energy on worrying about "acting normal" or my future. Instead, I've been able to relax the worry side of my brain and focus better on what matters - work, friends, hobbies... just life in general. As I near the latter third of my twenties, I'm feeling as though I'm in a good place mentally and ready to take on more demanding tasks at work, advance my career, and even potentially go back to school and accelerate my learning.</p>
        <p>All this has only been possible because of my choice to come out and begin HRT. Transitioning isn't just a physical change; it's a mental change as well, and a very welcome one for the majority of us who transition. I believe it to be the best choice I've ever made, and possibly ever will make.</p>
        <h2>"Tim" is a deadname</h2>
        <p>...and it's becoming more obsolete every day! My legal name is still Timothy. At some point in the future, I do plan on legally changing my name and gender. I know I may not always present female right now, but in the meantime, being called "Tylar" in person would mean the world to me.</p>
      </div>
    </div>
  );
}

export default App;
