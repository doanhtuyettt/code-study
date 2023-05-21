import React, { useEffect, useState } from "react";
import { styled } from "@mui/styles";
import { Box } from "@mui/material";

const url = "https://pokeres.bastionbot.org/images/pokemon";

export default function App() {
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);

    const ContainerStyle = styled(Box)(() => (
        {



            '& p': {
                textAlign: 'right',
                fontSize: '50px',
                color: '#999',
                marginTop: 0,
                marginBottom: '10px',
                marginRight: '10px',
            },


            '& .pokemon-card': {

            },

            '& .pokemon-card.flipped': {
                '& .inner': {
                    transform: 'rotateY(180deg)',
                }
            },

            '& .front': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backfaceVisibility: 'hidden',
                background: '#fff',
                transform: 'rotateY(180deg)',
            },

            '& .back': {

            }

            // .pokemon-card .front {
            //  
            // }

            // .pokemon-card .back {
            //  
            // }

            // .pokemon-card .back:hover {
            //   background: #dba8b1,
            //   color: #fff,
            //   transform: scale(1.02),
            // }

        }))
    const pokemons = [
        { id: 1, name: "balbasaur", url: 'https://i.pinimg.com/564x/19/eb/79/19eb79f10c0ec0b7c7bcab248f015205.jpg' },
        { id: 8, name: "wartotle", url: 'https://i.pinimg.com/236x/10/46/aa/1046aa8360e9e07874a79f5aa0f7e29c.jpg' },
        { id: 9, name: "blastoise", url: 'https://i.pinimg.com/236x/55/cb/53/55cb53f1338fa69a9b3e47a08612c33b.jpg' },
        { id: 6, name: "charizard", url: 'https://i.pinimg.com/236x/8d/ff/8c/8dff8cd8b6e3370f9a22442e6a842886.jpg' }
    ];

    //currently there are 4 pokemons but we need the pair

    const pairOfPokemons = [...pokemons, ...pokemons];

    function flipCard(index) {
        setOpenedCard((opened) => [...opened, index]);
    }

    useEffect(() => {
        if (openedCard < 2) return;

        const firstMatched = pairOfPokemons[openedCard[0]];
        const secondMatched = pairOfPokemons[openedCard[1]];

        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id]);
        }

        if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
    }, [openedCard]);

    return (
        <div style={{
            background: '#d0e0e6',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            lineFeight: 1,
            fontFamily: "Patrick Hand, sans - serif"
        }}>
            <div className="cards" style={{
                display: 'grid',
                gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
                gap: '10px',
            }}>
                {pairOfPokemons.map((pokemon, index) => {
                    //lets flip the card

                    let isFlipped = false;

                    if (openedCard.includes(index)) isFlipped = true;
                    if (matched.includes(pokemon.id)) isFlipped = true;
                    return (
                        <ContainerStyle>
                            <div
                                className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
                                key={index}
                                onClick={() => flipCard(index)}
                                style={{
                                    height: !isFlipped && '150px',
                                    width: !isFlipped && '150px',
                                    borderRadius: !isFlipped && '2px',
                                    background: !isFlipped && '#000',
                                    cursor: !isFlipped && 'pointer',
                                    background: !isFlipped && 'none',
                                    border: !isFlipped && 'none',
                                    outline: !isFlipped && 'none',
                                }}
                            >
                                <div className="inner"
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '100%',
                                        transformStyle: 'preserve-3d',
                                        transition: '0.6s cubic-bezier(0.38, 0.02, 0.09, 1.66) all',
                                        transform: isFlipped && 'rotateY(180deg)'
                                    }}>
                                    <div className="front" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px',
                                        position: 'absolute',
                                        top: '76px',
                                        left: 0,
                                        height: '100%',
                                        width: '100%',
                                        backfaceVisibility: 'hidden',
                                        background: '#fff',
                                        transform: 'rotateY(180deg)',
                                    }}>
                                        <img
                                            src={pokemon?.url}
                                            alt="pokemon-name"
                                            width="150"
                                            style={{ height: '150px' }}
                                        />
                                    </div>
                                    <div className="back"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '8px',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            height: '100%',
                                            width: '100%',
                                            backfaceVisibility: 'hidden',
                                            background: '#51dce0',
                                            color: ' #d6aeb5',
                                            fontSize: '100px',
                                            transition: '0.3s ease all',
                                        }}></div>
                                </div>
                            </div>
                        </ContainerStyle>
                    );
                })}
            </div>
        </div>
    );
}
