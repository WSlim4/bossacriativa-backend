'use strict'
const Workshop = use('App/Models/Workshop')
const Database = use('Database')

class WorkshopController {
    
    async store({ request }){
        const data = request.all()
        const workshop = await Workshop.create(data)
        return workshop
    }

    async edit({ request, params, response, auth }){
        const { category, name, artist_name, description, about_artist, theme_color } = request.all()
        const user = auth.getUser()
        
        try{
            if(user.role != "admin"){
                throw "Error"
            }
            let workshop = await Workshop.findOrFail(params.id)
            workshop.category = category
            workshop.name = name
            workshop.artist_name = artist_name
            workshop.description = description
            workshop.about_artist = about_artist
            workshop.theme_color = theme_color 
            workshop.save()
            return workshop
        } catch(err){
            return response.err
        }

    }
    
    async index ({ request }){
        const { page } = request.all()
        const workshops = Database.table('workshops')
        return await workshops.orderBy('id', 'asc').paginate(page ? page: 1, 16)
    }

    async destroy({ params, response }){
        const workshop = await Workshop.find(params.id)
        try{
            workshop.delete()
            return response.status(200).send({ message: "Oficina deletada"})
        } catch(err){
            return response.status(err.status).send({ error : { message: "Oficina não encontrada" }})
        }
    }
    async show({ params }){
        const workshop = await Workshop.findOrFail(params.id)

        return workshop.lessons().fetch()

    }
    async lastWorkshops({ request }){
        let { page } = request.all()
        page = page ? page : 1
        const lectures  = Database.table('workshops')

        return await lectures.orderBy('id', 'desc').limit(12).paginate(page ? page : 1, 4)
    }
}

module.exports = WorkshopController
