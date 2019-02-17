export default {
    state: {
        books:[
            {
                id: 'qwrqw',
                title: 'Harry Potter and the philosopher stone-1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'asfasfasf',
                level: ['B2','C1'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'fafsfafa',
                parts:[
                    {
                        id: 'asadssada1',
                        title: 'Kapitel-1',
                        youtube_id: 'dasdasda1'
                    },
                    {
                        id: 'asadssada2',
                        title: 'Kapitel-2',
                        youtube_id: 'dasdasda2'
                    },
                    {
                        id: 'asadssada3',
                        title: 'Kapitel-3',
                        youtube_id: 'dasdasda3'
                    }
                ]
            },
            {
                id: 'qwrqsfw',
                title: 'Harry Potter and the philosopher stone-2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'asfasfыаыавывasf',
                level: ['B1','B2'],
                rating: 3.5,
                ratingsCount: 55,
                youtube_playlist_id: 'fafsdsdfsfafa',
                parts:[
                    {
                        id: 'asadssada1',
                        title: 'Kapitel-1',
                        youtube_id: 'dasdasda1'
                    },
                    {
                        id: 'asadssada2',
                        title: 'Kapitel-2',
                        youtube_id: 'dasdasda2'
                    },
                    {
                        id: 'asadssada3',
                        title: 'Kapitel-3',
                        youtube_id: 'dasdasda3'
                    }
                ]
            },
            {
                id: 'qwrqsывdwadfw',
                title: 'Harry Potter and the philosopher stone-3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'asfasfыаdwadывывывавывasf',
                level: ['A1','A2'],
                rating: 2.5,
                ratingsCount: 70,
                youtube_playlist_id: 'fafsdsdвывadыfsfafa',
                parts:[
                    {
                        id: 'asadssada1',
                        title: 'Kapitel-1',
                        youtube_id: 'dasdasda1'
                    },
                    {
                        id: 'asadssada2',
                        title: 'Kapitel-2',
                        youtube_id: 'dasdasda2'
                    },
                    {
                        id: 'asadssada3',
                        title: 'Kapitel-3',
                        youtube_id: 'dasdasda3'
                    }
                ]
            }
        ]
    },
    mutations: {
        SET_BOOKS(state,payload){
            state.books = payload
        }
    },
    actions: {

    },
    getters: {
        getBooks: (state) => state.books,

    }
}