'use strict'

const Route = use('Route')

Route.group(()=>{
    Route.get('/logout', 'SessionController.destroy') //Faz logout
}).middleware(['auth'])

Route.post('/sessions', 'SessionController.store') //Faz login

Route.post('/users', 'UserController.store') //Registra um novo usuário
Route.get('/users', 'UserController.index') //Puxa todos os usuários
Route.put('/user/:id', 'UserController.edit') //Edita um usuário
Route.delete('/user/:id', 'UserController.destroy') //Deleta um usuário

Route.post('/news', 'NewsController.store') //Adiciona uma notícia
Route.put('/news/:id', 'NewsController.edit') //Edita uma notícia
Route.delete('/news/:id', 'NewsController.destroy') //Deleta uma notícia
Route.get('/news', 'NewsController.index') //Puxa todas as notícias
Route.get('/lastNews', 'NewsController.show') //Puxa as últimas 2 notícias

Route.post('/workshops', 'WorkshopController.store') //Adiciona uma oficina
Route.put('/workshop/:id', 'WorkshopController.edit') //Edita uma oficina
Route.delete('/workshop/:id', 'WorkshopController.destroy') //Deleta uma oficina
Route.get('/workshops', 'WorkshopController.index') //Puxa todas as oficinas
Route.get('/paginateWorkshops', 'WorkshopController.indexPaginate') //Puxa todas as oficinas paginadas
Route.get('/workshopLessons/:id', 'WorkshopController.show') //Puxa as aulas de uma oficina específica

Route.post('/lectures', 'LectureController.store') //Adiciona uma palestra
Route.get('/lectures', 'LectureController.index') //Puxa todas as paletras
Route.get('/paginateLectures', 'LectureController.indexPaginate') //Puxa todas as palestras paginadas
Route.put('/lecture/:id', 'LectureController.edit') //Edita uma palestra
Route.delete('/lecture/:id', 'LectureController.destroy') //Deleta uma palestra

Route.post('/shows', 'ShowController.store') //Adiciona um show
Route.put('/show/:id', 'ShowController.edit') //Edita um show
Route.delete('/show/:id', 'ShowController.destroy') //Deleta um show
Route.get('/shows', 'ShowController.index') //Puxa todos os shows
Route.get('/paginateShows', 'ShowController.indexPaginate') //Puxa todos os shows paginados
Route.get('/lastShows', 'ShowController.show') //Puxa os 4 últimos shows

Route.post('/workshopLessons/:id', 'LessonController.workshopLessonStore') //Adiciona uma aula a oficina específfica
Route.post('/lectureLessons/:id', 'LessonController.lectureLessonStore') //Adiciona uma aula a palestra específica
Route.get('/lastLessons', 'LessonController.show') //Puxa as quatro últimas aulas
Route.get('/lessons', 'LessonController.index') //Puxa todas as aulas de todas as entidades
Route.delete('/lesson/:id', 'LessonController.destroy') //Deleta uma aula

Route.post('/files', 'FileController.store') //Faz o upload do arquivo
Route.get('/file/:id', 'FileController.show') //Faz o download do arquivo

Route.post('/forgotPassword', 'ForgotPasswordController.store') //Envia uma solicitação de troca de senha
Route.put('/resetPassword', 'ForgotPasswordController.update') //Reseta a senha






