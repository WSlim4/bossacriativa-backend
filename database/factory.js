'use strict'

const Factory = use('Factory')

    Factory.blueprint('App/Models/User', () => {
        return {
            username: 'bossacriativa',
            email: 'criativabossa@gmail.com',
            password: 'CRIAtiva20#',
            role: 'admin'
        }
    })
    /*Factory.blueprint('App/Models/Workshop', () => {
        return {
            name: 'Oficina',
            artist_name: 'Qualquer',
            about_artist: 'Um artista',
            category: 'Canto',
            description: 'Uma introdução',
            theme_color: "aqua"
        }
    
    })
    Factory.blueprint('App/Models/Lecture', () => {
        return {
            name: 'Palestra',
            speaker: 'Qualquer',
            introduction: 'Lorem epsum',
            description: 'Palestra',
            category: 'Artes cênicas',
            theme_color: "green"
        }
    
    })
    Factory.blueprint('App/Models/Show', () => {
        return {
            name: 'Show',
            artist: 'Lorem',
            introduction: 'Epsum',
            category: 'Canto lírico',
            description: 'Lorem epsum ispum epsum meps ipsom',
            theme_color: "pink"
        }
    
    })


