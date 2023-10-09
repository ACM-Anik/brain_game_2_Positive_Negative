// import core_1mn from '../1mn/core_1mn.js';
import { art_box } from "../libs/artbox/art_box.js";


const mArtBox = art_box();
const m_asset_path = '../assets';

// Renderer:--
let mGameRenderer = (data = {}, mDOM) => {
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv); //your root element end [----mDiv----]


    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });
    let mScene = mArtBox_evnt.get_scene();


    //-----do your code-----//
    //utilities..
    let mUtils = {
        // mArtBox_evnt.add_animation({
        //     "e":mScene,
        //     "type":"animate__bounce"
        // });

    };

    //--my-code--//
    let myCODE = {

    };



    //mDta_main:--
    let mDta_main = {
        "utils": {},
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                    // Screen-1 -----------------------------
                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen


                            // mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {

                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({
                                            "w": `5.3vw`,
                                            "h": `6vh`,
                                            "x": 4,
                                            "y": 76,
                                            "e": mE,
                                            "src": `${m_asset_path}/little_square.svg`
                                        }, {
                                            "onLoad": (v = {}) => {

                                            }
                                        });
                                    }
                                });


                                // setTimeout(() => {
                                // v.e.style.visibility = `hidden`;
                                // v.e.style.display= `none`;
                                // v.e.remove();
                                // }, 1000);


                                // Garland of positive and negative(except one negative sign):--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "x": 0,
                                    "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/garland_of_pos_neg.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ //one neg sign:- to move down
                                            "w": `5vw`,
                                            "h": `2vh`,
                                            "x": 20,
                                            "y": 81.5,
                                            "e": mE,
                                            "src": `${m_asset_path}/negative.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        translateX: [-70, 0],
                                                        translateY: [-280, 0],
                                                        duration: 500,
                                                        easing: 'linear'
                                                    });
                                                }, 2500);

                                            }
                                        });//------

                                        mArtBox_evnt.add_svg({ //one neg sign:- to move above
                                            "w": `5vw`,
                                            "h": `2vh`,
                                            "x": 20,
                                            "y": 81.5,
                                            "e": mE,
                                            "src": `${m_asset_path}/negative.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = "100";
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        translateX: 440,
                                                        translateY: -100,
                                                        duration: 500,
                                                        easing: 'linear'
                                                    });
                                                }, 2500);

                                            }
                                        });//--------

                                        mArtBox_evnt.add_svg({ //one pos sign:- to move down
                                            "w": `4vw`,
                                            "h": `5vh`,
                                            "x": 70,
                                            "y": 19,
                                            "e": mE,
                                            "src": `${m_asset_path}/positive.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        translateX: 200,
                                                        translateY: 200,
                                                        duration: 500,
                                                        easing: 'linear'
                                                    });
                                                }, 2500);

                                            }
                                        });//-------

                                        mArtBox_evnt.add_svg({ //one pos sign:- to move above
                                            "w": `4vw`,
                                            "h": `5vh`,
                                            "x": 91,
                                            "y": 52,
                                            "e": mE,
                                            "src": `${m_asset_path}/positive.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        translateX: -200,
                                                        translateY: -200,
                                                        duration: 500,
                                                        easing: 'linear'
                                                    });
                                                }, 2500);
                                            }
                                        }); //-------
                                    }
                                });
                                //-------|

                                // Quiz:--
                                mArtBox_evnt.add_svg({ // Question container
                                    "w": `41vw`,
                                    "h": `18vh`,
                                    "x": 31,
                                    "y": 28,
                                    "e": mE,
                                    "src": `${m_asset_path}/ques_container.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.opacity = "0";
                                        v.e.style.zIndex = "0";
                                        setTimeout(() => {
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                scale: [110, 1],
                                                duration: 1000,
                                                easing: 'spring(1, 80, 10, 0)',
                                            });
                                        }, 0);

                                        mArtBox_evnt.add_svg({ // Ques. text
                                            "w": `25vw`,
                                            "h": `12vh`,
                                            "x": 40,
                                            "y": 33,
                                            "e": mE,
                                            "src": `${m_asset_path}/ques_text.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.opacity = "0";
                                                setTimeout(() => {
                                                    anime({
                                                        opacity: 1,
                                                        targets: v.e,
                                                        duration: 600,
                                                        easing: 'linear'
                                                    });
                                                }, 1500);
                                            }
                                        });//-----

                                        setTimeout(() => { // Option Circle 1
                                            mArtBox_evnt.add_svg({
                                                "w": `13vw`,
                                                "h": `20vh`,
                                                "x": 32,
                                                "y": 57,
                                                "e": mE,
                                                "src": `${m_asset_path}/option_circle_1.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.opacity = "0";
                                                    v.e.style.cursor = "pointer";
                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 1,
                                                            targets: v.e,
                                                            duration: 600,
                                                            easing: 'linear'
                                                        });
                                                    }, 100);
                                                    setTimeout(() => {
                                                        mArtBox_evnt.add_svg({
                                                            "w": `4.5vw`,
                                                            "h": `5.5vh`,
                                                            "x": 36.5,
                                                            "y": 65,
                                                            "e": mE,
                                                            "src": `${m_asset_path}/positive.svg`
                                                        }, {
                                                            "onLoad": (v = {}) => {
                                                                v.e.style.opacity = "0";
                                                                v.e.style.zIndex = "100";
                                                                anime({
                                                                    opacity: 1,
                                                                    targets: v.e,
                                                                    duration: 600,
                                                                    easing: 'linear'
                                                                });
                                                            }
                                                        });
                                                    }, 1000);//------
                                                },
                                                "onClick": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `13vw`,
                                                        "h": `20vh`,
                                                        "x": 32,
                                                        "y": 57,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/green.svg`
                                                    },{
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.zIndex = "10";
                                                        }
                                                    });
                                                }
                                            });
                                        }, 2000);

                                        setTimeout(() => { // Option Circle 2
                                            mArtBox_evnt.add_svg({
                                                "w": `13vw`,
                                                "h": `20vh`,
                                                "x": 58,
                                                "y": 57,
                                                "e": mE,
                                                "src": `${m_asset_path}/option_circle_2.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.opacity = "0";
                                                    v.e.style.cursor = "pointer";
                                                    setTimeout(() => {
                                                        anime({
                                                            opacity: 1,
                                                            targets: v.e,
                                                            duration: 600,
                                                            easing: 'linear'
                                                        });
                                                    }, 100);
                                                },
                                                "onClick": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `13vw`,
                                                        "h": `20vh`,
                                                        "x": 58,
                                                        "y": 57,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/red.svg`
                                                    },{
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.zIndex = "10";
                                                            v.e.style.disabled = "true";
                                                        }
                                                    });
                                                }
                                            });
                                        }, 2000);//------

                                    }
                                });
                                //------------|



                                // on_scr_end..
                                let on_scr_end = () => {
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-2 -----------------------------
                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {


                                // on_scr_end..
                                let on_scr_end = () => {
                                    mScr.remove();
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-3 -----------------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {

                                // -------------|

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 1500,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };
                            };


                            mSet(mScr);
                        }
                    },

                    // Screen-4 -----------------------------
                    {
                        "name": "Screen 4",
                        "key": "scr_4",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // :--

                            };

                            // on_scr_end..
                            let on_scr_end = () => {
                                let timeline = anime.timeline();
                                timeline.add({
                                    targets: mScr,
                                    opacity: 0,
                                    duration: 1500,
                                    easing: 'easeOutExpo',
                                    update: function (anim) {
                                        if (anim.progress > 0) {
                                            anime.remove(mScr);
                                            mScr.remove();
                                            //send cb..
                                            mSendCB(`on_scr_end`, {});
                                        }
                                    },
                                });
                            };

                            mSet(mScr);
                        }
                    },

                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    //set..
    // mDiv.innerHTML = "Content";



    // //mStart..
    let mStart = (mE) => {


        // let scr_8 = () => {
        //     mDta_main.screens.set(`scr_8`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_9();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_7 = () => {
        //     mDta_main.screens.set(`scr_7`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_8();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_6 = () => {
        //     mDta_main.screens.set(`scr_6`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_7();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_5 = () => {
        //     mDta_main.screens.set(`scr_5`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     // scr_6();
        //                 },
        //             }
        //         }
        //     });
        // };

        // let scr_4 = () => {
        //     mDta_main.screens.set(`scr_4`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_5();
        //                 },
        //             }
        //         }
        //     });
        // };

        let scr_3 = () => {
            mDta_main.screens.set(`scr_3`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            // scr_4();
                        },
                    }
                }
            });
        };

        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_3();
                        },
                    }
                }
            });
        };

        mDta_main.screens.set(`scr_1`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        // scr_2();
                    },
                }

            }
        });

    };

    mStart(mScene);

};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",

    }
}, document.body);

