import my1234213 from './audio/1234213.mp3';
import my75687568 from './audio/75687568.mp3';

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
            next: null
        }
    },
    {
        id: 1234213,
        type: 'mcq',
        data: {
            txt: 'bla bla bla bla',
            file: 'path',
            answers: [
                {
                    txt: 'blabla',
                    next: 12313
                },
                {
                    txt: 'blabla',
                    next: 111
                },
                {
                    txt: 'blabla',
                    next: 111
                }
            ]
        }
    },
    {
        id: 532523,
        type: 'game',
        data: {
            component: 'simplegame',
            graph: [
                {
                    id: 1234213,
                    type: 'tts',
                    data: {
                        txt: 'bla bla bla bla',
                        file: 'path',
                        next: null
                    }
                },
            ]
        }
    }
]