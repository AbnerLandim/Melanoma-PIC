
exports.up = function(knex) {
  
    return knex.schema.createTable('tbl_analise', function(table){
        table.increments('id_analise').primary().notNullable().unique();
        table.integer('id_envio_fk').notNullable();
        table.integer('id_usuario_fk').notNullable();
        table.decimal('assimetria',{precision:6}).notNullable();
        table.string('cores').notNullable();
        table.decimal('risco',{precision:6}).notNullable(); //valor de 0 a 1 que representa a precisão da rede neural
        table.foreign('id_envio_fk').references('tbl_envio_imagem.id_envio_imagem');
        table.foreign('id_usuario_fk').references('tbl_usuario.id_usuario');
    });
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('tbl_analise');
};
