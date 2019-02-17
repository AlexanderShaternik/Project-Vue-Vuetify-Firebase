export default {
    state: {
        books:[
            {
                id: 'qwrqw',
                title: 'Harry Potter and the philosopher stone-1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'asfasfasf',
                parts: 7,
                level: ['B2','C1'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'fafsfafa'
            },
            {
                id: 'qwrqsfw',
                title: 'Harry Potter and the philosopher stone-2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'asfasfыаыавывasf',
                parts: 7,
                level: ['B1','B2'],
                rating: 3.5,
                ratingsCount: 55,
                youtube_playlist_id: 'fafsdsdfsfafa'
            },
            {
                id: 'qwrqsывdwadfw',
                title: 'Harry Potter and the philosopher stone-3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'asfasfыаdwadывывывавывasf',
                parts: 7,
                level: ['A1','A2'],
                rating: 2.5,
                ratingsCount: 70,
                youtube_playlist_id: 'fafsdsdвывadыfsfafa'
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