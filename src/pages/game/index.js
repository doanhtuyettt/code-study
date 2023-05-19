import React, { useState } from "react";
import Card from "../../components/game/Card";
import { cardsData } from "./cards";
import { styled } from '@mui/material/styles';

function Game() {
    // states
    let [cardsState, setCardsState] = useState(cardsData);

    // kep first card info
    let [firstCard, setFirstCard] = useState(null);
    // is it first click?
    let [secondClick, setSecondClick] = useState(false);
    // set flag to wait for 1500ms
    let [wait, setWait] = useState(false);

    // functions
    const checker = async (card) => {
        if (card.name === firstCard.name) {
            console.log("hellooo");
            card["passed"] = true;
            firstCard["passed"] = true;
            changeCardStatusHandler(card);
            changeCardStatusHandler(firstCard);
        } else {
            setWait(true);
            setTimeout(() => {
                changeCardStatusHandler(card);
                changeCardStatusHandler(firstCard);
                setWait(false);
            }, 1500);
        }
    };

    const changeCardStatusHandler = async (clickedCard) => {
        if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
        let index = cardsState.findIndex((card) => card.id === clickedCard.id);
        let newState = [...cardsState];
        newState.splice(index, 1, clickedCard);
        await setCardsState(newState);
    };

    const handleClick = async (e, clickedCard) => {
        if (wait) {
            return;
        }
        if (!secondClick) {
            await setFirstCard(clickedCard);
            await setSecondClick(true);
            changeCardStatusHandler(clickedCard);
        } else {
            await setSecondClick(false);
            changeCardStatusHandler(clickedCard);
            checker(clickedCard);
            setFirstCard(null);
        }
    };
    const ContainerStyled = styled("div")(() => ({
        '& .memory-game': {
            width: '640px',
            height: '640px',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            perspective: '1000px',
        },

        '& .memory-card': {
            width: 'calc(25 % - 10px)',
            height: 'calc(33.333 % - 10px)',
            margin: '5px',
            position: 'relative',
            transform: 'scale(1)',
            transformStyle: 'preserve - 3d',
            transition: 'transform 0.5s',
            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
        }
        ,
        '& .memory-card': {
            '&:active': {
                transform: 'scale(0.97)',
                transition: ' transform 0.2s',
            }
        },

        // '& .memory-card.flip': {
        //     transform: 'rotateY(180deg)',
        // },

        // '& .front-face': {
        //     width: '100 %',
        //     height: '100 %',
        //     padding: '20px',
        //     position: 'absolute',
        //     borderRradius: '5px',
        //     background: ' #30336b',
        //     backfaceVisibility: 'hidden',
        // },
        // '& .back-face': {
        //     width: '100 %',
        //     height: '100 %',
        //     padding: '20px',
        //     position: 'absolute',
        //     borderRradius: '5px',
        //     background: ' #30336b',
        //     backfaceVisibility: 'hidden',
        // }
        // ,
        // '& .front-face': {
        //     transform: 'rotateY(180deg)',
        // }
    }));



    return (
        <ContainerStyled>
            <section className="memory-game">
                {cardsState?.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            onClick={(e) => handleClick(e, card)}
                        />
                    );
                })}
                {/* <Card card={card} onClick={} /> */}
            </section>
        </ContainerStyled>
    );
}

export default Game;
