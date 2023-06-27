import * as React from "react";
import Header from "../components/Hero";
import Slide from "../components/Slide";
import ImageBg1 from "../images/bg/1.jpg";
import ImageBg2 from "../images/bg/2.jpg";
import ImageBg3 from "../images/bg/3.jpg";
import ImageBg4 from "../images/bg/4.jpg";
import ImageBg5 from "../images/bg/5.jpg";
import ImageBg6 from "../images/bg/6.jpg";
import ImageBg7 from "../images/bg/7.jpg";

const Reservations = () => {
  return (
    <>
      <Header backgroundImage={ImageBg1} />
      <Slide slideId="#slide1" backgroundImage={ImageBg2} direction="left">
        <h2>About Us</h2>
        <p className="leading">
          No Reservations Entertainment is a newly-established film production
          company based in London committed to producing interesting, diverse
          and high quality feature films.
        </p>
        <p>
          We're always looking for new ideas and projects to get our teeth into.
          Despite already having a catalogue of excellent scripts we would love
          to hear from anyone who thinks their idea has what it takes to make it
          to the big screen. Please note that all approaches should provide only
          a basic pitch of no more than 150 words and a full plot synopsis of no
          more than 1,500 words. We will endeavour to read all submissions and
          get back to you as soon as we can.
        </p>
        <p>
          Equally, if you already work in the industry, whether you are a
          make-up artist, camera operator, gaffer, sound recordist or have any
          other on-set or production skills, we'd love to hear from you too.
          Please get in touch at
          <a href="mailto:contact@no-reservations.co.uk" title="Email">
            contact@no-reservations.co.uk
          </a>
          .
        </p>
      </Slide>

      <Slide slideId="#slide2" backgroundImage={ImageBg3} direction="right">
        <p className="status">Available now</p>
        <h2>Iceland Is Best</h2>
        <p>
          Sigga, 17, tells her parents she is leaving her beautiful Icelandic
          fishing village to become a poet. In California. Her grandpa has just
          given her enough money to buy a plane ticket.
        </p>
        <p>
          It is going to be simple. She just has to go to the airport and leave.
          What can possibly go wrong? Her three childhood friends, Kati, Benni
          and Gunni, don’t want her to go. They offer to drive Sigga to the
          airport but pick up Nikki, a very good-looking stranger. He has just
          come back from California. He likes Sigga and wants her to stay.
        </p>
        <p>
          Between her parents, her friends, Nikki and this extraordinary
          landscape, what will Sigga choose; will she stay, or will she go?
        </p>
        <p>
          Written and directed by Max Newsom; co-produced by Helga
          Katrinardottir and Helfar ehf.
        </p>
        <p>
          Currently available on home entertainment in North America and to be
          released in the UK late Summer 2021.
        </p>
      </Slide>

      <Slide slideId="#slide4" backgroundImage={ImageBg4} direction="left">
        <p className="status">Coming soon</p>
        <h2>Firebird</h2>
        <p>
          Based on a true story, Firebird is an intense cold war thriller set in
          the 1970’s Soviet Air Force. A dangerous love triangle forms when both
          Luisa, a charming and ambitious secretary to the base Commander, and
          her best friend Sergey, a troubled conscript, unexpectedly fall for
          Roman, a daring young fighter pilot.
        </p>
        <p>
          Driven by curiosity, Sergey and Roman embark on a fatal affair of
          forbidden love and deception, navigating the precarious line between
          love and friendship. Sergey has to face his past as Roman’s career is
          endangered and Luisa struggles to keep her family together. As the
          walls close in they risk their freedom and their very lives in the
          face of an escalating KGB investigation and the multiple perils of an
          all seeing Soviet regime.
        </p>
        <p>
          Written by Peeter Rebane and Tom Prior, directed by Peeter Rebane.
        </p>
        <p>Scheduled for release in late 2021/early 2022.</p>
      </Slide>

      <Slide slideId="#slide5" backgroundImage={ImageBg5} direction="right">
        <p className="status">Pre-production</p>
        <h2>Wrong Place, Wrong Time</h2>
        <p>
          After a reckless night out and losing everything he had worked hard
          for, David leaves memories of a London police cell behind him and
          heads for Marbella, with its promise of adventure and fun. Little does
          he know that he's about to be thrust into the most terrifying time of
          his life. Wrong Place, Wrong Time is a gripping true-life story of an
          unimaginable nightmare, and how a ticket to a new life turns out to be
          a one way ticket to hell.
        </p>
        <p>
          Adapted from the best selling novel by David Perlmutter; Written by
          Carol and Aileen Docherty; a joint production with Golden Mile
          Productions.
        </p>
      </Slide>

      <Slide slideId="#slide6" backgroundImage={ImageBg6} direction="left">
        <p className="status">Development</p>
        <h2>Day Six</h2>
        <p>
          Young, brilliant but emotionally unstable Natalie finds herself
          ensnared in the middle of a battle between two warring alien
          civilisations on Earth in this exciting and poignant sci-fi/fantasy
          thriller.
        </p>
        <p>
          From writer/director Jane Foster, the worlds of the Thorians and
          Arunans are brought to life in a story filled with the wonder of these
          beloved genres, but tinged with very human tragedy and crises
          affecting our world today.
        </p>
      </Slide>

      <Slide
        slideId="#slide7"
        backgroundImage={ImageBg7}
        direction="right"
        hideFooterAction={true}
      >
        <h2>Contact</h2>
        <div className="person">
          <h3>Dankuro Asanuma</h3>
          <h4>Producer & Cinematographer</h4>
          <p>
            <a
              href="tel:+447789874163"
              title="Phone Dankuro"
              className="linkRed"
            >
              +44 (0) 7789 874 163
            </a>
          </p>
          <p>
            <a
              href="mailto:d.asanuma@no-reservations.co.uk"
              title="Email Dankuro"
              className="linkRed"
            >
              d.asanuma@no-reservations.co.uk
            </a>
          </p>
        </div>
        <div className="person">
          <h3>William Randall-Coath</h3>
          <h4>Producer</h4>
          <p>
            <a
              href="tel:+447931368167"
              title="Phone William"
              className="linkRed"
            >
              +44 (0) 7931 368 167
            </a>
          </p>
          <p>
            <a
              href="mailto:w.randallcoath@no-reservations.co.uk"
              title="Email William"
              className="linkRed"
            >
              w.randallcoath@no-reservations.co.uk
            </a>
          </p>
        </div>
        <div className="person">
          <p>
            General:
            <a
              href="mailto:contact@no-reservations.co.uk"
              title="Email Us"
              className="linkRed"
            >
              contact@no-reservations.co.uk
            </a>
          </p>
          <p>
            Twitter:
            <a
              href="https://twitter.com/N0_Reservations"
              title="Follow Us On Twitter"
              className="linkRed"
            >
              @N0_Reservations
            </a>
          </p>
        </div>
        <footer className="footer">
          <p>
            &copy;
            <script type="text/javascript">
              const year = new Date().getFullYear(); document.write(year);
            </script>
            No Reservations Entertainment Limited <br />
            England/Wales company number: 8296780 <br />
            Registered office: 14 Belmont, St.George’s Avenue, Weybridge,
            Surrey, KT13 0BY
          </p>
        </footer>
      </Slide>
    </>
  );
};

export default Reservations;
