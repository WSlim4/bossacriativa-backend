'use strict'
const News = use('App/Models/News')
const Database = use('Database')

class NewsController {
    async store({ request }){
        const newsData = request.only([
            'title',
            'description'
        ])

        const news = await News.create(newsData)
        
        return news
    }
    async edit({ request, params }){
        const { title, description } = request.all()
        const news = await News.findOrFail(params.id)
            news.title = title,
            news.description = description,
            news.save()
        
        return news
        
    }
    async destroy({ params }){
        const news = await News.findOrFail(params.id)
        news.delete()
        
        return "Notícia deletada"
    }
    async index ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const news = Database.table('news')
        
        return await news.paginate(page ? page : 1, 8)
    }
    async show(){
        const news = await Database.table('news')
                         .orderBy('id', 'desc')
                         .limit(2)
        return news
    }
}

module.exports = NewsController
