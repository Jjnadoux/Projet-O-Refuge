import React from 'react';

import './temoignages.css';

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

const Temoignages = () => (
  <div className="page">
    <Desktop>
      <h1 className="titlePage">Témoignages</h1>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Fred et Nouka</h1>
          <div className="txtTem">
            <p>Cette jeune labrador a été retrouvée seule errante dans la rue et jamais réclamée. Aujourd'hui, prénommée Nouka par sa nouvelle famille, elle coule des jours heureux dans une maison avec un grand jardin.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/adorable-3344414_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Nadège et Jéjé</h1>
          <div className="txtTem">
            <p>Longtemps pensionnaire au refuge, Jéjé a fait fondre le coeur de Nadège qui aujourd'hui lui offre une seconde partie de vie paisible à la campagne.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/friends-3042751_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Lucie et Kung Fu</h1>
          <div className="txtTem">
            <p>Avec Lili sa nouvelle copine, Kung Fu est aujourd'hui comme à la maison.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/rabbit-3660673_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Mégane et Beuddy</h1>
          <div className="txtTem">
            <p>Beuddy a passé la moitié de sa vie dans une cave, dorénavant il passe son temps sur le canapé.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/girl-4344680_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Ludivine et Funcky</h1>
          <div className="txtTem">
            <p>Le coup de foudre a été immédiat. Très protecteur, Funcky fait le bonheur de sa maîtresse.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/animals-617305_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Marine et Hoppy</h1>
          <div className="txtTem">
            <p>Ce petit Hoppy a perdu son maître trop agé. Marine a su lui rendre sa joie de vivre. </p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/woman-3337556_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </Desktop>
    <Tablet>
      <h1 className="titlePage">Témoignages</h1>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Fred et Nouka</h1>
          <div className="txtTem">
            <p>Cette jeune labrador a été retrouvée seule errante dans la rue et jamais réclamée. Aujourd'hui, prénommée Nouka par sa nouvelle famille, elle coule des jours heureux dans une maison avec un grand jardin.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/adorable-3344414_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Nadège et Jéjé</h1>
          <div className="txtTem">
            <p>Longtemps pensionnaire au refuge, Jéjé a fait fondre le coeur de Nadège qui aujourd'hui lui offre une seconde partie de vie paisible à la campagne.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/friends-3042751_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Lucie et Kung Fu</h1>
          <div className="txtTem">
            <p>Avec Lili sa nouvelle copine, Kung Fu est aujourd'hui comme à la maison.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/rabbit-3660673_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Mégane et Beuddy</h1>
          <div className="txtTem">
            <p>Beuddy a passé la moitié de sa vie dans une cave, dorénavant il passe son temps sur le canapé.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/girl-4344680_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Ludivine et Funcky</h1>
          <div className="txtTem">
            <p>Le coup de foudre a été immédiat. Très protecteur, Funcky fait le bonheur de sa maîtresse.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/animals-617305_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Marine et Hoppy</h1>
          <div className="txtTem">
            <p>Ce petit Hoppy a perdu son maître trop agé. Marine a su lui rendre sa joie de vivre.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/woman-3337556_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <h1 className="titlePage">Témoignages</h1>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Fred et Nouka</h1>
          <div className="txtTem">
            <p>Cette jeune labrador a été retrouvée seule errante dans la rue et jamais réclamée. Aujourd'hui, prénommée Nouka par sa nouvelle famille, elle coule des jours heureux dans une maison avec un grand jardin.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/adorable-3344414_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div> 
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Nadège et Jéjé</h1>
          <div className="txtTem">
            <p>Longtemps pensionnaire au refuge, Jéjé a fait fondre le coeur de Nadège qui aujourd'hui lui offre une seconde partie de vie paisible à la campagne.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/friends-3042751_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Lucie et Kung Fu</h1>
          <div className="txtTem">
            <p>Avec Lili sa nouvelle copine, Kung Fu est aujourd'hui comme à la maison.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/rabbit-3660673_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Mégane et Beuddy</h1>
          <div className="txtTem">
            <p>Beuddy a passé la moitié de sa vie dans une cave, dorénavant il passe son temps sur le canapé.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/girl-4344680_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Ludivine et Funcky</h1>
          <div className="txtTem">
            <p>Le coup de foudre a été immédiat. Très protecteur, Funcky fait le bonheur de sa maîtresse.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/animals-617305_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Marine et Hoppy</h1>
          <div className="txtTem">
            <p>Ce petit Hoppy a perdu son maître trop agé. Marine a su lui rendre sa joie de vivre.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/woman-3337556_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </Mobile>
    <TabletLandscape>
      <h1 className="titlePage">Témoignages</h1>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Fred et Nouka</h1>
          <div className="txtTem">
            <p>Cette jeune labrador a été retrouvée seule errante dans la rue et jamais réclamée. Aujourd'hui, prénommée Nouka par sa nouvelle famille, elle coule des jours heureux dans une maison avec un grand jardin.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/adorable-3344414_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Nadège et Jéjé</h1>
          <div className="txtTem">
            <p>Longtemps pensionnaire au refuge, Jéjé a fait fondre le coeur de Nadège qui aujourd'hui lui offre une seconde partie de vie paisible à la campagne.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/friends-3042751_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Lucie et Kung Fu</h1>
          <div className="txtTem">
            <p>Avec Lili sa nouvelle copine, Kung Fu est aujourd'hui comme à la maison.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/rabbit-3660673_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Mégane et Beuddy</h1>
          <div className="txtTem">
            <p>Beuddy a passé la moitié de sa vie dans une cave, dorénavant il passe son temps sur le canapé.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/girl-4344680_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Ludivine et Funcky</h1>
          <div className="txtTem">
            <p>Le coup de foudre a été immédiat. Très protecteur, Funcky fait le bonheur de sa maîtresse.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/animals-617305_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
        <div className="cardTem">
          <h1 className="titleTem">Marine et Hoppy</h1>
          <div className="txtTem">
            <p>Ce petit Hoppy a perdu son maître trop agé. Marine a su lui rendre sa joie de vivre.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/woman-3337556_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </TabletLandscape>
    <MobileLandscape>
      <h1 className="titlePage">Témoignages</h1>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Fred et Nouka</h1>
          <div className="txtTem">
            <p>Cette jeune labrador a été retrouvée seule errante dans la rue et jamais réclamée. Aujourd'hui, prénommée Nouka par sa nouvelle famille, elle coule des jours heureux dans une maison avec un grand jardin.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/adorable-3344414_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div> 
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Nadège et Jéjé</h1>
          <div className="txtTem">
            <p>Longtemps pensionnaire au refuge, Jéjé a fait fondre le coeur de Nadège qui aujourd'hui lui offre une seconde partie de vie paisible à la campagne.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/friends-3042751_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Lucie et Kung Fu</h1>
          <div className="txtTem">
            <p>Avec Lili sa nouvelle copine, Kung Fu est aujourd'hui comme à la maison.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/rabbit-3660673_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Mégane et Beuddy</h1>
          <div className="txtTem">
            <p>Beuddy a passé la moitié de sa vie dans une cave, dorénavant il passe son temps sur le canapé.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/girl-4344680_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Ludivine et Funcky</h1>
          <div className="txtTem">
            <p>Le coup de foudre a été immédiat. Très protecteur, Funcky fait le bonheur de sa maîtresse.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/animals-617305_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
      <div className="blocCardTem">
        <div className="cardTem">
          <h1 className="titleTem">Marine et Hoppy</h1>
          <div className="txtTem">
            <p>Ce petit Hoppy a perdu son maître trop agé. Marine a su lui rendre sa joie de vivre.</p>
          </div>
          <div className="imgBlocTem">
            <img src="https://pixabay.com/fr/images/download/woman-3337556_640.jpg?attachment" alt="deco" className="imgTem" />
          </div>
        </div>
      </div>
    </MobileLandscape>
  </div>
);

export default Temoignages;
