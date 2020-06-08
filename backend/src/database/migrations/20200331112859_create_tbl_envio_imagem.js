
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_envio_imagem', function(table){
        table.increments('id_envio_imagem').primary().notNullable().unique();
        table.integer('id_usuario_fk').notNullable();
        table.string('nome');
        table.string('descricao');
        table.string('imagem').notNullable();
        table.timestamp('timestamp_envio').notNullable();
        table.decimal('risco',{precision:6}); //valor de 0 a 1 que representa a precisão da rede neural
        table.foreign('id_usuario_fk').references('tbl_usuario.id_usuario'); 
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_envio_imagem');
};
