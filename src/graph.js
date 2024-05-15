export const graph = [
    {
        id: 1234213,
        type: 'tts',
        data: {
            //txt: 'bla bla bla bla',
            //file: 'path',
            next: NULL
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
                        next: NULL
                    }
                },
            ]
        }
    }
]