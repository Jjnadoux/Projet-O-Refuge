import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

import coeur from 'src/assets/images/word-cloud-2696611_1920.png'
import './presentation.css';

import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ orientation: 'portrait', minWidth: 450, maxWidth: 1024})
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ orientation: 'portrait', minWidth: 200, maxWidth: 450 })
  return isMobile ? children : null
}
const MobileLandscape = ({ children }) => {
  const isMobileLandscape = useMediaQuery({ orientation: 'landscape', minWidth: 200, maxWidth: 972 })
  return isMobileLandscape ? children : null
}
const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ orientation: 'landscape', minWidth: 1024, maxWidth: 1400 })
  return isTabletLandscape ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const Presentation = () => (
  <div className="pagePresentation">
  <Desktop>
    <h1 className="titlePresentation">Notre histoire</h1>
    <div className="blocPresentation">
      <div className="colonneGauche">
        <Zoom><img className="coeur" src={coeur} alt="coeur" /></Zoom>
      </div>
      <div className="colonneDroite">
        <p className="presentation">En France lorsqu’on pense à l’adoption d’un animal, on pense SPA. Mais en     réalité il existe de multiple refuges.
          Ces refuges ne sont généralement pas financés par l’Etat ou par des partenaires privés.
          De ce fait, ils manquent cruellement de moyen et surtout de visibilité auprès des futurs adoptants.</p>
        <p className="presentation">Le but est d'offrir une plateforme simple d'utilisation pour les refuges et un site global pour les adoptants.
          Cette plateforme permet de facilité vos recherches sur l'ensemble du territoire national et ainsi donner plus de chance aux animaux abandonnés de retrouver une famille.</p>
      </div>
    </div>
    <div className="blocTeam">
    <h1 className="titlePresentation">L'Equipe O'Refuge</h1>
    <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Lucie</h1>
          <div className="txtTeam">
            <p>Product Owner - Référent technique Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1357220_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam">Nadège</h1>
          <div className="txtTeam">
            <p>Lead Dev Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-972908_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam2">Jérémie</h1>
          <div className="txtTeam">
            <p>Référent technique Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-2484057_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Caroline</h1>
          <div className="txtTeam">
            <p>Lead Dev Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1372252_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam">Julie</h1>
          <div className="txtTeam">
            <p>Scrum master</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-3609547_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </div>
    </Desktop>
    <Tablet>
    <h1 className="titlePresentation">Notre histoire</h1>
    <div className="blocPresentationTablet">
      <div className="colonneGauche">
        <Zoom><img className="coeur" src={coeur} alt="coeur" /></Zoom>
      </div>
      <div className="colonneDroite">
        <p className="presentation">En France lorsqu’on pense à l’adoption d’un animal, on pense SPA. Mais en     réalité il existe de multiple refuges.
          Ces refuges ne sont généralement pas financés par l’Etat ou par des partenaires privés.
          De ce fait, ils manquent cruellement de moyen et surtout de visibilité auprès des futurs adoptants.</p>
        <p className="presentation">Le but est d'offrir une plateforme simple d'utilisation pour les refuges et un site global pour les adoptants.
          Cette plateforme permet de facilité vos recherches sur l'ensemble du territoire national et ainsi donner plus de chance aux animaux abandonnés de retrouver une famille.</p>
      </div>
    </div>
    <div className="blocTeam">
      <h1 className="titlePresentation">L'Equipe O'Refuge</h1>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Lucie</h1>
          <div className="txtTeam">
            <p>Product Owner - Référent technique Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1357220_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Nadège</h1>
          <div className="txtTeam">
            <p>Lead Dev Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-972908_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam2">Jérémie</h1>
          <div className="txtTeam">
            <p>Référent technique Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-2484057_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Caroline</h1>
          <div className="txtTeam">
            <p>Lead Dev Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1372252_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam">Julie</h1>
          <div className="txtTeam">
            <p>Scrum master</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-3609547_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </div>  
    </Tablet>
    <Mobile>
    <h1 className="titlePresentation">Notre histoire</h1>
    <div className="blocPresentationMobile">
      <div className="colonneGaucheMobile">
        <Zoom><img className="coeur" src={coeur} alt="coeur" /></Zoom>
      </div>
      <div className="colonneDroiteMobile">
        <p className="presentation">En France lorsqu’on pense à l’adoption d’un animal, on pense SPA. Mais en     réalité il existe de multiple refuges.
          Ces refuges ne sont généralement pas financés par l’Etat ou par des partenaires privés.
          De ce fait, ils manquent cruellement de moyen et surtout de visibilité auprès des futurs adoptants.</p>
        <p className="presentation">Le but est d'offrir une plateforme simple d'utilisation pour les refuges et un site global pour les adoptants.
          Cette plateforme permet de facilité vos recherches sur l'ensemble du territoire national et ainsi donner plus de chance aux animaux abandonnés de retrouver une famille.</p>
      </div>
    </div>
    <div className="blocTeam">
      <h1 className="titlePresentation">L'Equipe O'Refuge</h1>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Lucie</h1>
          <div className="txtTeam">
            <p>Product Owner - Référent technique Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1357220_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
      <div className="cardTeam">
          <h1 className="titleTeam">Nadège</h1>
          <div className="txtTeam">
            <p>Lead Dev Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-972908_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
      <div className="cardTeam">
          <h1 className="titleTeam2">Jérémie</h1>
          <div className="txtTeam">
            <p>Référent technique Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-2484057_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
      <div className="cardTeam">
          <h1 className="titleTeam">Caroline</h1>
          <div className="txtTeam">
            <p>Lead Dev Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1372252_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
      <div className="cardTeam">
          <h1 className="titleTeam">Julie</h1>
          <div className="txtTeam">
            <p>Scrum master</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-3609547_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      </div>
    </Mobile>
    <MobileLandscape>
    <h1 className="titlePresentation">Notre histoire</h1>
    <div className="blocPresentationTablet">
      <div className="colonneGauche">
        <Zoom><img className="coeur" src={coeur} alt="coeur" /></Zoom>
      </div>
      <div className="colonneDroite">
        <p className="presentation">En France lorsqu’on pense à l’adoption d’un animal, on pense SPA. Mais en     réalité il existe de multiple refuges.
          Ces refuges ne sont généralement pas financés par l’Etat ou par des partenaires privés.
          De ce fait, ils manquent cruellement de moyen et surtout de visibilité auprès des futurs adoptants.</p>
        <p className="presentation">Le but est d'offrir une plateforme simple d'utilisation pour les refuges et un site global pour les adoptants.
          Cette plateforme permet de facilité vos recherches sur l'ensemble du territoire national et ainsi donner plus de chance aux animaux abandonnés de retrouver une famille.</p>
      </div>
    </div>
    <div className="blocTeam">
      <h1 className="titlePresentation">L'Equipe O'Refuge</h1>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Lucie</h1>
          <div className="txtTeam">
            <p>Product Owner - Référent technique Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1357220_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Nadège</h1>
          <div className="txtTeam">
            <p>Lead Dev Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-972908_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam2">Jérémie</h1>
          <div className="txtTeam">
            <p>Référent technique Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-2484057_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Caroline</h1>
          <div className="txtTeam">
            <p>Lead Dev Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1372252_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam">Julie</h1>
          <div className="txtTeam">
            <p>Scrum master</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-3609547_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </div> 
    </MobileLandscape>
    <TabletLandscape>
    <h1 className="titlePresentation">Notre histoire</h1>
    <div className="blocPresentationTablet">
      <div className="colonneGauche">
        <Zoom><img className="coeur" src={coeur} alt="coeur" /></Zoom>
      </div>
      <div className="colonneDroite">
        <p className="presentation">En France lorsqu’on pense à l’adoption d’un animal, on pense SPA. Mais en     réalité il existe de multiple refuges.
          Ces refuges ne sont généralement pas financés par l’Etat ou par des partenaires privés.
          De ce fait, ils manquent cruellement de moyen et surtout de visibilité auprès des futurs adoptants.</p>
        <p className="presentation">Le but est d'offrir une plateforme simple d'utilisation pour les refuges et un site global pour les adoptants.
          Cette plateforme permet de facilité vos recherches sur l'ensemble du territoire national et ainsi donner plus de chance aux animaux abandonnés de retrouver une famille.</p>
      </div>
    </div>
    <div className="blocTeam">
      <h1 className="titlePresentation">L'Equipe O'Refuge</h1>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Lucie</h1>
          <div className="txtTeam">
            <p>Product Owner - Référent technique Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1357220_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Nadège</h1>
          <div className="txtTeam">
            <p>Lead Dev Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-972908_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam2">Jérémie</h1>
          <div className="txtTeam">
            <p>Référent technique Front</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-2484057_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTeam">
          <h1 className="titleTeam">Caroline</h1>
          <div className="txtTeam">
            <p>Lead Dev Back</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-1372252_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTeam">
          <h1 className="titleTeam">Julie</h1>
          <div className="txtTeam">
            <p>Scrum master</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/minion-3609547_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </div>
    </TabletLandscape>
  </div>
);

export default Presentation;
