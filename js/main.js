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
                    // {
                    //     "name": "Screen 1",
                    //     "key": "scr_1",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen
                    
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb") && v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                 v["value"]["cb"][cb_name](p);
                    //             }
                    //         };
                    
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;
                    
                    //         let mSet = (mE = document.body) => {
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             opacity: 1,
                    //                             targets: v.e,
                    //                             scale: [0, 1],
                    //                             duration: 300,
                    //                             easing: 'animate__flip'
                    //                         })

                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `110vw`,
                    //                         "h": `110vh`,
                    //                         "x": -10,
                    //                         "y": -5,
                    //                         "e": mE,
                    //                         "animation": "animate__flip",
                    //                         "position": "relative",
                    //                         "src": `${m_asset_path}/+-except.svg`
                    //                     });
                    //                 }, 500);
                    
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `5.3vw`,
                    //                         "h": `6vh`,
                    //                         "x": 4,
                    //                         "y": 76,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/little_square.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             mArtBox_evnt.add_svg({
                    //                                 "w": `60vw`,
                    //                                 "h": `50vh`,
                    //                                 "x": 20,
                    //                                 "y": 25,
                    //                                 "e": mE,
                    //                                 "position": "relative",
                    //                                 "src": `${m_asset_path}/Rectangle_loading_up.svg`
                    //                             }, 
                                                  
                    //                             {
                    //                                 "onLoad": (v = {}) => {
                    //                                     let aIMicMute = () =>{
                    //                                         v.e.style.opacity = "0";
                    //                                     }
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `30vw`,
                    //                                         "h": `12vh`,
                    //                                         "x": 30,
                    //                                         "y": 33,
                    //                                         "e": mE,
                    //                                         "position": "relative",
                    //                                         "src": `${m_asset_path}/POSITIVE.svg`
                    //                                     });
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `30vw`,
                    //                                         "h": `12vh`,
                    //                                         "x": 40,
                    //                                         "y": 45,
                    //                                         "e": mE,
                    //                                         "position": "relative",
                    //                                         "src": `${m_asset_path}/NEGATIVE.svg`
                    //                                     });
                    //                                     let mSet = function(mE = document.body) {
                    //                                         mArtBox_evnt.add_svg({
                    //                                             w: "25vw",
                    //                                             h: "13vh",
                    //                                             x: 38,
                    //                                             y: 59,
                    //                                             e: mE,
                    //                                             position: "relative",
                    //                                             src: m_asset_path + "/newgame-button.svg"
                    //                                         }, {
                    //                                             onLoad: function(v = {}) {
                    //                                                 v.e.style.cursor = "pointer";
                    //                                                 v.e.addEventListener("click", function() {
                    //                                                     mSendCB("scr_2");
                    //                                                 });
                    //                                             }
                    //                                         });
                    //                                     };

                                                        
                    //                                     mArtBox_evnt.add_svg({
                    //                                         "w": `25vw`,
                    //                                         "h": `13vh`,
                    //                                         "x": 38,
                    //                                         "y": 59,
                    //                                         "e": mE,
                    //                                         "position": "relative",
                    //                                         "src": `${m_asset_path}/newgame-button.svg`
                    //                                     }, {
                    //                                         "onLoad": (v = {}) => {
                    //                                             v.e.style.cursor = "pointer";
                    //                                         },
                    //                                         "onClick": (v = {}) => {
                    //                                             v.e.style.display = "none";
                    //                                             aIMicMute()
                    //                                             v.e.addEventListener("click", function() {
                    //                                                 mSendCB("scr_2");
                    //                                             });
                    //                                         }
                    //                                     });
                    //                                 }
                    //                             }   
                    //                             )
                    //                         }
                    //                     });
                    //                 }
                    //             });
                    
                    //             let on_scr_end = () => {
                    //                 mSendCB(`on_scr_end`, {});
                    //             };
                    //         };
                    
                    //         mSet(mScr);
                    //     }
                    // },       
                
                    //screen-2---------------------                
                    // {
                    //     "name": "Screen 2",
                    //     "key": "scr_2",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen
                    
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb") && v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                 v["value"]["cb"][cb_name](p);
                    //             }
                    //         };
                    
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;
                    
                    //         let mSet = (mE = document.body) => {
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             opacity: 1,
                    //                             targets: v.e,
                    //                             scale: [0, 1],
                    //                             duration: 300,
                    //                             easing: 'animate__flip'
                    //                         })
                    //                 }, 500);
                    
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `5.3vw`,
                    //                         "h": `6vh`,
                    //                         "x": 4,
                    //                         "y": 76,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/little_square.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             mArtBox_evnt.add_svg({
                    //                                 "w": `60vw`,
                    //                                 "h": `50vh`,
                    //                                 "x": 20,
                    //                                 "y": 25,
                    //                                 "e": mE,
                    //                                 "position": "relative",
                    //                                 "src": `${m_asset_path}/Rectangle_loading_up.svg`
                    //                             }, 
                                                  
                    //                             {
                    //                                 "onLoad": (v = {}) => {
                    //                                     let aIMicMute = () =>{
                    //                                         v.e.style.opacity = "0";
                    //                                     }

                    //                             // Create the loader element
                    //                                 const loader = document.createElement('div');
                    //                                 loader.id = 'loader';
                    //                                 loader.style.position = 'absolute';
                    //                                 loader.style.top = '45%';
                    //                                 loader.style.left = '50%';
                    //                                 loader.style.transform = 'translate(-50%, -50%)';
                    //                                 loader.style.display = 'none';

                    //                                 // Create the spinner element
                    //                                 const spinner = document.createElement('div');
                    //                                 spinner.classList.add('spinner');

                    //                                 // Add the spinner to the loader
                    //                                 loader.appendChild(spinner);

                    //                                 // Add the loader to the body
                    //                                 document.body.appendChild(loader);

                    //                                 // Add styles for the spinner
                    //                                 const styles = document.createElement('style');
                    //                                 styles.innerHTML = `
                    //                                     .spinner {
                    //                                         border: 8px solid #3A81BF;
                    //                                         border-radius: 50%;
                    //                                         border-top: 8px solid #FB37FF;
                    //                                         width: 80px;
                    //                                         height: 80px;
                    //                                         animation: spin 1s linear infinite;
                    //                                     }

                    //                                     @keyframes spin {
                    //                                         0% { transform: rotate(0deg); }
                    //                                         100% { transform: rotate(360deg); }
                    //                                     }
                    //                                 `;

                    //                                 document.head.appendChild(styles);

                    //                                 // 
                    //                                 loader.style.display = 'block';

                    //                                 setTimeout(function() {
                    //                                     loader.remove();
                                                        
                    //                                 }, 3000); 

                    //                                         mArtBox_evnt.add_svg({
                    //                                             "w": `30vw`,
                    //                                             "h": `12vh`,
                    //                                             "x": 36,
                    //                                             "y": 55,
                    //                                             "e": mE,
                    //                                             "position": "relative",
                    //                                             "src": `${m_asset_path}/LOADING.svg`
                    //                                         });
                    //                                     }
                    //                                 }   
                    //                             )
                    //                         }
                    //                     });
                    //                 }
                    //             });
                    
                    //             let on_scr_end = () => {
                    //                 mSendCB(`on_scr_end`, {});
                    //             };
                    //         };
                    
                    //         mSet(mScr);
                    //     }
                    // },  

                    // Screen-3 -----------------------------
                    // {
                    //     "name": "Screen 3",
                    //     "key": "scr_3",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

                    //         //mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };


                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.position = "relative";

                    //         // Array of image sources
                    //         let imageSources = [
                    //             `${m_asset_path}/about_bg.svg`,
                    //             `${m_asset_path}/about1.svg`,
                    //             `${m_asset_path}/about2.svg`,
                    //             `${m_asset_path}/about3.svg`,
                    //         ];
                    //         let imageSources2 = [
                    //             `${m_asset_path}/about1.svg`,
                    //             `${m_asset_path}/about2.svg`,
                    //             `${m_asset_path}/about3.svg`,
                    //         ];

                    //         // Counter to keep track of the current image
                    //         let currentImageIndex = 0;

                    //         // Function to add an image to the screen
                    //         let addImage = () => {
                    //             // Check if it's the first image
                    //             let isFirstImage = currentImageIndex === 1;

                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mScr,
                    //                 "src": imageSources[currentImageIndex],
                    //                 "style": isFirstImage ? "position: absolute; top: 0; left: 0; z-index: -1;" : "" // Add this line for styling
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     if (currentImageIndex <= 5) {
                    //                         mArtBox_evnt.add_svg({
                    //                             "w": `52vw`,
                    //                             "h": `40vh`,
                    //                             "x": 26,
                    //                             "y": 45,
                    //                             "e": mScr,
                    //                             "src": imageSources2[currentImageIndex]
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 setTimeout(() => {
                    //                                     // console.log(currentImageIndex, imageSources2.length);
                    //                                     if (currentImageIndex <= 4) {
                                                            
                    //                                         mArtBox_evnt.add_animation({
                    //                                         "e":v.e,
                    //                                         "type":"animate__fadeOut"
                                                            
                    //                                     });
                    //                                     setTimeout(() =>{
                    //                                         v.e.remove();
                    //                                     },100)
                                                        
                    //                                     }

                    //                                     currentImageIndex++;
                    //                                     addImage(); // Add the next image
                    //                                 }, 1500); // Set the duration here (in milliseconds)
                    //                             }
                    //                         });
                    //                     } else {
                    //                         // All images have been displayed, trigger callback
                    //                         on_scr_end();
                    //                     }
                    //                 }
                    //             });
                    //         };

                    //         // Start adding images
                    //         addImage();

                    //         // on_scr_end..
                    //         let on_scr_end = () => {
                    //             let timeline = anime.timeline();
                    //             timeline.add({
                    //                 targets: mScr,
                    //                 opacity: 0,
                    //                 duration: 3000,
                    //                 easing: 'easeOutExpo',
                    //                 update: function (anim) {
                    //                     if (anim.progress > 0) {
                    //                         anime.remove(mScr);
                    //                         mScr.remove();
                    //                         //send cb..
                    //                         mSendCB(`on_scr_end`, {});
                    //                     }
                    //                 },
                    //             });
                    //         };
                    //         // ---------|

                    //     }
                    // },

                    // Screen 4 ---------------------
                    // {
                    //     "name": "Screen 1",
                    //     "key": "scr_1",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["e"].innerHTML = ``; //reset

                    //         //mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };


                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100%`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             //set..[Svg]..  
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100%`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg11.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `65vh`,
                    //                         "h": `45vh`,
                    //                         "x": 35,
                    //                         "y": 25,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/Rectangle-big.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 // timeline.add({
                    //                                 //     targets: v.e,
                    //                                 //     opacity: [1, 0],});
                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_animation({
                    //                                         "e": v.e,
                    //                                         "type": "animate__zoomOut",

                    //                                     }),
                    //                                         timeline.add({
                    //                                             targets: v.e,
                    //                                             opacity: [1, 0],
                    //                                         });
                    //                                 }, 1000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `18vh`,
                    //                         "h": `10vh`,
                    //                         "x": 46.5,
                    //                         "y": 42.2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/GET.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 // timeline.add({
                    //                                 //     targets: v.e,
                    //                                 //     opacity: [1, 0],});
                    //                                 setTimeout(() => {
                    //                                     mArtBox_evnt.add_animation({
                    //                                         "e": v.e,
                    //                                         "type": "animate__zoomOut",

                    //                                     }),
                    //                                         timeline.add({
                    //                                             targets: v.e,
                    //                                             opacity: [1, 0],
                    //                                         });
                    //                                 }, 1000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `30vh`,
                    //                         "h": `20vh`,
                    //                         "x": 42.5, //45.5
                    //                         "y": 37.5, //37.5
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/Rectangle-small.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.style.visibility = "hidden";
                    //                                     });
                    //                                 }, 1000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `18vh`,
                    //                         "h": `13vh`,
                    //                         "x": 46.8, //45.5
                    //                         "y": 42.5, //37.5
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/+.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.style.visibility = "hidden";
                    //                                     });
                    //                                 }, 1000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `65vh`,
                    //                         "h": `45vh`,
                    //                         "x": 35,
                    //                         "y": 25,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/Rectangle-big.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.classList.add("animate__animated", "animate__zoomOut")
                    //                                     });
                    //                                 }, 2500)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `18vh`,
                    //                         "h": `10vh`,
                    //                         "x": 46.5,
                    //                         "y": 42.2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/SET.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.classList.add("animate__animated", "animate__zoomOut")
                    //                                     });
                    //                                 }, 2500)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `30vh`,
                    //                         "h": `20vh`,
                    //                         "x": 42.5, //45.5
                    //                         "y": 37.5, //37.5
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/Rectangle-small.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.style.visibility = "hidden";
                    //                                     });
                    //                                 }, 4000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `18vh`,
                    //                         "h": `13vh`,
                    //                         "x": 46.8, //45.5
                    //                         "y": 42.5, //37.5
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/_.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.style.visibility = "hidden";
                    //                                     });
                    //                                 }, 4000)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `65vh`,
                    //                         "h": `45vh`,
                    //                         "x": 35,
                    //                         "y": 25,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/Rectangle-big.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [1, 0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.classList.add("animate__animated", "animate__zoomOut")
                    //                                     });
                    //                                 }, 5500)
                    //                             }
                    //                         }
                    //                     );
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `18vh`,
                    //                         "h": `10vh`,
                    //                         "x": 46.5,
                    //                         "y": 42.2,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/GO!.svg`
                    //                     },
                    //                         {
                    //                             "onLoad": (v = {}) => {
                    //                                 let timeline = anime.timeline();
                    //                                 timeline.add({
                    //                                     targets: v.e,
                    //                                     opacity: [0],
                    //                                 });
                    //                                 setTimeout(() => {
                    //                                     v.e.classList.add("animate__animated", "animate__bounceIn"),
                    //                                         v.e.style.setProperty('--animate-duration', '2s');
                    //                                     v.e.addEventListener('animationend', () => {
                    //                                         v.e.classList.add("animate__animated", "animate__zoomOut")
                    //                                     });
                    //                                 }, 5500)

                    //                             },

                    //                         }
                    //                     );
                    //                     setTimeout(() => {
                    //                         // v.e.remove();
                    //                         scoreRound1();
                    //                     }, 7500);
                    //                 }
                    //             });

                    //         };
                    //         // on_scr_end..
                    //         let on_scr_end = () => {
                    //             let timeline = anime.timeline();
                    //             timeline.add({
                    //                 targets: mScr,
                    //                 opacity: 0,
                    //                 duration: 3000,
                    //                 easing: 'easeOutExpo',
                    //                 update: function (anim) {
                    //                     // mSendCB(`on_scr_end`, {});
                    //                     console.log(anim.progress);

                    //                     if (anim.progress > 0) {
                    //                         anime.remove(mScr);
                    //                         mScr.remove();
                    //                         //send cb..
                    //                         mSendCB(`on_scr_end`, {});

                    //                     }
                    //                 },
                    //             });
                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

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
                            // scr_3();
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

