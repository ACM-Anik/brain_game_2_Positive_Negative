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
                                            "w": `110vw`,
                                            "h": `110vh`,
                                            "x": -10,
                                            "y": -5,
                                            "e": mE,
                                            "position": "relative",
                                            "src": `${m_asset_path}/+-except.svg`
                                        });
                            
                                        mArtBox_evnt.add_svg({
                                            "w": `5.3vw`,
                                            "h": `6vh`,
                                            "x": 4,
                                            "y": 76,
                                            "e": mE,
                                            "src": `${m_asset_path}/little_square.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                mArtBox_evnt.add_svg({
                                                    "w": `60vw`,
                                                    "h": `50vh`,
                                                    "x": 20,
                                                    "y": 25,
                                                    "e": mE,
                                                    "position": "relative",
                                                    "src": `${m_asset_path}/Rectangle_loading_up.svg`
                                                }, {
                                                    "onLoad": (v = {}) => {
                                                        mArtBox_evnt.add_svg({
                                                            "w": `30vw`,
                                                            "h": `15vh`,
                                                            "x": 30,
                                                            "y": 33,
                                                            "e": mE,
                                                            "position": "relative",
                                                            "src": `${m_asset_path}/POSITIVE.svg`
                                                        });
                                                        mArtBox_evnt.add_svg({
                                                            "w": `30vw`,
                                                            "h": `15vh`,
                                                            "x": 40,
                                                            "y": 45,
                                                            "e": mE,
                                                            "position": "relative",
                                                            "src": `${m_asset_path}/NEGATIVE.svg`
                                                        });
                                                        mArtBox_evnt.add_svg({
                                                            "w": `25vw`,
                                                            "h": `13vh`,
                                                            "x": 38,
                                                            "y": 59,
                                                            "e": mE,
                                                            "position": "relative",
                                                            "src": `${m_asset_path}/newgame-button.svg`
                                                        });
                                                    }
                                                }, {
                                                    "onLoad": (v = {}) => {
                                                       
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            
                                let on_scr_end = () => {
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

