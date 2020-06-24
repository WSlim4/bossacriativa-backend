'use strict'
const Show = use('App/Models/Show')
const Database = use('Database')

class ShowController {
    async store({ request }){
        const showData = request.all()
        const show = await Show.create(showData)
        
        return show
    }
    async edit({ request, params }){
        const { name, artist, introduction, description, theme_color, category } = request.all()
        const show = await Show.findOrFail(params.id)
            show.name = name,
            show.artist = artist,
            show.introduction = introduction,
            show.description = description,
            show.category = category,
            show.theme_color = theme_color
            show.save()
        
        return show
    }
    async destroy({ params }){
        const show = await Show.findOrFail(params.id)
        show.delete()
        
        return "Show deletado"
    }
    async indexPaginate ({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const shows = Database.table('shows')
        
        return await shows.paginate(page ? page : 1, 8)
    }
    async index (){
        const shows = Database.table('shows')
        
        return await shows.orderBy('id', 'asc')
    }
    async show(){
        const shows = await Database.table('shows')
                         .orderBy('id', 'desc')
                         .limit(4)
         return shows
    }
}

module.exports = ShowController
