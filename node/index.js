'use strict'
const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const pg = require('pg')
const conString = 'postgres:postgres: password@ a18021995 localhost/mydb' // убедитесь, что вы указали данные от вашей базы данных

app.listen(3006)


app.post('/users', function (req, res, next) {
    const user = req.body

    pg.connect(conString, function (err, client, done) {
        if (err) {
            // Передача ошибки в обработчик express
            return next(err)
        }
        client.query('INSERT INTO users (name) VALUES ($1);', [user.name], function (err, result) {
            done() // Этот коллбек сигнализирует драйверу pg, что соединение может быть закрыто или возвращено в пул соединений
            if (err) {
                // Передача ошибки в обработчик express
                return next(err)
            }
            res.send(200)
        })
    })
})