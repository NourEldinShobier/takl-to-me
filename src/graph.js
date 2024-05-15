import my1234213 from './audio/1234213.mp3';
import my75687568 from './audio/75687568.mp3';
import my42342 from './audio/42342.mp3';

import { renderer } from './utils';

import { draw_to_svg, diagram_combine, V2, plotf, xyaxes, Interactive} from 'diagramatics';

export const graph = [
    {
        id: 1234213,
        type: 'tts',
        file: my1234213,
        data: {
            //txt: 'bla bla bla bla',
            //file: 'path',
            next: 75687568
        }
    },
    {
        id: 75687568,
        type: 'tts',
        file: my75687568,
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
                    let a = inps['a'];
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
                int.slider('a', 0, 8, 1); 
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
                        renderer(mygraph[0], mygraph)
                        handledInteraction = true;
                    }
                });

                sliderB.addEventListener('input', (event) => {
                    const value = event.target.value;
                });
            },
            graph: [
                {
                    id: 42342,
                    type: 'tts',
                    file: my42342,
                    data: {
                        //txt: 'bla bla bla bla',
                        //file: 'path',
                        next: null
                    }
                },
            ]
        }
    },
    {
        id: 1234213,
        type: 'mcq',
        data: {
            // txt: 'bla bla bla bla',
            // file: 'path',
            answers: [
                {
                    txt: 'A',
                    next: 12313
                },
                {
                    txt: 'B',
                    next: 111
                },
                {
                    txt: 'C',
                    next: 111
                }
            ]
        }
    },
]