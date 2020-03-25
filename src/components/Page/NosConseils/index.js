import React from 'react';
import { Form, OverlayTrigger, ButtonToolbar, Popover, Button } from 'react-bootstrap';

import './nosconseil.css';

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

const NosConseils = () => (
  <div className="page">
    <Desktop>
      <div className="bloc1-2">
        <div className="bloc1.1">
          <h1 className="titlePage">Nos conseils</h1>
          <div className="bloc1">
            <p>Préserver la santé de votre animal passe par des rendez-vous réguliers chez le vétérinaire. Soyez attentif aux premiers signes et/ou aux symptômes inquiétants</p><br/>
            <p>Nos animaux n'ont pas la parole, mais certaines de leurs attitudes doivent nous alerter sur leur santé. Apprenez à les reconnaître !</p>
          </div>
        </div>
        <div className="bloc1.2">
          <h1 className="titlePage">Les soins fondamentaux</h1>
          <div className="bloc2">
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires externes mensuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires internes bi annuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Vaccination annuelle</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Visite annuelle de contrôle par le vétérinaire</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Hygiène</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Dressage</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="titlePage">Les conseils par espèces</h1>
      <div className="bloc3">
        <div className="bloc4">
          <ButtonToolbar>
            {['left'].map(placement => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title className="titleConseil"as="h3">Le Chat</Popover.Title>
                    <Popover.Content>
                      <strong className="textConseil">
                        Préparer une maison confortable…
                        La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                      </strong>
                    </Popover.Content>
                  </Popover>
                  }
                  >
                <Button className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/cat-1046544_640.jpg?attachment" /></Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Chien</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/dog-1194083_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Lapin</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/the-bunny-house-934128_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Furet</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/ferret-3723085_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Cheval</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/horse-2063672_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Poney</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/shetland-pony-3196521_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Les Serpents et Réptiles</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/snake-4853931_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Danger !</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">FUYEZ !</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLink" src="https://pixabay.com/fr/images/download/dinosaur-3149580_640.png?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
      </div>
    </Desktop>
    <Tablet>
      <div className="bloc1-2Tablet">
        <div className="bloc1.1Tablet">
          <h1 className="titlePage">Nos conseils</h1>
          <div className="bloc1">
            <p>Préserver la santé de votre animal passe par des rendez-vous réguliers chez le vétérinaire. Soyez attentif aux premiers signes et/ou aux symptômes inquiétants</p><br/>
            <p>Nos animaux n'ont pas la parole, mais certaines de leurs attitudes doivent nous alerter sur leur santé. Apprenez à les reconnaître !</p>
          </div>
        </div>
        <div className="bloc1.2Tablet">
          <h1 className="titlePage">Les soins fondamentaux</h1>
          <div className="bloc2">
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires externes mensuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires internes bi annuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Vaccination annuelle</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Visite annuelle de contrôle par le vétérinaire</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Hygiène</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Dressage</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="titlePage">Les conseils par espèces</h1>
      <div className="bloc3">
        <div className="bloc4">
          <ButtonToolbar>
            {['left'].map(placement => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title className="titleConseil"as="h3">Le Chat</Popover.Title>
                    <Popover.Content>
                      <strong className="textConseil">
                        Préparer une maison confortable…
                        La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                      </strong>
                    </Popover.Content>
                  </Popover>
                  }
                  >
                <Button className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/cat-1046544_640.jpg?attachment" /></Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Chien</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/dog-1194083_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Lapin</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/the-bunny-house-934128_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Furet</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/ferret-3723085_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Cheval</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/horse-2063672_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Poney</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/shetland-pony-3196521_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Les Serpents et Réptiles</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/snake-4853931_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Danger !</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">FUYEZ !</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkTablet" src="https://pixabay.com/fr/images/download/dinosaur-3149580_640.png?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <div className="bloc1-2Mobile">
        <div className="bloc1.1Mobile">
          <h1 className="titlePageMobile">Nos conseils</h1>
          <div className="bloc1Mobile">
            <p>Préserver la santé de votre animal passe par des rendez-vous réguliers chez le vétérinaire. Soyez attentif aux premiers signes et/ou aux symptômes inquiétants</p><br/>
            <p>Nos animaux n'ont pas la parole, mais certaines de leurs attitudes doivent nous alerter sur leur santé. Apprenez à les reconnaître !</p>
          </div>
        </div>
        <div className="bloc1.2Mobile">
          <h1 className="titlePageMobile">Les soins fondamentaux</h1>
          <div className="bloc2Mobile">
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires externes mensuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Antiparasitaires internes bi annuels</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Vaccination annuelle</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Visite annuelle de contrôle par le vétérinaire</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Hygiène</p>
            </div>
            <div className="checkedList">
              <Form.Check checked="checked" /><p className="list">Dressage</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="titlePage">Les conseils par espèces</h1>
      <div className="bloc3">
        <div className="bloc4Mobile">
          <ButtonToolbar>
            {['left'].map(placement => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title className="titleConseil"as="h3">Le Chat</Popover.Title>
                    <Popover.Content>
                      <strong className="textConseil">
                        Préparer une maison confortable…
                        La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                      </strong>
                    </Popover.Content>
                  </Popover>
                  }
                  >
                <Button className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/cat-1046544_640.jpg?attachment" /></Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Chien</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/dog-1194083_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4Mobile">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Lapin</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/the-bunny-house-934128_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Furet</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/ferret-3723085_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4Mobile">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Le Cheval</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/horse-2063672_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Le Poney</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">Changer d’habitation peut être une expérience traumatisante pour un chien adulte. Il a en effet perdu son maître et son environnement familier. N’oubliez pas d’aménager pour lui un endroit où vous placerez un couchage, un bol d’eau et de la nourriture, afin qu’il puisse dormir et se sentir en sécurité. Ce lieu sera son refuge où il pourra se retirer.</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/shetland-pony-3196521_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
        <div className="bloc4Mobile">
        <ButtonToolbar>
          {['left'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil"as="h3">Les Serpents et Réptiles</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">
                      Préparer une maison confortable…
                      La litière doit être changée régulièrement par souci d'hygiène. Placez la litière dans un endroit calme, loin de l'endroit où votre chat mange, dort et joue. Prévoyez-lui également un grattoir.
                    </strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/snake-4853931_640.jpg?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          {['right'].map(placement => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title className="titleConseil" as="h3">Danger !</Popover.Title>
                  <Popover.Content>
                    <strong className="textConseil">FUYEZ !</strong>
                  </Popover.Content>
                </Popover>
                }
                >
              <Button  className="imgButton" variant="dark"><img className="pictLinkMobile" src="https://pixabay.com/fr/images/download/dinosaur-3149580_640.png?attachment" /></Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
      </div>
    </Mobile>
  </div>
);

export default NosConseils;
