import my1 from './audio/1.mp3';
import my2 from './audio/2.mp3';
import my3 from './audio/3.mp3';
import my3_3 from './audio/3-3.mp3';
import my4 from './audio/4.mp3';
import my5 from './audio/5.mp3';
import my6 from './audio/6.mp3';
import my7 from './audio/7.mp3';
import my8 from './audio/8.mp3';
import my9 from './audio/9.mp3';

import { renderer } from './utils';

import { draw_to_svg, diagram_combine, V2, plotf, xyaxes, Interactive} from 'diagramatics';

export const graph = [
    {
        id: 1,
        type: 'tts',
        file: my1,
        data: {
            //txt: 'bla bla bla bla',
            //file: 'path',
            next: 2
        }
    },
    {
        id: 2,
        type: 'tts',
        file: my2,
        data: {
            //txt: 'bla bla bla bla',
            //file: 'path',
            next: 532523
        }
    },
    {
        id: 532523,
        type: 'game',
        data: {
            // component: 'simplegame',
            code: (mygraph) => {
                // get the svg and control element
                let mysvg = document.getElementById('mysvg');
                let controldiv = document.getElementById('controldiv');

                // define the `draw` function
                let draw = (...diagrams) => {
                    draw_to_svg(mysvg, diagram_combine(...diagrams));
                };
 
                let int = new Interactive(controldiv, mysvg);

                int.draw_function = function(inps) {
                    let a = inps['m'];
                    let b = inps['b'];
                    let opt = {
                        xrange: [0, 8], // Positive x-axis from 0 to 8
                        yrange: [0, 8]  // Positive y-axis from 0 to 8
                    };
                    let ax = xyaxes(opt);
                    let f = x => a * x + b;
                    let graph_f = plotf(f, opt).stroke('red').strokewidth(2);
                    draw(ax, graph_f);
                };
                int.slider('m', 0, 8, 1); 
                int.slider('b', 0, 8, 0); 
                int.draw();

                // Select all slider inputs
                const sliders = document.querySelectorAll('input[type="range"]');
                const sliderA = sliders[0];
                const sliderB = sliders[1];

                let handledInteraction = false;

                sliderA.addEventListener('input', (event) => {
                    const value = event.target.value;

                    if (!handledInteraction){
                        setTimeout(() => {
                            renderer(mygraph[0], mygraph)
                        }, 400);
                        handledInteraction = true;
                    }
                });

                sliderB.addEventListener('input', (event) => {
                    const value = event.target.value;

                    if (!handledInteraction){
                        setTimeout(() => {
                            renderer(mygraph[0], mygraph)
                        }, 400);
                        handledInteraction = true;
                    }
                });
            },
            graph: [
                {
                    id: 33,
                    type: 'tts',
                    file: my3_3,
                    data: {
                        //txt: 'bla bla bla bla',
                        //file: 'path',
                        next: 3
                    },
                },
                {
                    id: 3,
                    type: 'mcq',
                    file: my3,
                    data: {
                        // txt: 'bla bla bla bla',
                        // file: 'path',
                        answers: [
                            {
                                txt: 'The graph moves along the x axis',
                                next: null
                            },
                            {
                                txt: 'The graph moves along the y axis',
                                next: 4
                            },
                            {
                                txt: 'The graph turns upside down',
                                next: null
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    type: 'tts',
                    file: my4,
                    data: {
                        //txt: 'bla bla bla bla',
                        //file: 'path',
                        next: 5
                    },
                },
                {
                    id: 5,
                    type: 'mcq',
                    file: my5,
                    data: {
                        // txt: 'bla bla bla bla',
                        // file: 'path',
                        answers: [
                            {
                                txt: 'Positive slope ',
                                next: null
                            },
                            {
                                txt: 'Negative slope ',
                                next: 6
                            },
                            {
                                txt: 'The graph remains parallel',
                                next: null
                            }
                        ]
                    }
                },
                {
                    id: 6,
                    type: 'mcq',
                    file: my6,
                    data: {
                        // txt: 'bla bla bla bla',
                        // file: 'path',
                        answers: [
                            {
                                txt: 'Positive slope ',
                                next: 7
                            },
                            {
                                txt: 'Negative slope ',
                                next: null
                            },
                            {
                                txt: 'The graph remains parallel',
                                next: null
                            }
                        ]
                    }
                },
                {
                    id: 7,
                    type: 'tts',
                    file: my7,
                    data: {
                        //txt: 'bla bla bla bla',
                        //file: 'path',
                        next: null
                    },
                },
            ]
        }
    },
]