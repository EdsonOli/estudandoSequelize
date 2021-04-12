const {Usuario, Post, Comentario, sequelize} = require('./models')
const {Op} = require('sequelize')

Usuario.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

// Post.findAll({
//     where: {
//         text: {[Op.like]: '%oi%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.like] : '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()))
// })

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike] : '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()))
// })

// Comentario.findAll({
//     order:[
//         ['id', 'ASC']  //ASC=crescente DESC= decrescente
//     ],
//     limit: 2,  // de todos os resultados eu sóquero 2
//     offset: 2   //vai pular os dois primeiros e trazer 3 e 4
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

// const paginacao = (pagina) => {
//     let pag = pagina
//     let pular = 0
//     switch(pag){
//         case '1':
//             pular = 0
//             break
//         case '2':
//             pular = 2
//             break
//         case '3':
//             pular = 4
//             break
//         default:
//             console.log("Opção inválida")
//             break
//     }

//     Comentario.findAll({
//         order:[
//             ['id', 'ASC']  //ASC=crescente DESC= decrescente
//         ],
//         limit: 2,  // de todos os resultados eu sóquero 2
//         offset: pular   //vai pular os dois primeiros e trazer 3 e 4
//     })

//     paginacao(3);

// }

// Usuario.create({
//     nome: 'Iago',
//     email: 'iago@gmail.com',
//     senha: '001234'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({

// })

// Usuario.create({
//     nome: 'Brena',
//     email: 'gtinha17@digitalhouse.com',
//     senha: 'brena123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Mariana',
//     email: 'mari@digitalhouse.com',
//     senha: 'mariana123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Bartolomeu',
//     email: 'bart@digitalhouse.com',
//     senha: 'barto123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'João',
//     email: 'gostosonho_do_sport@digitalhouse.com',
//     senha: 'jao123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Edson',
//     email: 'ed_son@digitalhouse.com',
//     senha: 'ed.son123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Ana Julha',
//     email: 'aninha.bbzinha@digitalhouse.com',
//     senha: 'ju123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Post.create({
//     texto: "Bom dia Grupo",
//     img: null,
//     usuarios_id: 10,
//     n_likes: 5
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

Usuario.destroy({
    where: {
        id: 3
    }
}).then((resultado) => {
    console.log(resultado);
})

